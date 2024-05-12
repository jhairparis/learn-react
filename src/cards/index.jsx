import React from "react";

const Cards= () => {
  return (
    <div className="container">
      <h1>Nature</h1>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <img
              className="card-img-top"
              src="https://picsum.photos/seed/picsum/200/300"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Mountains</h5>
              <p className="card-text">
                The mountains are a beautiful place to escape the hustle and
                bustle of the city. With their majestic peaks and serene
                landscapes, they offer a peaceful retreat for those seeking
                solitude and tranquility.
              </p>
              <a href="#" className="btn btn-primary">
                Explore More
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img
              className="card-img-top"
              src="https://picsum.photos/seed/forest/200/300"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Forest</h5>
              <p className="card-text">
                The forest is a magical place full of diverse wildlife and
                vegetation. Its a perfect place for nature lovers.
              </p>
              <a href="#" className="btn btn-primary">
                Explore More
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img
              className="card-img-top"
              src="https://picsum.photos/seed/ocean/200/300"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Ocean</h5>
              <p className="card-text">
                The ocean is a vast and mysterious place. Its home to countless
                species and offers breathtaking views.
              </p>
              <a href="#" className="btn btn-primary">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
