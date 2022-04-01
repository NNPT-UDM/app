import React from "react";
import { Link } from "react-router-dom";
import PNFImg from "../../assets/images/photos/page-not-found.webp";
import Header from "../../components/Header";
export default function PageNotFound() {
  return (
    <>
      <Header />
      <div className="main-content">
        <section
          className="page-not-found-area"
         
        >
          <div className="container">
            <div className="page-not-found">
              <img src={PNFImg} width={975} height={538} alt="Image" />
              <h3 className="title">Opps! You Lost</h3>
              <h5 className="back-btn">
                Go to <Link to="/">Home</Link> Page
              </h5>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
