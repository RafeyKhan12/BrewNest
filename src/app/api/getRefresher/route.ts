import { NextResponse } from "next/server";

export async function GET() {
  try {
  const refresherData = [
  {
    id: 1,
    name: "Lemonade",
    description: "Classic sweet-tart lemonade made with fresh-squeezed lemons.",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 2,
    name: "Iced Tea",
    description: "Chilled black tea with a hint of lemon and optional sweetener.",
    price: 3.25,
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 3,
    name: "Mint Mojito (Non-Alcoholic)",
    description: "Refreshing blend of lime, mint, and soda water — no rum needed.",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1766566676250-d27ef8ccdd82?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 4,
    name: "Strawberry Lemonade",
    description: "Zesty lemonade infused with fresh strawberries for a fruity twist.",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1560351520-48e05f3d7d16?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 5,
    name: "Cucumber Cooler",
    description: "Crisp cucumber, lime, and mint blended with sparkling water.",
    price: 4.75,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 6,
    name: "Watermelon Juice",
    description: "Pure, juicy watermelon blended and served chilled with mint.",
    price: 4.25,
    image:
      "https://images.unsplash.com/photo-1683531658992-b78c311900a3?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 7,
    name: "Coconut Water",
    description: "Natural electrolyte-rich coconut water straight from the husk.",
    price: 3.75,
    image:
      "https://images.unsplash.com/photo-1617611140379-0e0ec17cc45f?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 8,
    name: "Ginger Ale",
    description: "Spicy-sweet ginger-flavored carbonated drink.",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1732247610040-c6a2193092ca?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 9,
    name: "Sparkling Limeade",
    description: "Tangy lime juice with fizzy soda water and sugar.",
    price: 3.75,
    image:
      "https://imgs.search.brave.com/KvtSZdYFLbBK8K08FO8oNU-NH3wk_6lQMMlARcICKQM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kcmlu/a3NwaW5kcmlmdC5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvSW1h/Z2UtZnJvbS1pT1Mt/MjIuanBnP3Y9MTY1/NDI4NzE2OSZ3aWR0/aD0xOTIw?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 10,
    name: "Pineapple Mint Spritzer",
    description: "Tropical pineapple juice with fresh mint and sparkling water.",
    price: 4.5,
    image:
      "https://imgs.search.brave.com/f6g4VuuzbaNEJot1Il3VmAAUSoCbkU2XZDBgmgpzrtg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVsbW9udGVmb29k/c2VydmljZS5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy8yMDIz/LTExL0RNRkkwNTIz/LTAyOC1DdWxpbmFy/eS1SZWNpcGUtUGFn/ZS1JbWFnZXNfMTUw/MHgxMDAwX1BpbmVh/cHBsZS1HaW5nZXIt/TWludC1TcHJpdHpl/ci5qcGc?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 11,
    name: "Berry Blast Smoothie",
    description: "Blend of mixed berries, banana, and yogurt.",
    price: 5.0,
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 12,
    name: "Green Tea Iced",
    description: "Lightly sweetened green tea chilled with ice and lemon.",
    price: 3.5,
    image:
      "https://imgs.search.brave.com/IpistIHLv7cLbMJFfDF2T9lZy-J-Y3viWAk5oNfGL2Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTIyNjA1MS9waG90/by9pY2VkLWdyZWVu/LW1hdGNoYS10ZWEt/bWl4ZWQtd2l0aC1p/Y2UtY3ViZS1hbmQt/bWlsay1pbi1sYXR0/ZS1nbGFzcy1vbi13/aGl0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cmZGOUI5/YXZRSkMyXzRoQy1F/YUtmX1I3cGxPUEFp/bWI3b3FLVXNKS2Vk/Yz0?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 13,
    name: "Tropical Punch",
    description: "Blend of orange, pineapple, and guava juices with soda.",
    price: 4.25,
    image:
      "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 14,
    name: "Aloe Vera Drink",
    description: "Cooling aloe vera juice with lime and honey.",
    price: 4.0,
    image:
      "https://imgs.search.brave.com/4JLngbs90oElKv4jACHiDHjBF2JstT7J8MrWRwdQRU8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzQ4LzAyLzc1/LzM2MF9GXzEyNDgw/Mjc1MDFfRXRLTjQx/SlpNRHRxaUVhNlZR/a09zRERtMVBYVGl5/MjEuanBn?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 15,
    name: "Hibiscus Iced Tea",
    description: "Floral tart hibiscus tea served chilled.",
    price: 3.75,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 16,
    name: "Mango Lassi",
    description: "Creamy yogurt drink with sweet mango and cardamom.",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 17,
    name: "Soda Water with Lime",
    description: "Crisp soda water with fresh lime.",
    price: 2.75,
    image:
      "https://imgs.search.brave.com/6dtoeeXP8KFPJb9_x6QTtnkfUdD9PhGGxsfUEV80d1Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/MDI3NjI2L3Bob3Rv/L2dsYXNzLW9mLXdh/dGVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1qU0ZXTWQ4/bF8tM3JkMFJza01o/WUlYY0czMnZ1a2tL/Yzdad1ZuLW5YRDZj/PQ?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 18,
    name: "Passionfruit Cooler",
    description: "Tangy passionfruit pulp with sparkling water and mint.",
    price: 4.25,
    image:
      "https://imgs.search.brave.com/Yp3ecFnnAKjQPQDtsJTzk9_z_xXjhh1CYLMX-mEjFgc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbi5y/ZWNldGFzY29zdGFy/aWNhLmNvbS9iYXNl/L3N0b2NrL1JlY2lw/ZS9mcmVzY28tZGUt/bWFyYWN1eWEvZnJl/c2NvLWRlLW1hcmFj/dXlhX3dlYi5qcGcu/d2VicA?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 19,
    name: "Chia Fresca",
    description: "Hydrating drink with chia seeds, lime, and agave.",
    price: 4.0,
    image:
      "https://imgs.search.brave.com/0eH99DZnrMizlYaymFuhT14Kld7GRI94dAr4UC3xQ5E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odXJy/eXRoZWZvb2R1cC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDgvUG93ZXJm/dWwtQ2hpYS1TZWVk/cy1OYXR1cmFsLUVu/ZXJneS1Ecmluay1D/aGlhLUZyZXNjYS1J/c2tpYXRlLTMuanBn?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 20,
    name: "Sparkling Grapefruit",
    description: "Bitter-sweet grapefruit juice with soda water and rosemary.",
    price: 4.5,
    image:
      "https://imgs.search.brave.com/Z0WbK3YwXHvhQhXwQeWWNaaFO2pjFgUCgzmXlRSiTfY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kcmlu/a3NwaW5kcmlmdC5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvc3Bh/cmtsaW5nLW5lZ3Jv/bmktZTE1MzkzNjU4/NDE0NTctMTIwMHgx/MDMzLmpwZz92PTE2/NTQyODIzMjImd2lk/dGg9MTkyMA?auto=format&fit=crop&w=500&h=500&q=80",
  },
];

    return NextResponse.json(
      {
        success: true,
        message: "Data fetched successfully",
        refresherData,
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
