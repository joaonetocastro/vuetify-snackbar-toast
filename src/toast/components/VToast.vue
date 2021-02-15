<template>
      <v-snackbar
      v-model="snackbar.open"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      {{snackbar.text}}

      <template v-slot:action="{ attrs }">
        <v-btn
        icon
          color="brown lighten-5"
          v-bind="attrs"
          @click="snackbar.open = false"
        >
        <v-icon
        >mdi-close</v-icon>
        </v-btn>
      </template>
      </v-snackbar>
</template>

<script>
export default {
  name: 'VToast',

  data: () => ({
    snackbar: {
      open: false,
      timeout: 5000,
      color: '',
      text: '',
    },
  }),
  mounted() {
    this.$toast.init((snackbarData) => {
      this.snackbar = { ...this.snackbar, ...snackbarData };
    });
  },
};
</script>
