<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Desafío Firebase con Auth</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-if="isAuthenticated">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/registro">Sign Up</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { onAuthStateChanged,auth} from '@/auth';
export default{
  name: "App",
  data(){
    return{
      isAuthenticated: false
    }
  },
  created(){
    onAuthStateChanged(auth,(user)=>{
      this.isAuthenticated = !!user
      //El codigo anterior es lo mismo que esto
      // if (user){
      //   this.isAuthenticated = true
      // }else{
      //   this.isAuthenticated = false
      // }
    }
  )
  }
}
</script>