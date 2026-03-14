import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dessertData = [
      {
        id: 1,
        name: "Chocolate Cake",
        description:
          "Rich and moist dark chocolate cake with creamy chocolate frosting.",
        price: 6.5,
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 2,
        name: "Cheesecake",
        description:
          "Creamy New York-style cheesecake with a graham cracker crust.",
        price: 7.0,
        image:
          "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 3,
        name: "Tiramisu",
        description:
          "Italian dessert with layers of mascarpone, espresso, and cocoa powder.",
        price: 6.75,
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 4,
        name: "Brownie",
        description:
          "Fudgy chocolate brownie with a crispy top and chewy center.",
        price: 4.5,
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 5,
        name: "Strawberry Shortcake",
        description:
          "Fluffy sponge cake with fresh strawberries and whipped cream.",
        price: 6.25,
        image:
          "https://images.unsplash.com/photo-1679654594494-adfeaef21225?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 6,
        name: "Crème Brûlée",
        description: "Silky custard with a caramelized sugar crust on top.",
        price: 7.5,
        image:
          "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 7,
        name: "Macarons",
        description:
          "Delicate French almond meringue cookies with various flavors.",
        price: 5.0,
        image:
          "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 8,
        name: "Panna Cotta",
        description: "Smooth Italian cream dessert topped with berry compote.",
        price: 6.5,
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 9,
        name: "Lemon Tart",
        description: "Tangy lemon curd filling in a buttery pastry shell.",
        price: 5.75,
        image:
          "https://images.unsplash.com/photo-1614174486496-344ef3e9d870?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 10,
        name: "Chocolate Mousse",
        description:
          "Airy and light chocolate mousse with a rich cocoa flavor.",
        price: 5.5,
        image:
          "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 11,
        name: "Carrot Cake",
        description:
          "Moist carrot cake with cream cheese frosting and walnuts.",
        price: 6.0,
        image:
          "https://images.unsplash.com/photo-1676300186098-9b5ae9916e3c?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 12,
        name: "Profiteroles",
        description:
          "Choux pastry puffs filled with cream and drizzled with chocolate.",
        price: 6.25,
        image:
          "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 13,
        name: "Baklava",
        description:
          "Layered phyllo pastry with chopped nuts and sweet honey syrup.",
        price: 5.5,
        image:
          "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 14,
        name: "Pavlova",
        description:
          "Crispy meringue shell with whipped cream and fresh fruit.",
        price: 6.75,
        image:
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 15,
        name: "Apple Pie",
        description: "Classic pie with spiced apples and flaky crust.",
        price: 5.75,
        image:
          "https://images.unsplash.com/photo-1562007908-17c67e878c88?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 16,
        name: "Ice Cream Sundae",
        description:
          "Vanilla ice cream with chocolate sauce and whipped cream.",
        price: 5.25,
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 17,
        name: "Key Lime Pie",
        description: "Tart and tangy lime pie with a graham cracker crust.",
        price: 6.0,
        image:
          "https://images.unsplash.com/photo-1502307837336-d59cca9408a9?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 18,
        name: "Cannoli",
        description:
          "Crispy pastry tubes filled with sweet ricotta and chocolate chips.",
        price: 4.75,
        image:
          "https://images.unsplash.com/photo-1667804957652-565b39dcccd4?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 19,
        name: "Flan",
        description: "Creamy caramel custard with silky texture.",
        price: 5.5,
        image:
          "https://images.unsplash.com/photo-1637264596042-fcf205a81e1e?auto=format&fit=crop&w=500&h=500&q=80",
      },
      {
        id: 20,
        name: "Donuts",
        description: "Freshly fried donuts with glaze or sprinkles.",
        price: 3.5,
        image:
          "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&h=500&q=80",
      },
    ];

    return NextResponse.json(
      {
        success: true,
        message: "Data fetched successfully",
        dessertData,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 400,
      },
    );
  }
}
