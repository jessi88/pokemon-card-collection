import Bar from "./Bar.jsx";

const Card = ({
  d,
  typeColors,
  maxHp,
  maxAttack,
  isFavorite,
  toggleFavorite,
}) => {
  const typeColor = typeColors[d.type] || "#ccc";

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 8px",
        background: "#ffffff",
        borderRadius: "16px",
        padding: "18px 12px 12px",
        paddingTop: "18px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "20px",
          background: typeColor,
        }}
      />

      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={() => toggleFavorite(d.id)}
      >
        {isFavorite ? "♥" : "♡"}
      </button>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${d.id}.png`}
        alt={d.name}
        style={{ width: 96, height: 96 }}
      />
      <p>
        <strong>{d.name}</strong>
      </p>
      <p style={{ color: typeColor }}>{d.type}</p>
      <Bar value={d.hp} color={"#0afb0d"} type="HP" max={maxHp} />
      <Bar value={d.attack} color={"#ff0607"} type="ATK" max={maxAttack} />
    </div>
  );
};

export default Card;
