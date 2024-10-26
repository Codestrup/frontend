import Link from "next/link";

export default function Breadcrumb({
  breadcrumbTitle,
  internshipTitle,
  internshipDescription,
  type,
}) {
  return (
    <>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("assets/img/breadcrumb.jpg")' }}
      >
        <div className="border-shape">
          <img src="/assets/img/element.png" alt="shape-img" />
        </div>
        <div className="line-shape">
          <img src="/assets/img/line-element.png" alt="shape-img" />
        </div>
        <div className="container">
          <div
            className="page-heading"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {breadcrumbTitle}
            </h1>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/">Home</Link>
              </li>

              {type !== "" && (
                <li>
                  <i className="fas fa-chevron-right" />
                </li>
              )}

              { (type === "theoryCourses" ||
                type === "aptitudePreparation" ||
                type === "interviewPreparation") && (
                  <li>
                    <Link href="/learning_Center">Learning Center</Link>
                  </li>
                )}

              <li>
                <i className="fas fa-chevron-right" />
              </li>

              <li>{breadcrumbTitle}</li>

              <li>
                <i className="fas fa-chevron-right" />
              </li>
              <li>{internshipTitle}</li>
            </ul>

            {internshipDescription && (
              <p
                style={{
                  color: "white",
                  width: "100%",
                  maxWidth: "800px",
                  marginTop: "10px",
                }}
              >
                {internshipDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
