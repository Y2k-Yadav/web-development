export function AllCards({ data }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        justifyItems: "center",
        gap: "10px",
        textAlign: "center",
      }}
    >
      {data.map((obj) => (
        <div
          key={obj.id}
          style={{
            backgroundColor: "green",
            maxHeight: "600px",
            maxWidth: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src={obj.thumbnail}
            alt="image not found"
            style={{ height: "55%" }}
          />
          <h2 style={{ height: "10%", width: "90%" }}>{obj.title}</h2>
          <p style={{ height: "10%", width: "90%" }}>{obj.price}</p>
          <p style={{ height: "20%", width: "90%" }}>{obj.description}</p>
        </div>
      ))}
    </div>
  );
}
