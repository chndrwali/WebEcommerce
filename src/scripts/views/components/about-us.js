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
              Brand kami hadir dengan tujuan mendorong ekonomi dan bisnis
            </h1>

            <p class="mt-4 sm:text-lg/relaxed text-slate-700">
              Pembuatan website ini bertujuan agar memudahkan pelanggan untuk membeli kebutuhan brand yang keren nan ciamik
            </p>

            <p class="mt-4 sm:text-lg/relaxed text-slate-700">
              Aplikasi ini adalah platform e-commerce yang
              memungkinkan siapa saja dapat mengakses nya dimana pun dan kapanpun,memberikan informasi barang yang sedang tersedia dan dapat membeli nya dengan sangat cepat dan praktis
            </p>
          </div>
        </div>
      </section>
      <section class="py-3 mt-20">
        <h1 class="text-3xl font-bold py-2 sm:text-4xl text-center">
          Meet our Team
        </h1>
        <div class="mx-16 my-6 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Front End Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Candra Wali Sanjaya
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Front End Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Andra Syuryahman
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Back End Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Candika Aprila Saputra
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Back End Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Ari Saepudin
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Back End Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Evita Rizkia Putri
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
               Back End Developer
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Arrum Gunawan
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                UI/UX Design
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Fiki Dudih Ramdani
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                UI/UX Design
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Jeje Zaeni
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                UI/UX Design
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Rafliyadi Sabarudin
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                UI/UX Design
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Rizal Maulana Sanjaya
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Rancangan Laporan
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Titan Wira Aditya
              </p>
            </div>
          </div>

          <div class="group relative block bg-black">

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Rancangan Laporan
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                Muhammad Faisal
              </p>
            </div>
          </div>

        </div>
      </section>
    `;
  }
}

customElements.define('about-us', AboutUs);
