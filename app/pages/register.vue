<template>
<v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-container>
      <div class="blue text-center">
        <span class="white--text"><h1>Register</h1></span>
      </div>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Password"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

            <v-btn
              class="ma-2"
              :loading="loading2"
              :disabled="loading2"
              color="success"
              @click="loader = 'loading2'"
              to="/product"
            >
                Register
              <template v-slot:loader>
                <span>Loading...</span>
              </template>
            </v-btn>
            <v-btn
              class="ma-2"
              :loading="loading4"
              :disabled="loading4"
              color="warning"
              @click="loader = 'loading4'"
            >
                Reset
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn>
    </v-container>
  </v-form>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>