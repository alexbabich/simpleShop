<template>
    <section class="my-3">
        <b-navbar class="kt-menu-wrapper">
            <b-nav class="row justify-content-around">
                <router-link :to="item.url" :key="item.id" v-for="item in menuList" :class="item.className" class="col-4 col-sm-3 kt-menu-item">
                    <i class="fa" :class="item.classIcon" aria-hidden="true"></i>{{item.text}}
                </router-link>
            </b-nav>
        </b-navbar>
    </section>
</template>

<script>
  export default {
    name: 'MainMenu',
    data () {
      return {
        menuList: [
          {
            text: 'Главная',
            className: 'kt-home',
            classIcon: 'fa-home',
            url: '/'
          },
          {
            text: 'О нас',
            className: 'kt-about',
            classIcon: 'fa-info',
            url: 'about'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
    .kt-menu-wrapper {
        .kt-menu-item {
            text-align: center;
            background: #39CCCC;
            margin: 0 10px;
            color: #fff;
            text-decoration: none;
            &:hover {
                background: teal;
            }
            .fa {
                margin-right: 5px;
            }
            &.router-link-exact-active {
                background: teal;
            }
        }
    }

    @media only screen and (max-width: 575px) {
        .kt-menu-wrapper {
            .kt-menu-item {
                margin: auto;
            }
        }
    }
</style>
