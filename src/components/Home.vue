<template>

  <section class="src-components-home">

    <div class="jumbotron">

      <form novalidate autocomplete="off" @submit.prevent="ingresar()">

      <div class="form-group">
        <label for="nombre">Usuario</label>
          <input 
            type="text"
            id="usuario"
            class="form-control"
            placeholder="Ingrese su usuario"
            v-model="usuario"
          >
      </div>

      <div class="form-group">
        <label for="password">Password</label>
          <input 
            type="password"
            id="password"
            class="form-control"
            placeholder="Ingrese su password"
            v-model="password"
          >
      </div>

      <div v-if="datosOK" class="alert alert-warning">Datos incorrectos</div>

      <button class="btn btn-primary" type="submit">Ingresar</button>

      </form>

    </div>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-home',
    props: [],
    mounted () {

    },
    data () {
      return {
        usuario: '',
        password: '',
        datosOK: false
      }
    },
    methods: {

      ingresar(){
        
        if(this.usuario == 'root' && this.password == '1234'){
          this.$router.push('/tareas')
        }else{
          this.datosOK = true
        } 

      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-home {

  }


</style>
