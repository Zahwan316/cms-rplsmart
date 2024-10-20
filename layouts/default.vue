<template>
  <div>
    <!-- navbar -->
    <Navbar />

    <!-- content -->
    <Nuxt />

    <!-- footer -->
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/web/navbar.vue";
import Footer from "@/components/web/footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  background-color: #fffcf2 !important;
}

.jumbotron {
  background: #bd562d !important;
  color: white;
}

.bg-navbar {
  background: #252422; /* Warna navbar menjadi dark */
}

.btn-primary {
  background-color: #403d39; /* Gray dark */
  border-color: #403d39;
}

.btn-primary:hover {
  background-color: #403d39;
  border-color: #403d39;
}

.btn-primary-dark {
  background-color: #252422;
  border-color: #252422;
  color: white;
}

.btn-primary-dark:hover {
  color: white;
}

.card-category {
  background-color: #ccc5b9;
}

.carousel-item .img-fluid {
  border-radius: 0.5rem;
}

.object-fit-cover {
  object-fit: cover;
}

.footer-top {
  background-color: #403d39;
  color: white;
}

.footer-bottom {
  background-color: #252422;
}
</style>
