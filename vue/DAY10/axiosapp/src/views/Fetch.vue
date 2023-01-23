<template>
  <div class="home">
    <input type="text" v-model="ciry" placeholder="请输入地址或者经纬度" />
    <br /><br /><button @click="searchFn(ciry)">提交</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: function () {
    return {
      ciry: "",
    };
  },
  methods: {
    timeWeather(locationId) {
      let httpUrl = `https://devapi.qweather.com/v7/weather/now`;
      let query = `?location=${locationId}&key=8363b712ef0b4c0eba3b3eb64781ae6a`;
      fetch(httpUrl + query)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    },
    citySearch(city, Acallback) {
      let httpUrl = `https://geoapi.qweather.com/v2/city/lookup`;
      let query = `?location=${city}&key=8363b712ef0b4c0eba3b3eb64781ae6a`;
      fetch(httpUrl + query)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let locationId = data.location[0].id;
          Acallback(locationId);
        });
    },
    //方法一
    searchFn(city) {
      this.citySearch(city, this.timeWeather);
    },
  },
};
</script>