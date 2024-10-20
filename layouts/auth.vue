<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <Nuxt />
      <!-- /.card -->
    </div>
  </div>
</template>

<script>
export default {
  //middleware auth
  middleware: "auth",
};
</script>

<style>
body {
  font-family: "Quicksand", sans-serif;
}

.login-page {
  background-color: #fffcf2 !important;
}

.card-info.card-outline {
  border-top: 3px solid #eb5e28;
}

.btn-info {
  color: #fff;
  background-color: #eb5e28;
  border-color: #eb5e28;
  box-shadow: none;
}

.btn-info:hover {
  color: #fff;
  background-color: #252422;
  border-color: #252422;
  box-shadow: none;
}
</style>
