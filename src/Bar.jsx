const Bar = ({ width, color, type } ) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span>{type}
            <div
                style={{
                    width: width,
                    height: 10,
                    backgroundColor: color,
                    borderRadius: 4,
                }}>
            </div>
            {width}</span>
        </div>
    );
}

export default Bar;