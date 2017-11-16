<template>
  <div class="container">
    <form class="form-filter">
      <div class="form-group col-sm-3">
        <label for="selectArea">Area</label>
        <select class="form-control"
          id="selectArea"
          @change="changeLocation"
        >
          <option v-for="loc in data.locations"
            :value="loc.id"
          >
          {{ loc.name }}
          </option>
        </select>
      </div>
      <div class="form-group col-sm-2">
        <label for="selectGender">Gender</label>
        <select class="form-control"
          id="selectGender"
          @change="changeGender"
          >
          <option v-for="g in data.genders"
            :value="g.id"
          >
          {{ g.name }}
          </option>
        </select>
      </div>
      <div class="form-group col-sm-3">
        <label for="selectPrice">Price</label>
        <select class="form-control"
          id="selectPrice"
          @change="changePrice"
        >
          <option v-for="p in data.prices"
            :value="p.value">
            {{ p.title }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
  import data from '../dummy/data';

  export default {
    data() {
      return {
        data,
      };
    },
    mounted() {
      // set default value
      const locationId = data.locations.map(l => l.id).reverse().pop();
      const genderId = data.genders.map(g => g.id).reverse().pop();
      const price = data.prices.map(p => p.value).reverse().pop();
      this.$emit('setDefaultValue', { locationId, genderId, price });
    },
    methods: {
      changeLocation(e) {
        const id = e.target.value;
        this.$emit('onChangeLocation', id);
      },
      changeGender(e) {
        const id = e.target.value;
        this.$emit('onChangeGender', id);
      },
      changePrice(e) {
        const id = e.target.value;
        this.$emit('onChangePrice', id);
      },
    },
  };
</script>
