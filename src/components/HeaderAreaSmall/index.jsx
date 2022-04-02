import React from "react";

export default function HeaderAreaSmall({title = ""}) {
  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb-style1">
        <div className="container">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}
