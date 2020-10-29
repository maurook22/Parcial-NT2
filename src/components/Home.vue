<template>

  <section class="src-components-home">

    <div class="jumbotron">

      <h1 class="my-3"><u>PARCIAL NT2</u></h1>
      <h2>Profesor: Daniel Sanchez</h2>
      <h3>Alumno: Abraham Mauro</h3>
      <h3>Fecha: 28/10/20</h3>

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

  .jumbotron{
    background-color:#430049;
    color: white
  }

</style>
