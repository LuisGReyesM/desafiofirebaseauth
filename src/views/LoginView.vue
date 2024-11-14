<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Iniciar Sesión</h2>
            <div class="form-group mb-3">
              <input v-model="email" type="email" class="form-control" placeholder="Correo electrónico">
            </div>
            <div class="form-group mb-3">
              <input v-model="password" type="password" class="form-control" placeholder="Contraseña">
            </div>
            <div class="d-grid">
              <button @click="singIn" class="btn btn-primary btn-block">Iniciar Sesión</button>              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { signInWithEmailAndPassword,auth } from '@/auth';

export default{
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async singIn() {
        try {
          console.log ("Entramdo a login")
          //La misma funcion pero forma diferente que registro
            const {email, password} = this;            
            const {user} = await signInWithEmailAndPassword(auth, email, password);
            this.$router.push('/home');

        } catch (error) {
          console.error('Error al iniciar sesión:', error);
        }
      }
    }
  
}
</script>