<template>

  <section class="src-components-choice">

    <div class="container">

      <table class="table table-bordered mt-4">

        <thead>
        <tr>
          <th>Numero pregunta</th>
          <th>Respuesta</th>
        </tr>
        </thead>

        <tbody>
          <tr v-for="(pregunta, index) in preguntas" :key="index">
            <th>{{ pregunta.pregunta}}</th>
            <td>{{ mostrarRespuestas(pregunta.respuesta) }}</td>
          </tr>
        </tbody>

      </table>

  </div>
    
  </section>

</template>

<script>

  export default  {
    name: 'src-components-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas:[
            { pregunta: 1, respuesta: ['b','d'] },
            { pregunta: 2, respuesta: ['b'] },
            { pregunta: 3, respuesta: ['c'] },
            { pregunta: 4, respuesta: ['d'] },
            { pregunta: 5, respuesta: ['b','e'] }
          ]
      }
    },
    methods: {

      mostrarRespuestas(miArray){
        let salida = ''
        let sep = ''
        for (var i = 0; i < miArray.length; i++) {
          salida = salida + sep + miArray[i] 
          sep = ', '
        }
        return salida
      }
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

  .src-components-choice {

  }

</style>
