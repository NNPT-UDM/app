import React from "react";

export default function BlogItem() {
  return (
    <div className="col-sm-6 col-lg-4 mb-8">
      <div className="post-item">
        <a href="blog-details.html" className="thumb">
          <img
            src="assets/images/blog/1.webp"
            width="370"
            height="320"
            alt="Image-HasTech"
          />
        </a>
        <div className="content">
          <a className="post-category" href="blog.html">
            beauty
          </a>
          <h4 className="title">
            <a href="blog-details.html">
              Lorem ipsum dolor sit amet consectetur adipiscing.
            </a>
          </h4>
          <ul className="meta">
            <li className="author-info">
              <span>By:</span> <a href="blog.html">Tomas De Momen</a>
            </li>
            <li className="post-date">February 13, 2022</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
