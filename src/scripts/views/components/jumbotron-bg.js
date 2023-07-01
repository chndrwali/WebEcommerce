import Background from '../../../public/images/background.png';

class JumbotronBg extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="relative bg-gradient-to-r from-rose-100 via-white to-rose-100">
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div
          class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
        >
          <img
            alt="Party"
            src="${Background}"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl">Give Your Confident<br> A New Style!</h2>
  
          <p class="mt-4 text-gray-600">
          Jangan biarkan opini orang lain menenggelamkan suara dari dalam dirimu<br>Jika kamu bisa memimpikannya, kamu bisa melakukannya
          </p>
  
          <a
            href="#"
            class="mt-8 inline-block rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-950 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Explore Now &#8594;
          </a>
        </div>
      </div>
    </div>
  </section>`;
  }
}

customElements.define('jumbotron-bg', JumbotronBg);
