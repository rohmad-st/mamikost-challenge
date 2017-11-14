<template>
  <div id="app">
    <Navbar/>
    <CarouselArea/>
    <FilterArea/>
    <Home/>
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
      //
    };
  },
};
</script>
