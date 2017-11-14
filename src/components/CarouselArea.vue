<template>
  <section>
    <carousel :indicators="indicators" :controls="controls" :interval="interval" ref="carousel">
      <slide v-for="(slide, index) in slides" :key="index">
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
  import Carousel from './carousel/Carousel';
  import Slide from './carousel/Slide';

  export default {
    components: { Carousel, Slide },
    data() {
      return {
        interval: 5000,
        indicators: true,
        controls: true,
        slides: [
          {
            image: 'https://mamikos.com/uploads/cache/data/style/2017-10-07/uYBURYIq-360x480.jpg',
            title: 'Slide 1',
          },
          {
            image: 'https://mamikos.com/uploads/cache/data/style/2016-07-08/BNfx7ELJ-360x480.jpg',
            title: 'Slide 2',
          },
          {
            image: 'https://mamikos.com/uploads/cache/data/style/2017-10-29/HrjRCIwT-360x480.jpg',
            title: 'Slide 3',
          },
          {
            image: 'https://mamikos.com/uploads/cache/data/style/2017-10-07/uYBURYIq-360x480.jpg',
            title: 'Slide 4',
          },
        ],
      };
    },
  };
</script>
