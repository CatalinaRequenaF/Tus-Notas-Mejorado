<template>
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="img-fluid dark-img" src="../../public/img3.jpg" alt="">
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Apuntar lo que necesitas recordar más tarde es una buena forma de delegar el trabajo a tu 'yo del futuro'.</h1>
            <p>Organizarse es la mejor manera de estar tranquilo.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img  class="img-fluid" src="../../public/img2.jpg" alt="">
        <div class="containers">
          <div class="carousel-caption">
            <h1>¿Sabías que dedicar un rato a organizar tu trabajo hace que... trabajes menos?</h1>
          </div>
        </div>
      </div>
      <div class="carousel-item">
      <img class="img-fluid dark-img" src="../../public/img1.jpg" alt="">
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>¿Ahora no te puedes encargar? Sin problema.</h1>
            <p>Despreocúpate de ello y sigue con lo que estás haciendo.</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>  
  </div>
</template>

<script>

export default {
  name: 'CarrouselItem',
}
</script>

