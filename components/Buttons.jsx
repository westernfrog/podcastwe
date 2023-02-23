import Link from "next/link";

export default function Buttons(props) {
  return (
    <>
      <div className="col-lg-4 d-grid">
        <Link href={"/" + props.url} className="d-grid">
          <button className="btn btn-outline-light btn-sm btn-shrink my-4 py-2 rounded shadow-sm text-dm">
            {props.html}
            <i
              class="fa-solid fa-arrow-up-long ms-2"
              style={{ transform: "rotate(45deg)" }}
            ></i>
          </button>
        </Link>
      </div>
    </>
  );
}
