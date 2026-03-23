const Bar = ({ width, color, type }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 6,
        width: "100%",
      }}
    >
      <span style={{ width: 40 }}>{type}</span>

      <div
        style={{
          flex: 1,
          height: 10,
          backgroundColor: "#eee",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${width}%`,
            height: "100%",
            backgroundColor: color,
          }}
        />
      </div>

      <span style={{ width: 30, textAlign: "right" }}>{width}</span>
    </div>
  );
};

export default Bar;
