<template>
  <div class="container">
    <div class="card">
      <div class="card-header"><h5>Lista de Productos</h5></div>

      <div>
        <div class="card p-3">
          <Toolbar class="mb-2">
            <template #start>
              <router-link to="/crear" class="btn btn-success mt-3"
                ><i class="fa-solid fa-plus"></i> Agregar Producto</router-link
              >
            </template>

            <template #end>
              <Button
                label="Generar Reporte "
                icon="pi pi-file-pdf"
                class="p-button-raised p-button-danger p-2 me-2"
                @click="exportPDF($event)"
              />
            </template>
          </Toolbar>
          <DataTable
          
            ref="dt"
            :value="products"
            dataKey="id"
            :paginator="true"
            :rows="5"
            :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25]"
            currentPageReportTemplate="Mostrando del {first} al {last} de un total de {totalRecords} productos"
            showGridlines
            responsiveLayout="scroll"
          >
            <template #header>
              <div
                class="table-header flex flex-column md:flex-row md:justiify-content-between"
              >
                <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <InputText
                    v-model="filters['global'].value"
                    placeholder="Buscar"
                  />
                </span>
              </div>
            </template>

            <Column
              field="product_id"
              header="ID"
              :sortable="true"
              style="min-width: 3rem"
            ></Column>
            <Column
              field="product_name"
              header="Nombre"
              :sortable="true"
              style="min-width: 10rem"
            ></Column>
             <Column
              field="product_desc"
              header="Descripcion"
              :sortable="true"
              style="min-width: 16rem"
            ></Column>
            <Column
              field="product_price"
              header="Precio"
              :sortable="true"
              style="min-width: 8rem"
            ></Column>
            <Column
              field="product_category"
              header="Categoria"
              :sortable="true"
              style="min-width: 10rem"
            ></Column>
            <Column
              field="product_stock"
              header="Stock"
              :sortable="true"
              style="min-width: 6rem"
            ></Column>
            <Column
              field="product_date"
              header="Fecha Registro"
              
              style="min-width: 12rem"
            ></Column>

            <Column
              field="product_id"
              header="Acciones"
              :exportable="false"
              style="min-width: 8rem"
            >
              <template #body="{ data }">
                <router-link
                  :to="{ name: 'Editar', params: { id: data.product_id } }"
                  class="btn btn-warning me-2"
                  ><i class="fa-solid fa-pen"></i
                ></router-link>

                <button
                  type="button"
                  v-on:click="deleteUser(data.product_id)"
                  class="btn btn-danger"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { FilterMatchMode } from 'primevue/api';
import { jsPDF } from "jspdf";
import 'jspdf-autotable'

export default {
  
  data() {
    return {
      products: [],
      filters: {},
      submitted: false,
    };
  },
  name: 'ListarProduct',
  created: function () {
    this.getProducts();
    this.initFilters();
  },
  methods: {
    getProducts() {
      const apiUrl = process.env.VUE_APP_API_URL
      axios
        .get(apiUrl+'/productos/')
        .then((respuesta) => respuesta.data)
        .then((data) => {
          console.log(data);
          this.products = [];
          if (typeof data[0].success == 'undefined') {
            this.products = data;
          }
        })
        .catch(console.error);
    },
    deleteUser(id) {
      const apiUrl = process.env.VUE_APP_API_URL
      this.$swal
        .fire({
          title: '¿Desea eliminar este producto?',
          text: 'Esta accion es irreversible!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar',
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              'Eliminado',
              'El producto ha sido eliminado.',
              'success'
            );
            axios
              .delete(apiUrl+`/productos/${id}`)
              .then((respuesta) => respuesta.data)
              .then((data) => {
                console.log(data);
                this.getProducts();
              })
              .catch(console.error);
          }
        });
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
   
    exportPDF() {
      var vm = this
      var columns = [
        {title: "Nombre", dataKey: "product_name"},
        {title: "Descripcion", dataKey: "product_desc"},
        {title: "Precio", dataKey: "product_price"},
        {title: "Categoria", dataKey: "product_category"},
        {title: "Stock", dataKey: "product_stock"},
        {title: "Fecha Registro", dataKey: "product_date"},
      ];
      var doc = new jsPDF('p', 'pt');
      //doc.title('Reporte de productos')
      doc.text('Reporte de productos', 40, 40);
      //doc.top('Fecha')
      doc.autoTable(columns, vm.products, {
        margin: {top: 60},
      });
      doc.save('ReporteProductos.pdf');
    },
  },
};
</script>
