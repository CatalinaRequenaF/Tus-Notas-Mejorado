<template>
  <br>
  <br>
  <br>
  <br>
    <div class="container mt-2" v-if="notas.length != 0">
      <div v-for="nota in notas" :key="nota.id"> 
        <b-card :title="nota.titulo" class="mb-2" id="card1">
          
          <h6 class="card-subtitle mb-2 text-muted">{{nota.id}}</h6>
          <b-card-text  >{{ nota.descripcion }}</b-card-text>

          <b-button variant="outline-secondary" class="mr-2" @click="edit(nota)"> Editar </b-button>
          <b-button variant="outline-danger" class="mr-2" @click="remove(nota)"> Eliminar </b-button>
        </b-card>
      </div>
    </div>
    <div class="container mt-2 alinear" v-else>
      <b-card class="mb-2" id="card1">
        <b-card-text>Aún no tienes ninguna nota :(</b-card-text>
        <b-card-text>¿Quieres crear una?</b-card-text>
        <b-button variant="outline-danger" class="mr-2" to="/form">Crear nota</b-button>
      </b-card>
    </div>
</template>
    
    <script>
    export default {
      name: "ListItem",
    
      data() {
        return {
          notas: []
        }
      },
    //Renderizar notas creadas
      created() {
        fetch("http://localhost:3000/notas")
        .then((response) => response.json())
        .then((notas) => (this.notas = notas));
      },
    
      methods: {
        edit(nota) {
          this.$router.push({ name: "editar", params: { nota} });
        },
    
        remove(nota) { 
        
          fetch(`http://localhost:3000/notas/${nota.id}`, { method: "DELETE" }).then(
          () => console.log('Eliminada correctamente'),
          );
          
          this.$router.push({ name: "list" })
        },
      }
    }
    </script>
  