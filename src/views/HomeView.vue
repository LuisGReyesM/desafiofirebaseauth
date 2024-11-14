<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <h1 class="card-title mb-4">Vista Protegida</h1>
            <p class="card-text">Has accedido a una vista protegida. Solo los usuarios autenticados pueden ver esta página.</p>
            <button @click="logout" class="btn btn-danger mt-3">Cerrar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
}

.card {
  border-radius: 10px;
  border: none;
}

.card-body {
  padding: 40px;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
}

.card-text {
  font-size: 1.2rem;
  color: #6c757d;
}
</style>

<script>
import {signOut, auth} from '@/auth'
import {useRouter} from 'vue-router'

export default{

  setup(){
    const router = useRouter()
    const logout = async() => {
      try{
        await signOut(auth)     
        router.push('/')
      } catch(error){
        console.error('Error al desloguearse:', error)
      }     
    }
    return {
      logout
    }
  }
}
</script>
