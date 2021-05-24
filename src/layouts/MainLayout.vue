<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button
          class="md-icon-button"
          @click="toggleMenu"
          v-if="!menuVisible"
        >
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
        <div class="md-toolbar-section-end">
          <md-menu md-size="auto">
            <md-button md-menu-trigger>Admin</md-button>

            <md-menu-content>
              <router-link to="/profile">
                <md-menu-item>Profile</md-menu-item>
              </router-link>

              <router-link to="/login">
                <md-menu-item
                  ><span style="color:red;">Logout</span></md-menu-item
                >
              </router-link>
            </md-menu-content>
          </md-menu>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <router-link to="/dashboard" class="nav-link">
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>
          </router-link>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>

          <md-list-item md-expand>
            <md-icon>video_library</md-icon>
            <span class="md-list-item-text">Video</span>

            <md-list slot="md-expand">
              <md-list-item class="md-inset">Humor</md-list-item>
              <md-list-item class="md-inset">Music</md-list-item>
              <md-list-item class="md-inset">Movies</md-list-item>
              <md-list-item class="md-inset">TV Shows</md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  data: () => ({
    menuVisible: false
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
