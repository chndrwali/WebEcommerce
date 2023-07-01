const Product = {
  async render() {
    return `
        <product-card></product-card>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Product;
