<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Nuevo producto</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro">
          <div class="form-group">
            <label for="" class="form-label">Nombre</label>
            <input
              type="text"
              required
              name="product_name"
              v-model="producto.product_name"
              id="product_name"
              class="form-control"
              placeholder="Ingrese el nombre del producto"
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group">
            <label for="" class="form-label mt-3">Descripcion</label>
            <input
              type="text"
              class="form-control"
              name="product_desc"
              v-model="producto.product_desc"
              id="product_desc"
              
            />
          </div>

          <div class="form-group">
            <label for="" class="form-label mt-3">Precio</label>
            <input
              type="number"
              required
              name="product_price"
              id="product_price"
              v-model="producto.product_price"
              class="form-control"
              placeholder="Ingrese el precio del producto"
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group">
            <label for="" class="form-label mt-3">Categoria</label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="product_category"
              name="product_category"
              v-model="producto.product_category"
            >
              <option value="Algodon">Algodon</option>
              <option value="Lana Sigma">Lana Sigma</option>
              <option value="Alpacril">Alpacril</option>
              <option value="Alpaca baby">Alpaca baby</option>
              <option value="Tela PañoLensi">Tela PañoLensi</option>
              <option value="Alpaca Boom">Alpaca Boom</option>
              <option value="Tela china">Tela china</option>
              <option value="Tela Hindú">Tela Hindú</option>
              <option value="Toallas">Toallas</option>
              <option value="Algodon Sigma">Algodon Sigma</option>
              <option value="Algodon Plus">Algodon Plus</option>
            </select>
          </div>

          <div class="form-group">
            <label for="" class="form-label mt-3">Stock</label>
            <input
              type="number"
              required
              name="product_stock"
              id="product_stock"
              v-model="producto.product_stock"
              class="form-control"
              placeholder="Ingrese el stock del producto"
              aria-describedby="helpId"
            />
          </div>
          <div class="mt-4">
            <router-link
              :to="{ name: 'Listar' }"
              class="btn btn-outline-secondary me-1"
              ><i class="fa-solid fa-chevron-left"></i> Volver</router-link
            >
            <button type="submit" class="btn btn-success">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'CrearProduct',
  
  data() {
    return {
      producto: {},
    };
  },
  methods: {
    agregarRegistro() {
      const apiUrl = process.env.VUE_APP_API_URL
      axios
        .post(apiUrl+'/productos', {
          product_name: this.producto.product_name,
          product_desc: this.producto.product_desc,
          product_price: this.producto.product_price,
          product_category: this.producto.product_category,
          product_stock: this.producto.product_stock,
        })
        .then((respuesta) => respuesta.data)
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          window.location.href = 'listar';
        });
    },
  },
};
</script>
