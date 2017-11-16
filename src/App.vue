<template>
  <div id="app">
    <Navbar/>
    <CarouselArea/>
    <FilterArea @onChangeLocation="onChangeLocation"
      @onChangeGender="onChangeGender"
      @onChangePrice="onChangePrice"
      @setDefaultValue="setDefaultValue"
    />
    <Home :locationId="locationId"
      :genderId="genderId"
      :price="price"
    />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import CarouselArea from './components/CarouselArea';
import FilterArea from './components/FilterArea';
import Home from './components/Home';

require('./assets/styles/main.scss');

export default {
  name: 'app',
  components: {
    Navbar,
    CarouselArea,
    FilterArea,
    Home,
  },
  data() {
    return {
      locationId: null,
      genderId: null,
      price: null,
    };
  },
  methods: {
    setDefaultValue({ locationId, genderId, price }) {
      this.locationId = locationId;
      this.genderId = genderId;
      this.price = price;
    },
    onChangeLocation(id) {
      this.locationId = id;
    },
    onChangeGender(id) {
      this.genderId = id;
    },
    onChangePrice(id) {
      this.price = id;
    },
  },
};
</script>
