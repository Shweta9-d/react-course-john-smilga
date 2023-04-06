import Title from "./Title";
import menu from "./data";
import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// //adds "all" as first element and ... converts set to array
// const tempItems = ["all", ...tempSet];

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
// console.log(allCategories);

function App() {
  const [menuItems, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
