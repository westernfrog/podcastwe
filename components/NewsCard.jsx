export default function NewsCard(props) {
  return (
    <>
      <div className={props.class}>
        <div className="card card-cover btn-shrink h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg image bg-grad">
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-3">
            <h2 className="pt-5 mt-auto mb-2 lh-1 fw-bold">{props.title}</h2>
            <ul className="d-flex list-unstyled">
              <li className="d-flex align-items-center me-3 text-muted">
                <p>{props.desc}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
