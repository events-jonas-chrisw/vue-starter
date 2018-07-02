<template>
  <div class="page-container user-page">
    <div class="card">
      <div class="card-header">
        <h1 class="card-title">Usuário</h1>
      </div>
      <div class="card-body">
        <div class="columns">
          <div class="column col-6 col-sm-12 form-group">
            <label for="first-name" class="form-label">Nome</label>
            <input type="text" id="first-name" v-model="user.first_name" class="form-input" placeholder="Nome">
          </div>
          <div class="column col-6 col-sm-12 form-group">
            <label for="last-name" class="form-label">Sobrenome</label>
            <input type="text" id="last-name" v-model="user.last_name" class="form-input" placeholder="Sobrenome">
          </div>
          <div class="column col-12 col-sm-12 form-group">
            <label for="email" class="form-label">Email</label>
            <input type="text" id="email" v-model="user.email" class="form-input" placeholder="email@domain.com">
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary" @click="save" :disabled="saving" :class="{loading: saving}">
          Salvar
        </button>
        <button class="btn" @click="$router.push({path: '/users'})">
          Voltar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          id: null,
          first_name: '',
          last_name: '',
          email: ''
        },
        saving: false
      }
    },
    mounted () {
      this.user.id = this.$route.params.id;
      this.load();
    },
    methods: {
      load () {
        this.$http.get('/users/' + this.user.id)
          .then(({data}) => this.user = data.data)
          .catch(() => {})
      },
      save () {
        this.saving = true;

        this.$http.put('/users/' + this.user.id, this.user)
          .catch(() => {})
          .then(() => {
            this.$toast.show('Usuário salvo com sucesso');
            this.saving = false;
          });
      }
    }
  }
</script>

<style lang="scss">
  .users-page {

  }
</style>
