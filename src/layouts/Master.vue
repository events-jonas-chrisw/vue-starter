<template>
  <div id="app" class="master-layout">
    <header class="main-nav navbar">
      <section class="navbar-section">
        <button class="btn-menu show-sm" @click="showSidebar = !showSidebar" :class="{open: showSidebar}">
          <span class="btn-menu-bars">
            <span class="btn-menu-bar"></span>
            <span class="btn-menu-bar"></span>
          </span>
        </button>
        <router-link to="/" tag="span" class="hide-sm">
          <span class="h5 ml-2">Vue Starter</span>
        </router-link>
      </section>
      <section class="navbar-section">
        <span class="mr-2 hide-sm">{{ user.first_name }}</span>
        <figure class="avatar avatar" :data-initial="$avatarLetters(userFullName)">
          <img :src="user.avatar" alt="">
        </figure>
        <!--<router-link to="/logout" tag="button" class="btn">-->
          <!--<i class="icon icon-shutdown"></i>-->
        <!--</router-link>-->
      </section>
    </header>

    <div class="primary">
      <div class="sidebar" :class="{open: showSidebar}">
        <nav>
          <router-link to="/" exact>
            <div class="menu-icon">
              <fa-icon :icon="['fas', 'tachometer-alt']" class="" />
            </div>
            <span class="menu-label">Dashboard</span>
          </router-link>
          <router-link to="/users" exact>
            <div class="menu-icon">
              <fa-icon :icon="['fas', 'user']" class="" />
            </div>
            <span class="menu-label">Users</span>
          </router-link>
          <router-link to="/logout">
            <div class="menu-icon">
              <fa-icon :icon="['fas', 'sign-out-alt']" class="" />
            </div>
            <span class="menu-label">Sair</span>
          </router-link>
        </nav>
      </div>

      <div class="main-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data () {
      return {
        showSidebar: false
      }
    },
    watch: {
      $route (to, from){
        this.showSidebar = false;
      }
    },
    computed: {
      ...mapState({
        user: state => state.auth.user
      }),
      userFullName () {
        return `${this.user.first_name} ${this.user.last_name}`;
      }
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";

  $menu-icon-size: 1.2rem;
  $menu-icon-padd: $layout-spacing * 2;

  .master-layout {
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    height: 100vh;

    .main-nav {
      background-color: #ffffff;
      box-shadow: 8px 1px 10px rgba(0, 0, 0, .2);
      padding: $unit-4 1rem;
      z-index: $zindex-2;
      @media screen and (max-width: $size-sm) {
        .navbar-section {
          flex: 1 1 auto;
        }
      }
      .btn-menu {
        background-color: transparent;
        border: 0;
        height: $unit-8;
        margin: 0;
        padding: 0;
        &:focus, &:active {
          box-shadow: none;
          outline: none;
        }
        .btn-menu-bars {
          display: flex;
          flex-direction: column;
          height: $unit-8;
          justify-content: space-around;
          padding: .2rem 0;
        }
        .btn-menu-bar {
          background-color: #454d5d;
          border-radius: $border-radius;
          display: block;
          height: $unit-h + $unit-o;
          transition: all .3s ease;
          width: $unit-8;
        }
        &.open {
          .btn-menu-bar:first-child {
            transform: translateY(6px) rotate(45deg);
          }
          .btn-menu-bar:last-child {
            transform: translateY(-6px) rotate(135deg);
          }
        }
      }
    }

    .primary {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
    }

    .sidebar {
      background-color: rgba(255, 255, 255, 1);
      border-top: 1px solid rgba(0, 0, 0, .02);
      box-shadow: 0 10px 10px rgba(0, 0, 0, .2);
      flex: 0 0 120px;
      padding-top: .5rem;
      position: relative;
      @media screen and (max-width: $size-sm) {
        height: 100%;
        position: fixed;
        transform: translateX(-140px);
        transition: transform .3s ease;
        width: 120px;
        z-index: $zindex-1;
        &.open {
          transform: translateX(0);
        }
      }
      .logo {
        background-color: rgba(#000, .1);
        border-radius: 3px;
        font-size: 84px;
        margin-bottom: 20px;
        text-align: center;
      }
      nav {
        display: flex;
        flex-direction: column;
        a {
          align-items: center;
          color: #ADADAD;
          display: flex;
          flex-direction: column;
          font-size: .7rem;
          outline: none;
          padding: .7rem 0;
          position: relative;
          text-decoration: none;
          &:focus {
            box-shadow: none;
          }
          .menu-icon {
            border-radius: 50%;
            font-size: $menu-icon-size;
            height: $menu-icon-size + $menu-icon-padd;
            margin-bottom: $layout-spacing / 2;
            padding: $layout-spacing / 2;
            width: $menu-icon-size + $menu-icon-padd;
            svg {
              display: block;
              height: $menu-icon-size + ($menu-icon-padd / 2);
              width: $menu-icon-size + ($menu-icon-padd / 2);
            }
          }
          .menu-label {
            line-height: .7rem;
          }
          &.router-link-active {
            .menu-icon {
              background-color: $primary-color;
              color: #fff;
              padding: $layout-spacing;
              svg {
                display: block;
                height: $menu-icon-size;
                width: $menu-icon-size;
              }
            }
            &:after {
              background-color: $primary-color;
              border-radius: $border-radius;
              bottom: .5rem;
              content: "";
              position: absolute;
              right: 0;
              top: .5rem;
              width: $unit-h + $unit-o;
            }
          }
        }
      }
    }

    .main-container {
      flex: 1;
      overflow: scroll;
      .page-container {
        margin: 1rem;
      }
      .page-header {
        margin: $layout-spacing 0;
        .page-title {
          font-size: 1.2rem;
          margin: 0;
        }
      }
      .full-container {
        margin-left: -1rem;
        margin-right: -1rem;
      }
    }
  }
</style>
