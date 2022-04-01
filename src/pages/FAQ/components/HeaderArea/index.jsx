import React from "react";
import { Link } from "react-router-dom";

export default function HeaderArea() {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-style1">
      <div className="container">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Faq
          </li>
        </ol>
      </div>
    </nav>
  );
}
