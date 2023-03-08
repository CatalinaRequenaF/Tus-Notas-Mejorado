<template> 
<div class="modal fill position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="fill">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
        <h1 class="fw-bold mb-0 fs-2">Añadir nota</h1>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-group mb-3">
            <label for="floatingInput">Titulo</label>
            <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="Ej: Cosas pendientes">
          </div>
          <div class="form-group">
    <label for="floatingInput">Descripcion</label>
    <textarea class="form-control"  placeholder="Ej: Ir a comprar, sacar al perro, lavar el coche..."  id="floatingInput" rows="3"></textarea>
    </div>
    <br>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Guardar</button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//import FormNota from "../components/FormNota.vue"

export default {
  name: "FormItem",

 /* components: {
    FormNota
  }*/
}
</script>
