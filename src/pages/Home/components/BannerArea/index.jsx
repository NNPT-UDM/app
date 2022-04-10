import React from 'react';
import BannerItem from '../BannerItem';

export default React.memo(function BannerArea() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <BannerItem />
          <BannerItem />
          <BannerItem />
        </div>
      </div>
    </section>
  );
});
