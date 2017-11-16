<template>
  <section>
    <carousel :indicators="indicators" :controls="controls" :interval="interval" ref="carousel">
      <slide v-for="(slide, index) in data.slides" :key="index">
        <div style="width: 100%; height: 400px; text-align: center;" :style="{background:index % 2 === 0? '#99a9bf' : '#d3dce6'}">
          <img :src="slide.image">
        </div>
        <div class="carousel-caption">
          <h3>This is {{slide.title}}</h3>
        </div>
      </slide>
    </carousel>
  </section>
</template>

<script>
  import data from '../dummy/data';
  import Carousel from './carousel/Carousel';
  import Slide from './carousel/Slide';

  export default {
    components: { Carousel, Slide },
    data() {
      return {
        data,
        interval: 5000,
        indicators: true,
        controls: true,
      };
    },
  };
</script>
