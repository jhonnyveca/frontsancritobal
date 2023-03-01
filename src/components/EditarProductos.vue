<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Actualizar producto</div>
      <div class="card-body">
        <form v-on:submit.prevent="editarRegistro">
          <div class="form-group">
            <label for="" class="form-label">Nombre</label>
            <input
              type="text"
              required
              name="product_name"
              v-model="product.product_name"
              id="product_name"
              class="form-control"
              placeholder="Ingrese el nombre del producto"
              aria-describedby="helpId"
            />
          </div>

          <div class="form-group">
            <label for="" class="form-label mt-3">Precio</label>
            <input
              type="number"
              required
              name="product_price"
              id="product_price"
              v-model="product.product_price"
              class="form-control"
              placeholder="Ingrese el precio del producto"
              aria-describedby="helpId"
            />
          </div>

          <div class="form-group">
            <label for="" class="form-label mt-3">Stock</label>
            <input
              type="number"
              required
              name="product_stock"
              id="product_stock"
              v-model="product.product_stock"
              class="form-control"
              placeholder="Ingrese el stock del producto"
              aria-describedby="helpId"
            />
          </div>
          <div class="mt-4">
            <router-link :to="{ name: 'Listar' }" class="btn btn-outline-secondary me-1"
              ><i class="fa-solid fa-chevron-left"></i> Volver</router-link
            >
            <button type="submit" class="btn btn-warning">Actualizar</button>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
    name: 'EditarProduct',
    data(){
   return {
      product: {},
    };
    },
    created:function(){
    this.getInfoById()
    },
    methods:{
        getInfoById(){
      axios
        .get("http://localhost:8084/api/v1/productos/"+this.$route.params.id)
        .then((respuesta) => respuesta.data)
        .then((data) => {
          console.log(data);
         this.product = data[0];
         
        })
        .catch(console.error);
        },
        editarRegistro(){
        axios
        .put(`http://localhost:8084/api/v1/productos/${this.$route.params.id}`, {
            id: this.$route.params.id,
          product_name: this.product.product_name,
          product_price: this.product.product_price,
          product_stock: this.product.product_stock,
        })
        .then((respuesta) => respuesta.data)
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          window.location.href = "../listar";
        });
        }
       
    },
}
</script>