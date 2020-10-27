<template>

  <section class="src-components-formulario">
    
    <div class="jumbotron">
      <h2>Alta Tareas</h2>
      <hr />

      <form novalidate autocomplete="off" @submit.prevent="enviar()">
          <!-- CAMPO NOMBRE -->
          <div class="form-group">
                <label for="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    class="form-control"
                    placeholder="Ingrese nombre de la tarea.."
                    v-model="$v.f.nombre.$model"
                >

                <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                </div>
          </div>
          <!--  CAMPO DESCRIPCION  -->
          <div class="form-group">
                <label for="descripcion">Descripcion</label>
                <input 
                    type="text"
                    id="descripcion"
                    class="form-control"
                    placeholder="Ingrese descripcion de la tarea.."
                    v-model="$v.f.descripcion.$model"
                >

                <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.descripcion.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.descripcion.minLength.$invalid">Este campo debe tener al menos 10 caracteres</div>
                    <div v-else-if="$v.f.descripcion.maxLength.$invalid">Este campo debe tener como mucho 50 caracteres</div>
                </div>
          </div>
          <!--  CAMPO MAIL  -->
          <div class="form-group">
                <label for="mail">Mail</label>
                <input 
                    type="text"
                    id="mail"
                    class="form-control"
                    placeholder="Ingrese mail de la tarea.."
                    v-model="$v.f.mail.$model"
                >

                <div v-if="$v.f.mail.$error && $v.f.mail.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.mail.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.mail.email.$invalid">Debe introducir un mail valido</div>
                </div>
          </div>

          <div class="form-group">
                <input 
                    type="submit"
                    :disabled="$v.f.$invalid || $v.f.mail.$model == '' || $v.f.descripcion.$model == '' || $v.f.nombre.$model == ''"
                    class="btn btn-success mt-4"
                    value="Enviar"
                >
          </div>
      </form>

    </div>
    
  </section>

</template>

<script>

  import { required, minLength, maxLength, email } from '@vuelidate/validators'

  export default  {

    name: 'src-components-formularioVue',

    props: [],

    mounted () {
      
    },
    data () {

      return {

          f: this.resetForm(),
          url : 'https://5f7e9ef90198da0016893b7f.mockapi.io/tareas'

      }

    },
    validations: {

      f: {

        nombre: { 
          required
        },

        descripcion: { 
          required,
          minLength: minLength(10),
          maxLength: maxLength(50)
        },

        mail: { 
          required,
          email
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
                mail: this.$v.f.mail.$model
            }
            this.sendDatosFormAxios(form)
            this.f = this.resetForm()
            this.$v.$reset()
        },
        
        resetForm() {
            return {
               nombre: '',
               descripcion : '',
               mail: ''
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
</style>
