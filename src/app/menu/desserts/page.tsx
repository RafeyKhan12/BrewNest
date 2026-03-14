import Image from "next/image";

export const metadata = {
  title: "Desserts"
}

export default async function Dessert() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getDessert`);
  const data = await result.json();

  return (
    <main className="min-h-screen bg-[#f5e6d3] py-16 md:py-20">

      <div className="max-w-6xl mx-auto px-5 text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#3b2416] mb-3 md:mb-4">
          Dessert Menu
        </h1>

        <p className="text-[#6f4e37] text-sm md:text-base">
          Crafted brews made for every coffee lover.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">

        {data.dessertData.map((dessert: any) => (
          <div
            key={dessert.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
          >

            <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden">

              <Image
                src={dessert.image}
                alt={dessert.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 text-white">
                <h2 className="text-lg md:text-xl font-semibold">
                  {dessert.name}
                </h2>

                <p className="text-xs md:text-sm opacity-90 line-clamp-2">
                  {dessert.description}
                </p>
              </div>

            </div>

            <div className="p-4 md:p-5 text-center">
              <p className="text-base md:text-lg font-semibold text-[#6f4e37]">
                ${dessert.price}
              </p>
            </div>

          </div>
        ))}

      </div>

    </main>
  );
}