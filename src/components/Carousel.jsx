import React from "react";
import "../styles/carousel.scss";
const Carousel = () => {
  return (
    <div className="carousels">
      <div className="banner">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../../src/assets/img/home-2-01.webp"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>
                  <span>NIKE</span> BASEBALL
                </h1>
                <p>
                  We've handpicked our best gifts for all kinds of athletes.
                </p>
                <div className="slide-btn">
                  <a href="#" className="shop-btn">
                    Shopping now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../src/assets/img/home-2-02.webp"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>
                  <span>PERFECT</span> DESIGN
                </h1>
                <p>Ready. experience. comfortable and indispensable in life</p>
                <div className="slide-btn">
                  <a href="#" className="shop-btn">
                    Shopping now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../src/assets/img/home-2-03.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>
                  <span>JACKET</span> TECH PACK
                </h1>
                <p>Aurora Shell Jacket Is Ready For Any Adventure.</p>
                <div className="slide-btn">
                  <a href="#" className="shop-btn">
                    Shopping now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="carousel-botom">
        <div className="row">
          <div className="col-4">
            <div className="carousel-items">
              <div className="overay" />
              <a href="#">
                <img src="../../src/assets/img/h2-1.png" alt="h2-1" />
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="carousel-items">
              <div className="overay" />
              <a href="#">
                <img src="../../src/assets/img/h2-2.png" alt="h2-1" />
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="carousel-items">
              <div className="overay" />
              <a href="#">
                <img src="../../src/assets/img/h3-3.png" alt="h2-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
