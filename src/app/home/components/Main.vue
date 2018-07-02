<template>
  <div class="page-container home-page">
    <div class="page-header">
      <h1 class="page-title">Dashboard</h1>
    </div>

    <div class="columns">
      <div class="column col-sm-12">
        <div class="card mb-2">
          <div class="card-header">
            <h2 class="card-title">Usuários</h2>
            <h3 class="card-subtitle">Últimos 3 usuários</h3>
          </div>
          <div class="card-body">
            <table class="table">
              <tr v-for="user in users">
                <td width="50px">
                  <figure class="avatar avatar-sm">
                    <img :src="user.avatar" alt="">
                  </figure>
                </td>
                <td>{{ user.first_name }} {{ user.last_name }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="column col-sm-12">
        <div class="card mb-2">
          <div class="card-header">
            <h2 class="card-title">Cores</h2>
            <h3 class="card-subtitle">Últimas 3 cores</h3>
          </div>
          <div class="card-body">
            <table class="table">
              <tr v-for="color in colors">
                <td width="50px">
                  <figure class="avatar avatar-sm" :style="{'background-color': color.color}">
                  </figure>
                </td>
                <td>{{ color.year }} - {{ color.name }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        users: [],
        colors: []
      }
    },
    mounted () {
      this.load();
    },
    methods: {
      load () {
        this.$http.get('/users')
          .then(({data}) => this.users = data.data)
          .catch(() => {});

        this.$http.get('/colors')
          .then(({data}) => this.colors = data.data)
          .catch(() => {});
      }
    }
  }
</script>

<style lang="scss">
  .home-page {

  }
</style>
