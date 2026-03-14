import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#f5e6d3] text-[#3b2416]">

      <section className="bg-[#6f4e37] text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">About BrewNest</h1>
        <p className="max-w-2xl mx-auto text-lg">
          A place where comfort meets coffee and every cup tells a story.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>

          <p className="text-[#5c4033] leading-relaxed mb-4">
            BrewNest was created with a simple idea — coffee should feel like
            home. Every cup we serve is brewed with care, using carefully
            selected beans and crafted techniques.
          </p>

          <p className="text-[#5c4033] leading-relaxed">
            Whether you're starting your morning, meeting friends, or enjoying a
            quiet moment, BrewNest is your cozy corner for great coffee and
            comforting flavors.
          </p>
        </div>

        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31"
            alt="Coffee shop"
            fill
            className="object-cover"
          />
        </div>

      </section>

      <section className="bg-[#e6d3b3] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">What We Believe</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Quality Beans</h3>
              <p className="text-gray-600">
                We carefully choose our coffee beans to deliver rich flavor in
                every cup.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Warm Atmosphere</h3>
              <p className="text-gray-600">
                A cozy environment where conversations and ideas flow freely.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Passion for Coffee</h3>
              <p className="text-gray-600">
                Every drink we make is crafted with attention and passion.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}