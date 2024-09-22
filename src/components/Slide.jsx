import React from "react";

const Slide = () => {
  return (
    <div className="liveshow">
      <div className="container">
        <div className="slides">
          <div
            className="slide-item"
            style={{
              backgroundImage:
                "url(./assets/img/ad4ff5e4-3571-4073-b81d-384d89fd5663.png)",
            }}
          >
            <div className="slide-content">
              <div className="name">Switzerland</div>
              <div className="des">Lorem ipsum dolor, sit amet!</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="slide-item"
            style={{
              backgroundImage:
                "url(./assets/img/NIKE DUNK LOW MICHIGAN VARSITY.png)",
            }}
          >
            <div className="slide-content">
              <div className="name">NIKE DUNK LOW</div>
              <div className="des">Lorem ipsum dolor, sit amet!</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="slide-item"
            style={{
              backgroundImage: "url(./assets/img/Nike jordan shoe.png)",
            }}
          >
            <div className="slide-content">
              <div className="name">Iceland</div>
              <div className="des">Lorem ipsum dolor, sit amet!</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="slide-item"
            style={{
              backgroundImage: "url(./assets/img/Nike running shoes.png)",
            }}
          >
            <div className="slide-content">
              <div className="name">Australia</div>
              <div className="des">Lorem ipsum dolor, sit amet!</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="slide-item"
            style={{
              backgroundImage: "url(./assets/img/ROCKY - A Banner Design.png)",
            }}
          >
            <div className="slide-content">
              <div className="name">Netherland</div>
              <div className="des">Lorem ipsum dolor, sit amet!</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="slide-item"
            style={{ backgroundImage: "url(./assets/img/spider.png)" }}
          >
            <div className="slide-content">
              <div className="name">Ireland</div>
              <div className="des">Lorem ipsum dolor, sit amet!</div>
              <button>See More</button>
            </div>
          </div>
        </div>
        <div className="button">
          <button className="prev">
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button className="next">
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
