const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer>
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
};

export default Footer;
