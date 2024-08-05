type Props = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

const Pizza: React.FC<Props> = ({
  name,
  ingredients,
  price,
  photoName,
  soldOut,
}) => {
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={`/assets/${photoName}`} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </div>
  );
};

export default Pizza;
