const Home = {
  async render() {
    return `
          <jumbotron-bg></jumbotron-bg>
          <product-card></product-card>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
