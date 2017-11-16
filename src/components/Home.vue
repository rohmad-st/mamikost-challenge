<template>
  <div class="container container-data">
    <div class="row" v-if="filterData.length">
      <div class="column col-sm-4 col-md-3" v-for="kost in filterData">
        <div class="thumbnail">
          <img :src="kost.imageUrl" :alt="kost.title">
          <div class="caption">
            <h4 class="title">{{ kost.title }}</h4>
            <p class="label-row">
              <span class="label label-success">{{ getGender(kost.gender) }}</span>
              <span class="label label-primary">{{ getLocation(kost.location) }}</span>
            </p>
            <p class="description">{{ kost.description }}</p>
            <p class="price">Rp {{ kost.price }}</p>
            <p><a href="#" class="btn btn-block btn-success" role="button">Detail</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="text-center">
        <h4>Sorry, nothing data in this filter.</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../dummy/data';

  export default {
    props: ['locationId', 'genderId', 'price'],
    data() {
      return {
        data,
      };
    },
    computed: {
      filterData() {
        const id = this.locationId;
        const genderId = this.genderId;
        const price = this.price;

        if (id === null || genderId === null || price === null) return data.kosts;
        const priceSplit = this.price.split('-');
        const priceMin = priceSplit[0];
        const priceMax = priceSplit[1];
        const result = data.kosts.filter(k => k.location === parseFloat(id))
                                  .filter(k => k.gender === parseFloat(genderId))
                                  .filter(k => k.price >= parseFloat(priceMin)
                                    && k.price <= parseFloat(priceMax));
        return result;
      },
    },
    methods: {
      getLocation(id) {
        const location = data.locations.filter(l => l.id === id).map(l => l.name);
        if (!location) return 'unknown';
        return location.pop();
      },
      getGender(id) {
        const gender = data.genders.filter(g => g.id === id).map(g => g.name);
        if (!gender) return 'unknown';
        return gender.pop();
      },
    },
  };
</script>
