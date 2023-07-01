class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="mt-6 lg:mt-12">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4">
          <div class="max-w-6xl">
            <h1 class="text-3xl font-extrabold py-6 sm:text-4xl">
              Platform kami hadir dengan tujuan mendorong inklusifitas dalam
              pendidikan
            </h1>

            <p class="mt-4 sm:text-lg/relaxed text-slate-700">
              Meskipun pendidikan dianggap sebagai hak universal, masih banyak
              yang sulit mengaksesnya terutama sumber belajar berbayar karena
              faktor finansial, sosial, dan lainnya. Setiap orang berhak belajar
              tanpa batasan apapun.
            </p>

            <p class="mt-4 sm:text-lg/relaxed text-slate-700">
              Aplikasi ini adalah platform untuk sumbangan pendidikan yang
              memungkinkan siapa saja memberikan bantuan berbentuk finansial
              ataupun materi untuk menunjang pendidikan kepada penerima yang
              memenuhi persyaratan. Donatur dapat memberikan dana langsung untuk
              pembelian buku, kursus online, dan lainnya sesuai kesepakatan.
            </p>
          </div>
        </div>
      </section>
      <section class="py-3 mt-20">
        <h1 class="text-3xl font-bold py-2 sm:text-4xl text-center">
          Meet our Team
        </h1>
        <div class="mx-16 my-6 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          <div class="group relative block bg-black">
            <img
              alt="Developer"
              src="/candra.webp"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Candra Wali
              </p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <div class="text-sm text-white flex justify-center gap-5">
                    <a
                      href="https://www.linkedin.com/in/chndrwali"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin class="cursor-pointer text-2xl" />
                    </a>
                    <a
                      href="https://instagram.com/chndrwali"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInstagram class="cursor-pointer text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="group relative block bg-black">
            <img
              alt="Developer"
              src="/sindi.webp"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Sindi Rinaldi
              </p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <div class="text-sm text-white flex justify-center gap-5">
                    <a
                      href="https://www.linkedin.com/in/sindi-rinaldi-56382424a/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin class="cursor-pointer text-2xl" />
                    </a>
                    <a
                      href="https://instagram.com/rinaldiibot_ "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInstagram class="cursor-pointer text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="group relative block bg-black">
            <img
              alt="Developer"
              src="/suci.webp"
              class="absolute inset-0 h-full w-full object-cover object-center opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Suci Sukmawati
              </p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <div class="text-sm text-white flex justify-center gap-5">
                    <a
                      href="https://www.linkedin.com/in/suci-sukmawati-08b43a211"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin class="cursor-pointer text-2xl" />
                    </a>
                    <a
                      href="https://instagram.com/sucisukmawati_"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInstagram class="cursor-pointer text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="group relative block bg-black">
            <img
              alt="Developer"
              src="/rony.webp"
              class="absolute inset-0 h-full w-full object-cover object-center  opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Rony Wahyu
              </p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <div class="text-sm text-white flex justify-center gap-5">
                    <a
                      href="https://www.linkedin.com/in/ronywahyuuu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin class="cursor-pointer text-2xl" />
                    </a>
                    <a
                      href="https://instagram.com/ronywahyuu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInstagram class="cursor-pointer text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }
}

customElements.define('about-us', AboutUs);
