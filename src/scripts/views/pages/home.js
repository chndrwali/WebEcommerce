const Home = {
  async render() {
    return `
          <jumbotron-bg></jumbotron-bg>
          <collection-atas></collection-atas>
          <diskon-card></diskon-card>
          <trusted-reviews></trusted-review>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
