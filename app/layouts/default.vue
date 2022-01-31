<template>
  <div>
    <v-app>
      <v-main>
        <v-app-bar>
          <v-app-bar-title style="cursor: pointer">
                <router-link to="/">
                  <v-toolbar-title>
                     Home
                  </v-toolbar-title>
                </router-link>
          </v-app-bar-title>
          <v-spacer></v-spacer>
            <v-btn
              class="ma-2"

              color="success"
              @click="loader = 'loading2'"
              to="/login"
            >
                Login
              <template v-slot:loader>
                <span>Loading...</span>
              </template>
            </v-btn>
            <v-btn
              class="ma-2"
              color="info"
              @click="loader = 'loading4'"
              to="/register"
            >
                Register
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn>
          <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
          </v-btn>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
        </v-app-bar>
        <v-container justify="center" align="center">
          <client-only>
            <Nuxt />
          </client-only>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>