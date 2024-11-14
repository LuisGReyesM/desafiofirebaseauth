<script>
import { createUserWithEmailAndPassword,auth } from '@/auth';

export default{
  data() {
    return {
      email: '',
      password: ''
    }
  },
  
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth,this.email, this.password);
        const user = userCredential.user;  
        this.$router.push('/home');     
        
      } catch (error) {
        console.error('Error al registrar:', error.message);
      }
    }
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Registro</h2>
            <div class="form-group mb-3">
              <input v-model="email" type="email" class="form-control" placeholder="Correo electrónico">
            </div>
            <div class="form-group mb-3">
              <input v-model="password" type="password" class="form-control" placeholder="Contraseña">
            </div>
            <div class="d-grid">
              <button @click="register" class="btn btn-primary btn-block">Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
