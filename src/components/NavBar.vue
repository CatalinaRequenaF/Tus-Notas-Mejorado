<template> 
  <nav id="navbar" class="navbar navbar-expand-md fixed-top">
    <div class="container-fluid">
      <router-link  class="navbar-brand" to="/">Inicio</router-link >
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link  class="nav-link" aria-current="page" to="/list">Tus notas</router-link >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/form">Añadir notas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Inicia sesión</router-link >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Busca" aria-label="Search">
          <router-link to="/form" class="btn btn-outline-success" type="submit">Busca</router-link>
        </form>
      </div>
    </div>
  </nav>
  </template>

<script>
import { RouteLink } from 'vue-router';
    export default {
      name: "NavBar",
      components:[
        RouteLink
      ]
    }
    </script>