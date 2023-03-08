<template>
  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <h3>Cosas pendientes hoy</h3>
            <div class="card-body">
              <p class="card-text">Comprar pan, salir a correr, recoger la habitación</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-delete">Borrar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <h3>No olvidar!!</h3>
            <div class="card-body">
              <p class="card-text">RECOGER CORREOS ANTES DEL VIERNES, DNI LA SEMANA Q VIENE!</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-delete">Borrar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <h3>Pelis q tengo q descargar</h3>
            <div class="card-body">
              <p class="card-text">Batman + la nueva de Avatar + esa de viajes en el tiempo</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-delete">Borrar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <h3>EXAMEN 02 D MARZO</h3>
            <div class="card-body">
              <p class="card-text">Ver vídeos. Preguntar dudas al profe.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-delete">Borrar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <h3>Galletas ?</h3>
            <div class="card-body">
              <p class="card-text">Harina, mantequilla, azúcar, chocolate... y ya?</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-delete">Borrar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <h3>Llamar a mi hermano</h3>
            <div class="card-body">
              <p class="card-text">Preguntar si le va bien mañana</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-delete">Borrar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
  //import EditorNota from "../components/EditorNota.vue"

  export default {
    name: "ListItem",
   /* components: {
      EditorNota
    }*/
  }
</script>

<style>

.cover-container {
  max-width: 42em;
}</style>
