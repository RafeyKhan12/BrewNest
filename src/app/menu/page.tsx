export default async function Menu() {
    const response = await fetch("http://localhost:3000/api/getCoffee");
    const data = await response.json();
    console.log(data);
  return (
    <div>
      Menu
    </div>
  )
}
