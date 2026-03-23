import Bar from './Bar.jsx'

const Card = ({ d }) => {
  return (
    <div
      style={{
        width: 120,
        backgroundColor: "white",
        borderRadius: 10,
        margin: 4,
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${d.id}.png`}
        alt={d.name}
        style={{ width: 96, height: 96 }}
      />
      <p>
        <strong>{d.name}</strong>
      </p>
      <p>{d.type}</p>
      <Bar width={d.hp} color={"#0afb0d"} type="HP" />
      <Bar width={d.attack} color={"#ff0607"} type="ATK" />
    </div>
  );
};

export default Card;
