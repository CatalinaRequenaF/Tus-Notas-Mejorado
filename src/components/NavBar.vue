<template> 
  <nav id="navbar" class="navbar navbar-expand-md fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Inicio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Tus notas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Añadir notas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Iniciar sesión</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Busca" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Busca</button>
        </form>
      </div>
    </div>
  </nav>
  </template>

<script>
    export default {
      name: "NavBar",
    }
    </script>