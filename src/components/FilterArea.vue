<template>
  <div class="container">
    <form class="form-filter">
      <div class="form-group col-sm-3">
        <label for="selectArea">Area</label>
        <select class="form-control" id="selectArea">
          <option>Area 1</option>
          <option>Area 2</option>
          <option>Area 3</option>
          <option>Area 4</option>
          <option>Area 5</option>
        </select>
      </div>
      <div class="form-group col-sm-2">
        <label for="selectGender">Gender</label>
        <select class="form-control" id="selectGender">
          <option>Pria</option>
          <option>Wanita</option>
        </select>
      </div>
      <div class="form-group col-sm-3">
        <label for="selectPrice">Price</label>
        <select class="form-control" id="selectPrice">
          <option>0 - 300 ribu</option>
          <option>300 - 700 ribu</option>
          <option>700 - 1 juta</option>
          <option>> 1 juta</option>
        </select>
      </div>
    </form>
    <!-- <form class="form-inline form-filter">
      <div class="form-group">
        <label for="selectArea">Area</label>
        <select class="form-control" id="selectArea">
          <option>Area 1</option>
          <option>Area 2</option>
          <option>Area 3</option>
          <option>Area 4</option>
          <option>Area 5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="selectGender">Gender</label>
        <select class="form-control" id="selectGender">
          <option>Pria</option>
          <option>Wanita</option>
        </select>
      </div>
      <div class="form-group">
        <label for="selectPrice">Price</label>
        <select class="form-control" id="selectPrice">
          <option>0 - 300 ribu</option>
          <option>300 - 700 ribu</option>
          <option>700 - 1 juta</option>
          <option>> 1 juta</option>
        </select>
      </div>
      <button type="button" class="btn btn-success">Filter</button>
    </form> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      console.info('hallo from filter vue');
    },
  };
</script>
