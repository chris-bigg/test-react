import "./App.css";

function Card({ menuItem, price }) {
  return (
    <div>
      <p className="text-3xl">{menuItem}</p>
      <p>{price}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card menuItem="Burger" price="$15.00" />
      <Card menuItem="XL Pizza" price="$20.00" />
      <Card menuItem="Sandwich" price="$5.99" />
    </div>
  );
}

export default App;
