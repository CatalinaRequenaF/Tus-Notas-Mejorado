<template>
  <div
    class="modal modal-signin position-static d-block bg-secondary py-5"
    tabindex="-1"
    role="dialog"
    id="modalSignin"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-4 shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
          <h1 class="fw-bold mb-0 fs-2">Regístrate gratis</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body p-5 pt-0">
          <form @submit.prevent="registrarUsuario" class="">
            <div class="form-floating mb-3">
              <input
                v-model="name"
                type="text"
                class="form-control rounded-3"
                id="floatingInput"
                placeholder="Nombre"
              />
              <label for="floatingInput">Nombre</label>
            </div>
            <div class="form-floating mb-3">
              <input
                v-model="email"
                type="email"
                class="form-control rounded-3"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Correo</label>
            </div>
            <div class="form-floating mb-3">
              <input
                v-model="password"
                type="password"
                class="form-control rounded-3"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Contraseña</label>
            </div>
            <div class="form-floating mb-3">
              <input
                v-model="confirmPassword"
                type="password"
                class="form-control rounded-3"
                id="confirmPassword"
                placeholder="Repeat password"
              />
              <label for="floatingPassword">Repetir contraseña</label>
            </div>
            <button
              class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              @submit="registrarUsuario"
            >
              Registrarse
            </button>
            <hr class="my-4" />

            <h2 class="fs-5 fw-bold mb-3">O a través de...</h2>
            <button
              class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
              type="submit"
            >
              <svg class="bi me-1" width="16" height="16">
                <use xlink:href="#twitter" />
              </svg>
              Iniciar sesión con Twitter
            </button>
            <button
              class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
              type="submit"
            >
              <svg class="bi me-1" width="16" height="16">
                <use xlink:href="#facebook" />
              </svg>
              Iniciar sesión con Facebook
            </button>
            <button
              class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
              type="submit"
            >
              <svg class="bi me-1" width="16" height="16">
                <use xlink:href="#github" />
              </svg>
              Iniciar sesión con GitHub
            </button>
            <router-link to="/login">¿Ya tienes cuenta? Inicia sesión.</router-link>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    registrarUsuario() {
      // Validar los datos ingresados por el usuario
      if (
        this.name === "" ||
        this.email === "" ||
        this.password === "" ||
        this.confirmPassword === ""
      ) {
        alert("Por favor, complete todos los campos");
        return;
      }

      // Crear un objeto con los datos del usuario
      const nuevoUsuario = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      if (this.password != this.confirmPassword) {
        alert("Las contraseñas no coinciden");
      }

      // Enviar los datos del nuevo usuario al backend utilizando axios
      axios
        .post("http://localhost:3000/usuarios", nuevoUsuario)
        .then(() => {
          // La solicitud se completó con éxito
          alert("Usuario registrado correctamente");
          // Restablecer los campos del formulario después del registro
          this.name = "";
          this.email = "";
          this.password = "";
        })
        .catch((error) => {
          // Ocurrió un error al enviar la solicitud
          alert("Error al registrar el usuario");
          console.error(error);
        });
    },
  },
};
</script>
