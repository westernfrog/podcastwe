import Link from "next/link";

export default function Buttons(props) {
  return (
    <>
      <div className="col-lg-4 d-grid">
        <Link href={"/" + props.url} className="d-grid text-decoration-none">
          <button className="btn btn-outline-light btn-sm btn-shrink my-4 py-2 rounded-pill shadow-sm text-dm">
            {props.html}
            <i
              className="fa-solid fa-arrow-up-long ms-2"
              style={{ transform: "rotate(45deg)" }}
            ></i>
          </button>
        </Link>
      </div>
    </>
  );
}
