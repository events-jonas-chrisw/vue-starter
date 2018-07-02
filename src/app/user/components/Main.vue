<template>
  <div class="page-container users-page">
    <div class="card mt-2">
      <div class="card-header">
        <h1 class="card-title">Usuários</h1>
      </div>
      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead>
          <tr>
            <th>#</th>
            <!--<th>Avatar</th>-->
            <th>Nome</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(user, i) in users">
            <td>{{ i + 1 }}</td>
            <!--<td>-->
              <!--<figure class="avatar avatar" data-initial="">-->
                <!--<img :src="user.avatar" alt="">-->
              <!--</figure>-->
            <!--</td>-->
            <td>{{ user.first_name }} {{ user.last_name }}</td>
            <td class="text-right">
              <button class="btn btn-sm btn-link" @click="edit(user)">
                <fa-icon :icon="['far', 'edit']"></fa-icon>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        users: []
      }
    },
    mounted () {
      this.load();
    },
    methods: {
      load () {
        this.$http.get('/users')
          .then(({data}) => this.users = data.data)
      },
      edit (user) {
        this.$router.push({
          path: `/users/${user.id}/edit`
        })
      }
    }
  }
</script>

<style lang="scss">
  .users-page {

  }
</style>
