import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Menu />
    </div>
  );
}

function Menu() {
  return (
    <div className="menu-container">
      <Header />
      <Pizza
        image="https://fast-react-pizza-menu.netlify.app/pizzas/focaccia.jpg"
        pizzaName="Focaccia"
        recipe="Bread with italian olive oil and rosemary"
      />
      <Pizza
        image="https://fast-react-pizza-menu.netlify.app/pizzas/margherita.jpg"
        pizzaName="Pizza Margherita"
        recipe="Tomato and mozzarella"
      />
      <Pizza
        image="https://fast-react-pizza-menu.netlify.app/pizzas/spinaci.jpg"
        pizzaName="Pizza spinaci"
        recipe="Tomato, mozarella, spinach, and ricotta cheese"
      />
      <Pizza
        image="https://fast-react-pizza-menu.netlify.app/pizzas/funghi.jpg"
        pizzaName="Pizza Funghi"
        recipe="Tomato, mozarella, mushrooms, and onion"
      />
      <Pizza
        image="https://fast-react-pizza-menu.netlify.app/pizzas/Salamino.jpg"
        pizzaName="Pizza Salamino"
        recipe="Tomato, mozarella, and pepperoni"
      />
      <Pizza
        image="https://fast-react-pizza-menu.netlify.app/pizzas/Prosciutto.jpg"
        pizzaName="Pizza Prosciutto"
        recipe="Tomato, mozarella, ham, aragula, and burrata cheese"
      />
    </div>
  );
}
function Pizza(dict) {
  return (
    <div className="row pizza-container">
      <div className="image-container">
        <img className="image" src={dict.image} alt={dict.pizzaName} />
      </div>
      <div className="content-container">
        <h3>{dict.pizzaName}</h3>
        <p>{dict.recipe}</p>
      </div>
    </div>
  );
}
function Header() {
  return (
    <div style={{ width: "100%" }}>
      <div className="text-center header">
        <h1>Our Menu</h1>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
