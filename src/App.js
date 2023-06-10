import "./index.css";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import PackingList from "./components/PakckingList";
import Stats from "./components/Stats";
import { useState } from "react";
export default function App() {
  const [items, setItems] = useState([]);
  function handleEmptyList() {
    if (!items.length) return;
    const confirm = window.confirm("Are you sure you  wanna delete all items");
    if (confirm) setItems([]);
  }
  function handlePack(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <NavBar onAddItems={handleAddItems} handlePack={handlePack} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        handlePack={handlePack}
        onReset={handleEmptyList}
      />
      <Stats items={items} />
    </div>
  );
}
