<template>
  <div class="container">
  
    <div class="card">
      <div class="card-header">Lista de Productos</div>
      <div class="table-responsive card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.product_id">
              <td>{{ product.product_id }}</td>
              <td>{{ product.product_name }}</td>
              <td>{{ product.product_price }}</td>
              <td>{{ product.product_stock }}</td>
              <td>
                  <div>
                      <router-link :to="{name:'Editar', params:{id:product.product_id}}" class="btn btn-warning me-2"><i class="fa-solid fa-pen"></i></router-link>
                      <button type="button" v-on:click="deleteUser(product.product_id)" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button> 
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
      <router-link to="/crear" class="btn btn-success mt-3"><i class="fa-solid fa-plus"></i> Agregar Producto</router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    
    return {
      products: [],
    };
  },
  name: "ListarProduct",
  created: function () {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get("http://localhost:8084/api/v1/productos/")
        .then((respuesta) => respuesta.data)
        .then((data) => {
          console.log(data);
           this.products = [];
          if (typeof data[0].success == "undefined") {
            this.products = data;
          } 
        })
        .catch(console.error);
    },
    deleteUser(id) {
  this.$swal.fire({
title: '¿Desea eliminar este producto?',
  text: "Esta accion es irreversible!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, eliminar'
  }).then((result) => {
  if (result.isConfirmed) {
    this.$swal.fire(
      'Eliminado',
      'El producto ha sido eliminado.',
      'success'
    )
      axios
        .delete(`http://localhost:8084/api/v1/productos/${id}`)
        .then((respuesta) => respuesta.data)
        .then((data) => {
          console.log(data);
         window.location.href="listar";
        })
        .catch(console.error); 
  }
})         
    }
  },
};
</script>
