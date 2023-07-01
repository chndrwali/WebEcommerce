import Smartband from '../../../public/images/exclusive.png';
import Watch from '../../../public/images/exclusive-2.png';

class Collection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="relative bg-gradient-to-r from-rose-100 via-white to-rose-100 ">
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div class="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Koleksi Premium</h2>

            <p class="mt-4 text-gray-500">
            Mi Smart Band 6 Layar AMOLED 1.56" Pengisian Daya Magnetik - Black. Tampil keren dengan gelang pintar dengan desain mewah dan elegan.
            </p>
          </header>

          <a
            href="#"
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </div>

      <div class="lg:col-span-2 lg:py-8">
        <ul class="grid grid-cols-2 gap-4">
          <li>
            <a href="#" class="block group">
              <img
                src="${Smartband}"
                alt=""
                class="object-cover w-full rounded aspect-square"
              />

              <div class="mt-3">
                <h3
                  class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Mi Smart Band 6 
                </h3>

                <p class="mt-1 text-sm text-gray-700">Rp. 650.000</p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" class="block group">
              <img
                src="${Watch}"
                alt=""
                class="object-cover w-full rounded aspect-square"
              />

              <div class="mt-3">
                <h3
                  class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Mi Smart Band 6
                </h3>

                <p class="mt-1 text-sm text-gray-700">Rp. 650.000</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    `;
  }
}

customElements.define('collection-atas', Collection);
