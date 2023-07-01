import Hoodie from '../../../public/images/Hoodie 1.png';

class DiskonCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 bg-gradient-to-r from-rose-100 via-white to-rose-100">
  <img
    alt="Trainer"
    src="${Hoodie}"
    class="h-32 w-full object-cover md:h-full"
  />

  <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
    <p class="text-sm font-semibold uppercase tracking-widest">
      Run with the pack
    </p>

    <h2 class="mt-6 font-black uppercase">
      <span class="text-4xl font-black sm:text-5xl lg:text-6xl">
        Get 20% off
      </span>

      <span class="mt-2 block text-sm">Setelah anda order melebihi Rp. 500.000</span>
    </h2>

    <a
      class="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
      href=""
    >
      Get Discount
    </a>

    <p class="mt-8 text-xs font-medium uppercase text-gray-400">
      Offer valid until 24th March, 2024 *
    </p>
  </div>
</section>
    `;
  }
}

customElements.define('diskon-card', DiskonCard);
