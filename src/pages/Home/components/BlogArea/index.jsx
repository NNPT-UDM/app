import React from "react";
import BlogImg1 from "../../../../assets/images/blog/1.webp";
import BlogImg2 from "../../../../assets/images/blog/2.webp";
import BlogImg3 from "../../../../assets/images/blog/3.webp";
export default function BlogArea() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="title">Blog posts</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-n9">
          <div className="col-sm-6 col-lg-4 mb-8">
            <div className="post-item">
              <a href="blog-details.html" className="thumb">
                <img
                  src={BlogImg1}
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
          <div className="col-sm-6 col-lg-4 mb-8">
            <div className="post-item">
              <a href="blog-details.html" className="thumb">
                <img
                  src={BlogImg2}
                  width="370"
                  height="320"
                  alt="Image-HasTech"
                />
              </a>
              <div className="content">
                <a
                  className="post-category post-category-two"
                  data-bg-color="#A49CFF"
                  href="blog.html"
                >
                  beauty
                </a>
                <h4 className="title">
                  <a href="blog-details.html">
                    Facial Scrub is natural treatment for face.
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
          <div className="col-sm-6 col-lg-4 mb-8">
            <div className="post-item">
              <a href="blog-details.html" className="thumb">
                <img
                  src={BlogImg3}
                  width="370"
                  height="320"
                  alt="Image-HasTech"
                />
              </a>
              <div className="content">
                <a
                  className="post-category post-category-three"
                  data-bg-color="#9CDBFF"
                  href="blog.html"
                >
                  beauty
                </a>
                <h4 className="title">
                  <a href="blog-details.html">
                    Benefit of Hot Ston Spa for your health & life.
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
        </div>
      </div>
    </section>
  );
}
