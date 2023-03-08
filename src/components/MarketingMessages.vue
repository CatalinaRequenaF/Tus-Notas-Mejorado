<template>
  <div class="container marketing">
<div class="row">
  <div class="col-lg-4">
    <img class="img-fluid" src="../../public/img6.jpg" alt="">
    <h2 class="fw-normal">Ordena tus ideas</h2>
    <p>Para tener todo bajo control a veces es necesario ir paso a paso.</p>
    <p><router-link to="/form" class="btn btn-secondary"> Anotar algo &raquo;</router-link></p>
  </div><!-- /.col-lg-4 -->
  <div class="col-lg-4">
    <img class="img-fluid" src="../../public/img5.jpg" alt="">
    <h2 class="fw-normal">Optimiza tu tiempo</h2>
    <p>De más fácil a más difícil, de más aburrido a más divertido... Gestiona tus actividades de la forma que más te guste.</p>
    <p><router-link to="/form" class="btn btn-secondary"> Anotar algo &raquo;</router-link></p>
  </div><!-- /.col-lg-4 -->
  <div class="col-lg-4">
    <img class="img-fluid" src="../../public/img4.jpg" alt="">
    <h2 class="fw-normal">Relájate</h2>
    <p>Una vez escrito, no tienes por qué obsesionarte con lo que debes hacer. Ya lo verás cuándo puedas.</p>
    <p><router-link to="/form" class="btn btn-secondary"> Anotar algo &raquo;</router-link></p>
  </div><!-- /.col-lg-4 -->
</div><!-- /.row -->
</div><!-- /.container -->
</template>

<script>
export default {
  name: 'MarketingMessages'
}
</script>
