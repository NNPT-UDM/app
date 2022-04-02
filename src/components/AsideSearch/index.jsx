import React from "react";

export default function AsideSearch() {
  return (
    <aside
      className="aside-search-box-wrapper offcanvas offcanvas-top"
      tabIndex={-1}
      id="AsideOffcanvasSearch"
      aria-labelledby="offcanvasTopLabel"
    >
      <div className="offcanvas-header">
        <h5 className="d-none" id="offcanvasTopLabel">
          Aside Search
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="fa fa-close" />
        </button>
      </div>
      <div className="offcanvas-body">
        <div className="container pt--0 pb--0">
          <div className="search-box-form-wrap">
            <div className="search-note">
              <p>Start typing and press Enter to search</p>
            </div>
            <form action="#" method="post">
              <div className="aside-search-form position-relative">
                <label htmlFor="SearchInput" className="visually-hidden">
                  Search
                </label>
                <input
                  id="SearchInput"
                  type="search"
                  className="form-control"
                  placeholder="Search entire store…"
                />
                <button className="search-button" type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </aside>
  );
}
