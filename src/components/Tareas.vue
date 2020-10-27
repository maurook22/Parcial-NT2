<template>

  <section class="src-components-tareas">

    <div class="jumbotron">
      <h2>Tareas</h2>
        <button class="btn btn-primary" @click="goInicio()">Volver</button>
      <hr />
      
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Nombre</th>
              <th>Mail</th>
              <th>Fecha creacion</th>
            </tr>
          </thead>

          <tbody>

            <tr v-for="(tarea, index) in tareas" :key="index">
              <td>{{tarea.descripcion}}</td>
              <td>{{tarea.nombre}}</td>
              <td>{{tarea.mail}}</td>
              <td>{{formatearFecha(tarea.createdAt)}}</td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>

  </section>

</template>

<script>

  import filters from '../filters.js'

  export default  {
    name: 'src-components-tareas',
    mixins: [filters],
    props: [],
    mounted () {

      this.getDatosFormAxios()

    },
    data () {
      return {
        tareas: [],
        url : 'https://5f7e9ef90198da0016893b7f.mockapi.io/tareas',
        logueado: false
      }
    },
    methods: {

        getDatosFormAxios() {
            this.axios(this.url)
            .then(res => this.tareas = res.data)
            .catch(error => console.log('HTTP GET ERROR', error))
        },

        goInicio(){
          this.$router.push('/')
        }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-tareas {

  }
</style>
