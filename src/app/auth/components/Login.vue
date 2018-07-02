<template>
  <div class="login-page">
    <div class="login columns">
      <div class="column col-5 hide-sm brand">

      </div>
      <div class="column col-7 col-sm-12 form">
        <form @submit.stop.prevent="submit">
          <h2>Login</h2>

          <div class="form-group">
            <label class="form-label" for="username">Usuário</label>
            <input v-model="form.username" id="username" class="form-input">
          </div>

          <div class="form-group">
            <label class="form-label" for="password">Senha</label>
            <input v-model="form.password" type="password" id="password" class="form-input">
          </div>

          <div class="form-group">
            <label class="form-switch">
              <input type="checkbox" v-model="form.remember">
              <i class="form-icon"></i> Lembrar usuário
            </label>
          </div>

          <div class="form-group pt-2">
            <button class="btn btn-primary btn-block" :class="{loading}">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import localforage from 'localforage';
  import { mapActions } from 'vuex';

  export default {
    name: 'Login',
    data () {
      return {
        form: {
          username: '',
          password: '',
          remember: true
        },
        loading: false
      }
    },
    mounted () {
      localforage.getItem('login')
        .then(login => {
          login = login || {};
          this.form.remember = login.remember;
          this.form.username = login.username;
          document.querySelector(`#${login.username ? 'password' : 'username'}`).focus();
        });
    },
    methods: {
      ...mapActions(['attemptLogin', 'loadUser']),
      submit (e) {
        this.loading = true;

        localforage.setItem('login', {
          username: this.form.remember ? this.form.username : '',
          remember: this.form.remember
        });

        this.$toast.close();

        const { username, password } = this.form;

        this.attemptLogin({ username, password })
          .then(() => this.$router.push({path: '/home'}))
          .catch(() => this.$toast.show('Dados de login inválidos', {type: 'error'}))
          .then(() => this.loading = false);

        e.preventDefault();
      }
    }
  }
</script>

<style lang="scss">
  $bg-image: "~assets/images/bg-login.jpeg";
  $blur: 10px;
  $break-sm: 600px;

  .login-page {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    position: relative;
    &:before {
      position: absolute;
      content: "";
      left: -($blur * 2);
      top: -($blur * 2);
      right: -($blur * 2);
      bottom: -($blur * 2);
      background: url($bg-image) no-repeat center;
      background-size: cover;
      filter: blur($blur) brightness(50%);
    }
    .login {
      width: 30rem;
      z-index: 1;
      @media screen and (max-width: $break-sm) {
        width: 100%;
        margin: 20px;
      }
    }
    .column.brand {
      background: url($bg-image) no-repeat center;
      background-size: cover;
      border-radius: 5px 0 0 5px;
      padding: 2rem;
      position: relative;
      overflow: hidden;
    }
    .column.form {
      background-color: #eee;
      border-radius: 0 5px 5px 0;
      padding: 2rem;
      @media screen and (max-width: $break-sm) {
        border-radius: 5px;
      }
    }
  }
</style>
