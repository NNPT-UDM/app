import React from 'react';
import './styles.scss';
export default function SkeletonProduct() {
  return (
    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
      <div>
        <img src="//placekitten.com/300/200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
