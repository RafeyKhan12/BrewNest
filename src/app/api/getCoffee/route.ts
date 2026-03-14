import { NextResponse } from "next/server";

export async function GET() {
  try {
    const coffeeList = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong and bold single shot of concentrated coffee.",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Smooth blend of espresso, steamed milk, and velvety foam.",
    price: 4.75,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Latte",
    description: "Creamy espresso drink with steamed milk and light foam.",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Americano",
    description: "Espresso diluted with hot water for a smooth taste.",
    price: 3.75,
    image:
      "https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Macchiato",
    description: "Espresso marked with a small amount of milk foam.",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Mocha",
    description: "Espresso, chocolate, steamed milk, topped with cream.",
    price: 5.25,
    image:
      "https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Flat White",
    description: "Espresso with velvety microfoam for a creamy texture.",
    price: 4.75,
    image:
      "https://images.unsplash.com/photo-1620052087057-bfd8235f5874?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Cold Brew",
    description: "Slow-steeped coffee served chilled over ice.",
    price: 4.25,
    image:
      "https://images.unsplash.com/photo-1582572430474-3acf30221916?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Affogato",
    description: "Hot espresso poured over vanilla ice cream.",
    price: 5.5,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Cortado",
    description: "Balanced drink with equal parts espresso and milk.",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Red Eye",
    description: "Drip coffee with an added espresso shot.",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Nitro Cold Brew",
    description: "Cold brew infused with nitrogen for creamy foam.",
    price: 5.0,
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "Turkish Coffee",
    description: "Traditional finely ground coffee brewed in a cezve.",
    price: 4.25,
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Vietnamese Iced Coffee",
    description: "Strong coffee with condensed milk served over ice.",
    price: 4.75,
    image:
      "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "Irish Coffee",
    description: "Hot coffee with Irish whiskey, sugar, and cream.",
    price: 6.0,
    image:
      "https://images.unsplash.com/photo-1730190980890-37c888aee0ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Café au Lait",
    description: "French-style coffee with brewed coffee and milk.",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Dalgona Coffee",
    description: "Whipped instant coffee served over chilled milk.",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Café Cubano",
    description: "Sweet Cuban espresso brewed with sugar.",
    price: 4.25,
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    name: "Café con Leche",
    description: "Spanish coffee with espresso and steamed milk.",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    name: "Ristretto",
    description: "Short, intense espresso shot with rich flavor.",
    price: 3.75,
    image:
      "https://images.unsplash.com/photo-1680079526233-8e252b3e95e8?auto=format&fit=crop&w=800&q=80",
  },
];
    return NextResponse.json(
      {
        success: true,
        message: "Data fetched successfully",
        coffeeList,
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
