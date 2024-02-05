module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/_breakpoints.scss";
        @import "@/assets/scss/_variables.scss";
        `,
      },
    },
  },
};
