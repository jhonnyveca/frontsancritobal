<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-success ">
  <div class="container">
    <a class="navbar-brand" href="/">SanCristobal Web </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/listar" class="nav-link">Lista Productos</router-link>
        </li>
      </ul>
      
    </div>
    <div class="collapse navbar-collapse d-flex flex-row-reverse bd-highlight" id="navbarNavDropdown">
      <div class="p-2 bd-highlight">
      <ul class="navbar-nav">
          <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Eric <i class="fa-solid fa-user"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><a class="dropdown-item" href="#">Configuracion</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Cerrar Session</a></li>
          </ul>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
 <br/>
  <router-view/>
</template>




