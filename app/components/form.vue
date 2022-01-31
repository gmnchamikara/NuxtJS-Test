<template>
  <div>
    <br />
    <h2>Form</h2>
    <v-form>
      <v-text-field  v-model="id" label="Id"></v-text-field>
      <v-text-field v-model="name" label="Product Name"></v-text-field>
      <v-text-field v-model="price" label="Product Price"></v-text-field>
      <v-btn @click="submit({ id, name, price })" color="success">{{
        id ? "Edit" : "Submit"
      }}</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  computed: {
    id: {
      get() {
        return this.$store.state.user.id;
      },
      set(value) {
        this.$store.commit("user/setId", value);
      },
    },
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.commit("user/setName", value);
      },
    },
    price: {
      get() {
        return this.$store.state.user.price;
      },
      set(value) {
        this.$store.commit("user/setPrice", value);
      },
    },
    password: {
      get() {
        return this.$store.state.user.password;
      },
      set(value) {
        this.$store.commit("user/setPassword", value);
      },
    },
  },
  methods: {
    async submit(user) {
      if (user.id) {
        await this.$axios.put("http://localhost:4000/users/" + user.id, {
          name: user.name,
          price: user.price,
        });
      } else {
        await this.$axios.post("http://localhost:4000/users/signup", {
          name: user.name,
          price: user.price,
        });
      }
      this.resetUser({ id: 0, name: "", price: "", password: "" });
      this.$store.commit(
        "users/storeData",
        (await this.$axios.get("http://localhost:4000/users")).data
      );
    },
    resetUser(user) {
      this.$store.commit("user/setId", user.id);
      this.$store.commit("user/setName", user.name);
      this.$store.commit("user/setPrice", user.price);
    },
  },
};
</script>

<style>
</style>