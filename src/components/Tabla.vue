<template>

  <section class="src-components-tabla">

    <div class="jumbotron">
      
      <div class="table-responsive">

        <div class="container">
      
       <input type="text" :class="[{ 'textRed': totalGastos > presupuesto, 'my-3': true }]" v-model="presupuesto" placeholder="Ingrese presupuesto"/> 

        <table class="table">

          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Importe</th>
              <th>Fecha creacion</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(gasto, index) in gastos" :key="index">
              <td>{{gasto.nombre}}</td>
              <td>{{gasto.descripcion}}</td>
              <td>{{agregaSignoPesos(gasto.importe)}}</td>
              <td>{{formatearFecha(gasto.createdAt)}}</td>
            </tr>

            <tr :class="[{ 'textGreen': gastoBajo, 'textMagenta': gastoMedio, 'textOrange': gastoAlto }]">
              <td></td>
              <td align="right"><b>Total</b></td>
              <td><b>{{ agregaSignoPesos(totalGastos) }}</b></td>
              <td></td>
            </tr>

          </tbody>

        </table>

        </div>

      </div>

    </div>

  </section>

</template>

<script>

  import filters from '../filters.js'

  export default  {
    name: 'src-components-tabla',
    mixins: [filters],
    props: [],
    mounted () {

      this.getDatosFormAxios()

    },
    data () {
      return {
        gastos: [],
        url : 'https://5f7e9ef90198da0016893b7f.mockapi.io/gastos',
        presupuesto: ''
      }
    },
    methods: {

        getDatosFormAxios() {
            this.axios(this.url)
            .then(res => this.gastos = res.data)
            .catch(error => console.log('HTTP GET ERROR', error))
        }

    },
    computed: {

      totalGastos(){

        let importe = 0
        for (var i = 0; i < this.gastos.length; i++) {
          importe += parseInt(this.gastos[i].importe)
        }

        return importe

      },

      gastoBajo(){
        return this.totalGastos < 1000
      },

      gastoMedio(){
        return (this.totalGastos >= 1000 && this.totalGastos < 5000)
      },

      gastoAlto(){
        return this.totalGastos >= 5000
      }

    }
}


</script>

<style scoped lang="css">
  .src-components-tabla {

  }

  .textRed{
    color: red
  }

  .textGreen{
    color: green
  }

  .textMagenta{
    color: magenta
  }

  .textOrange{
    color: orange
  }

  .jumbotron{
    background-color: #949495;
  }

</style>
