<template>
<div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
        <h1 class="fw-bold mb-0 fs-2">Regístrate gratis</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Correo</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Contraseña</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Registrarse</button>
          <hr class="my-4">
          <h2 class="fs-5 fw-bold mb-3">O a través de...</h2>
          <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"/></svg>
            Iniciar sesión con Twitter
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"/></svg>
            Iniciar sesión con Facebook
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#github"/></svg>
            Iniciar sesión con GitHub
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>
    
    <script>
    //import FormNota from "../components/FormNota.vue"
    
    export default {
      name: "SignUp",
    
     /* components: {
        FormNota
      }*/
    }
    </script>
    
 