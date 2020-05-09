<template>
 <div class="covidpage">
  <div class="content">
   <br>
    <h3>COVID-19 DATA COUNTRIES</h3>
     <br>
   <div class="left">
    <table class="covid-table">
     <thead class="bg-dark">
      <tr>
        <th scope="col" style="width: 250px;">Region</th>
        <th scope="col" style="width: 250px;">New Cases</th>
        <th scope="col" style="width: 250px;">Total Confirmed</th>
        <th scope="col" style="width: 250px;">Total Recovered</th>
        <th scope="col" style="width: 250px;">Total Deaths</th>
      </tr>
     </thead>
     <tbody>
     <tr>
      <td>Global</td>
       <td>{{total.NewConfirmed}}</td>
       <td>{{total.TotalConfirmed}}</td>
       <td>{{total.TotalRecovered}}</td>
       <td>{{total.TotalDeaths}}</td>
     </tr>
     </tbody>
    </table>
   </div>
   <div class="mid">
     <table class="table">
       <tr class="bg-dark">
         <th scope="col" style="width: 150px;">Countries</th>
         <th scope="col" style="width: 200px;">New Cases</th>
         <th scope="col" style="width: 200px;">Total Confirmed</th>
         <th scope="col" style="width: 200px;">Total Recovered</th>
         <th scope="col" style="width: 200px;">Total Deaths</th>
       </tr>
      <tr v-for="data in country" :key="data.Country">
        <td>{{data.Country}}</td>
        <td>{{data.NewConfirmed}}</td>
        <td>{{data.TotalConfirmed}}</td>
        <td>{{data.TotalRecovered}}</td>
        <td>{{data.TotalDeaths}}</td>
      </tr>
     </table>
   </div>
  </div>
 </div>
</template>

<script>
 import axios from 'axios'
 export default {
  name: 'Covidpage',
  data () {
   return {
    country:[],
    total: {}
   }
  },
  methods: {
   getCountry () {
    axios({
     method: 'GET',
     url:'https://elixir-fox-api.herokuapp.com/api/countries',
    headers: {
     access_token: localStorage.access_token
    }})
    .then(result=>{
     this.country = result.data.result.Countries
     this.total = result.data.result.Global
    })
   }
  },
  created () {
   this.getCountry()
  }
 }
</script>

<style scoped>
.content{
 display: flex;
 flex-direction: column;
 width: 100%;
}

.left{
 width: 100%;
 display: flex;
 justify-content: center;
}

.left table {
 width: 100%;
}


th{
 border: 1px solid grey;
 color: white;
}
td{
 border: solid 1px grey;
}

.mid{
 margin-top: 20px;
}
.tables{
 width: 100%;
}

</style>