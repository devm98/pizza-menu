import pizzaData from "../data";
import Pizza from "./Pizza";

const Menu = () => {
  // pizzaData.length = 0;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length > 0 ? (
        <div className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} {...pizza} />
          ))}
        </div>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
