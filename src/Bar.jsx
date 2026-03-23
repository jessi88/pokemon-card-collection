import { useEffect, useState } from "react";

const Bar = ({ value, color, type, max = 150 }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const normalizedWidth = (value / max) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(normalizedWidth);
    }, 100);

    return () => clearTimeout(timer);
  }, [normalizedWidth]);

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
            width: `${animatedWidth}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: 4,
            transition: "width 0.8s ease-out",
          }}
        />
      </div>

      <span style={{ width: 30, textAlign: "right" }}>{value}</span>
    </div>
  );
};

export default Bar;
