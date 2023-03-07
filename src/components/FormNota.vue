<template>
      <b-form>
        <b-form-group
          label="Titulo"
          label-for="titulo"
          class="texto"
        >
          <b-form-input
            id="titulo"
            v-model="FormNota.titulo"
            type="text"
            placeholder="Ejemplo: Tareas para hoy"
            required
            autocomplete="off"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Descripcion"
          label-for="descripcion"
          class="texto"
        >
          <b-form-textarea
            id="descripcion"
            v-model="FormNota.descripcion"
            type="text"
            placeholder="Ejemplo: tengo que limpiar el coche y hacer la compra"
            required
            autocomplete="off"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="outline-secondary" @click="saveTask"> Guardar </b-button>
      </b-form>
</template>

<script>
const baseURL="http://localhost:3000/notas";

export default {
  name: "FormNota",

  data() {
    return {
      FormNota: {
        titulo: "",
        descripcion: ""
      },
      methodSave: "new"
    }
  },

  created() {
    if(this.$route.params.index === 0 || this.$route.params.index !== undefined){
      this.methodSave = "update";
      let notas = JSON.parse(localStorage.getItem("notas"));
      this.FormNota = notas[this.$route.params.index];
    }
  },

  methods: {
    saveTask() {
      console.log(this.FormNota)
      fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.FormNota),
      })
        .then(
            () => console.log('YAY')
        )
        .catch((error) => console.error(error));
      this.consolelog('Hecho');
      this.$router.push({ name: "list" });
      },
  }
}
</script>

