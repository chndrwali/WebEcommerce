import Hoodiesatu from '../../../public/images/Hoodie 1.png';
import Hoodiedua from '../../../public/images/Hoodie 2.png';
import Hoodietiga from '../../../public/images/Hoodie 3.png';
import Crewnecksatu from '../../../public/images/crewneck 1.png';
import Crewneckdua from '../../../public/images/crewneck 2.png';
import Crewneck from '../../../public/images/crewneck.png';

class ProductCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="bg-gradient-to-r from-rose-100 via-white to-rose-100">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          Product Collection
        </h2>
      </header>
  
      <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="${Hoodiesatu}"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                SYRM Hoodie Rose
              </h3>
  
              <p class="mt-2">
                <span class="sr-only"> Harga </span>
  
                <span class="tracking-wider text-gray-900"> Rp. 150.000 </span>
              </p>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="${Hoodiedua}"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                SYRM Hoodie Devil Neko
              </h3>
  
              <p class="mt-2">
                <span class="sr-only"> Harga </span>
  
                <span class="tracking-wider text-gray-900"> Rp. 150.000 </span>
              </p>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="${Hoodietiga}"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                SYRM Hoodie Samurai Neko
              </h3>
  
              <p class="mt-2">
                <span class="sr-only"> Harga </span>
  
                <span class="tracking-wider text-gray-900"> Rp. 150.000 </span>
              </p>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="${Crewnecksatu}"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div class="relative pt-3 bg-white">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                SYRM Crewneck JPN
              </h3>
  
              <p class="mt-2">
                <span class="sr-only"> Harga </span>
  
                <span class="tracking-wider text-gray-900"> Rp. 120.000 </span>
              </p>
            </div>
          </a>
        </li>

        <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="${Crewneckdua}"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              SYRM Crewneck Mntm Holow
            </h3>

            <p class="mt-2">
              <span class="sr-only"> Harga </span>

              <span class="tracking-wider text-gray-900"> Rp. 120.000 </span>
            </p>
          </div>
        </a>
      </li>

      <li>
      <a href="#" class="block overflow-hidden group">
        <img
          src="${Crewneck}"
          alt=""
          class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div class="relative pt-3 bg-white">
          <h3
            class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
          >
            SYRM Crewneck Mntm Rome
          </h3>

          <p class="mt-2">
            <span class="sr-only"> Harga </span>

            <span class="tracking-wider text-gray-900"> Rp. 120.000 </span>
          </p>
        </div>
      </a>
    </li>
      </ul>
    </div>
  </section>
    `;
  }
}

customElements.define('product-card', ProductCard);
