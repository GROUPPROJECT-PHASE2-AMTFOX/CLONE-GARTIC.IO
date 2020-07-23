<template>
  <section id="login" style="overflow: hidden;">
    <div class="wrapper-test">
      <div class="message"></div>
      <form @submit.prevent="login" method="post" class="form-signin pb-2" id="login-form">
        <h2 class="form-signin-heading text-center">Login</h2>
        <label for="username">Username</label>
        <input
          v-model="username"
          id="username-login"
          type="text"
          class="form-control"
          name="username"
          placeholder="Username"
          required
          autofocus
        />
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password-login"
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
          required
        />
        <button class="btn btn-lg btn-primary btn-block">Login</button>
        <small>
          Don't have an account?
          <a href="#" @click.prevent="changePage">Register</a>
        </small>
        <div class="mb-4 text-center">
          <hr />
          <h6 class="text-uppercase">or</h6>
        </div>

        <button v-google-signin-button="clientId" class="google-signin-button">Continue with Google</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>