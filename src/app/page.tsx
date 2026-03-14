import MainPage from "@/components/MainPage";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5e6d3] text-[#3b2416]">

      <section className="bg-[#6f4e37] text-white">
        <MainPage />
      </section>

      <section className="max-w-6xl mx-auto py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to BrewNest
        </h2>

        <p className="text-lg text-[#5c4033] max-w-2xl mx-auto leading-relaxed">
          Experience the warmth of freshly brewed coffee crafted with passion.
          From bold espresso shots to creamy lattes, every cup is designed to
          comfort your soul and energize your day.
        </p>
      </section>

      <section className="bg-[#e6d3b3] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-14 text-[#3b2416]">
            Our Favorites
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Espresso</h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Cappuccino</h3>
              <p className="text-gray-600 mt-3">
                A smooth harmony of espresso, steamed milk, and delicate foam.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Cold Brew</h3>
              <p className="text-gray-600 mt-3">
                Slow-steeped coffee that delivers a smooth and refreshing taste.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#e0d4c0] py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-14 text-[#3b2416]">
      What We Serve
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <Link
        href="/menu/coffee"
        className="relative h-64 rounded-2xl overflow-hidden group"
      >
        <Image
          src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd"
          alt="Coffee"
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <h3 className="text-2xl font-bold">Coffee</h3>
          <p className="text-sm mt-2 text-center">
            Bold brews crafted for the perfect start to your day.
          </p>
        </div>
      </Link>

      <Link
        href="/menu/desserts"
        className="relative h-64 rounded-2xl overflow-hidden group"
      >
        <Image
          src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
          alt="Desserts"
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <h3 className="text-2xl font-bold">Desserts</h3>
          <p className="text-sm mt-2 text-center">
            Sweet treats that pair perfectly with every cup.
          </p>
        </div>
      </Link>

      <Link
        href="/menu/refreshers"
        className="relative h-64 rounded-2xl overflow-hidden group"
      >
        <Image
          src="https://images.unsplash.com/photo-1604003876850-8e09442e6015"
          alt="Refreshers"
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <h3 className="text-2xl font-bold">Refreshers</h3>
          <p className="text-sm mt-2 text-center">
            Cool, refreshing drinks made for relaxing moments.
          </p>
        </div>
      </Link>

    </div>
  </div>
</section>

    </main>
  );
}