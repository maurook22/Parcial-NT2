<template>

  <section class="src-components-formulario">
    
    <div class="jumbotron">
      <h2>Alta Gastos</h2>
      <hr />

      <div class="container">

      <form novalidate autocomplete="off" @submit.prevent="enviar()">
          <!-- CAMPO NOMBRE -->
          <div class="form-group">
                <label for="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    class="form-control"
                    placeholder="Ingrese nombre.."
                    v-model="$v.f.nombre.$model"
                >

                <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.nombre.minLength.$invalid">Este campo debe tener al menos 5 caracteres</div>
                    <div v-else-if="$v.f.nombre.maxLength.$invalid">Este campo debe tener como mucho 15 caracteres</div>
                </div>
          </div>
          <!--  CAMPO DESCRIPCION  -->
          <div class="form-group">
                <label for="descripcion">Descripcion</label>
                <input 
                    type="text"
                    id="descripcion"
                    class="form-control"
                    placeholder="Ingrese descripcion.."
                    v-model="$v.f.descripcion.$model"
                >

                <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.descripcion.required.$invalid">Este campo es requerido</div>
                </div>
          </div>
          <!--  CAMPO IMPORTE  -->
          <div class="form-group">
                <label for="importe">Importe</label>
                <input 
                    type="number"
                    id="importe"
                    class="form-control"
                    placeholder="Ingrese importe.."
                    v-model="$v.f.importe.$model"
                >

                <div v-if="$v.f.importe.$error && $v.f.importe.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.importe.required.$invalid">Este campo es requerido</div>
                </div>
          </div>

          <!--  BOTON ENVIAR  -->
          <div class="form-group">
                <input 
                    type="submit"
                    :disabled="$v.f.$invalid || $v.f.importe.$model == '' || $v.f.descripcion.$model == '' || $v.f.nombre.$model == ''"
                    class="btn btn-success mt-4"
                    value="Enviar"
                >
          </div>
      </form>

      </div>

    </div>
    
  </section>

</template>

<script>

  import { required, minLength, maxLength } from '@vuelidate/validators'

  export default  {

    name: 'src-components-formularioVue',

    props: [],

    mounted () {
      
    },
    data () {

      return {

          f: this.resetForm(),
          url : 'https://5f7e9ef90198da0016893b7f.mockapi.io/gastos'

      }

    },
    validations: {

      f: {

        nombre: { 
          required,
          minLength: minLength(5),
          maxLength: maxLength(15)
        },

        descripcion: { 
          required
          
        },

        importe: { 
          required
        }

      }
      
    },
    methods: {

        sendDatosFormAxios(datos) {
            this.axios.post(this.url, datos, {'content-type': 'application/json'})
            .then(res => console.log(res, 'REGISTRO AGREGADO'))
            .catch(error => console.log('HTTP POST ERROR', error))
        },
   
        enviar() {
            let form = {
                nombre: this.$v.f.nombre.$model,
                descripcion: this.$v.f.descripcion.$model,
                importe: this.$v.f.importe.$model
            }
            this.sendDatosFormAxios(form)
            this.f = this.resetForm()
            this.$v.$reset()
        },
        
        resetForm() {
            return {
               nombre: '',
               descripcion : '',
               importe: ''
            }
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .jumbotron {
    background-color:#976937;
    color: white;
  }
  
</style>
