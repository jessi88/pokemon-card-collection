const Card = ({ d }) => {
  return (
    <div
      style={{
        width: 120,
        backgroundColor: "white",
        borderRadius: 4,
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
      <p>Type: {d.type}</p>
      <p>Hp: {d.hp}</p>
      <p>Attack: {d.attack}</p>
    </div>
  );
};

export default Card;
