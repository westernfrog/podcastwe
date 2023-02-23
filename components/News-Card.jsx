export default function NewsCard(props) {
  const width = props.width || 400;
  return (
    <>
      <div
        className={"border border-dark shadow " + props.class}
        style={{ width: width, height: 300, position: "relative" }}
      >
        <div
          class="card bg-transparent border-0 rounded"
          style={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <div class="card-footer border-0 bg-transparent">
            <h4>{props.title}</h4>
            <p class="text-muted">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
