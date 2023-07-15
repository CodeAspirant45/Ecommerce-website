import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <div className="slider-frame">
          <div className="slide-images">
            <div className="img-container">
              <img src="img/image-1200x600.jpg" />
            </div>
            <div className="img-container">
              <img src="img/image1-1200x600.jpg" />
            </div>
            <div className="img-container">
              <img src="img/image2-1200x600.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <h1 className="category">Categories</h1>
        </div>
        <section className="index-category">
          <div>
            <Link to={"Womenclothes"} className="index-category-box">
              <div className="dark-overlay"></div>
              <h3>Women clothes </h3>
            </Link>
          </div>
          <Link to={"Menclothes"} className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>Men clothes </h3>
          </Link>

          <Link to={"Womenshoes"} className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>Women shoes </h3>
          </Link>

          <a href="Menshoes" className="index-category-box">
            <div class="dark-overlay"></div>
            <h3>Men shoes </h3>
          </a>
          <Link to={"Perfume"} className="index-category-box">
            <div class="dark-overlay"></div>
            <h3>Perfumes </h3>
          </Link>
          <a href="Bags" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>Bags </h3>
          </a>
          <a href="Beautyproducts" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>Beauty products </h3>
          </a>
          <a href="Waccessories" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>
              Accesories <br /> (for Women){" "}
            </h3>
          </a>
          <a href="Maccessories" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>
              Accesories <br /> (for Men){" "}
            </h3>
          </a>
        </section>
      </div>

      <section class="feature-products">
        <h1>Featured Products</h1>
        <div class="fpro-container">
          <div class="pro">
            <Link to={"fp-1"}>
              <img src="img/clothing/66.jpg" alt="" />
            </Link>
            <div class="des">
              <h5>Trendy clothes</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>
          <div class="pro">
            <Link to={"fp-2"}>
              {" "}
              <img src="img/clothing/44.jpg" alt="" />{" "}
            </Link>
            <div class="des">
              <h5>Trendy clothes</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>
          <div class="pro">
            <Link to={"fp-3"}>
              {" "}
              <img src="img/mc/7.jpg" alt="" />
            </Link>
            <div class="des">
              <h5>Trendy clothes</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>
          <div class="pro">
            <Link to={"fp-4"}>
              {" "}
              <img src="img/bags/11.jpg" alt="" />{" "}
            </Link>
            <div class="des">
              <h5>Trendy Bag</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>

          <div class="pro">
            <Link to={"fp-5"}>
              {" "}
              <img src="img/ma/15.jpg" alt="" />{" "}
            </Link>
            <div class="des">
              <h5>Trendy Accesories</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>

          <div class="pro">
            <Link to={"fp-6"}>
              {" "}
              <img src="img/bags/5.jpg" alt="" />
            </Link>
            <div class="des">
              <h5>Trendy Bag</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>

          <div class="pro">
            <Link to={"fp-7"}>
              <img src="img/ms/3.jpg" alt="" />{" "}
            </Link>
            <div class="des">
              <h5>Trendy shoes</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>

          <div class="pro">
            <Link to={"fp-8"}>
              {" "}
              <img
                src="img/shoes/214ed3dc3830770b61fdc55ff804f5b0.jpg"
                alt=""
              />
            </Link>
            <div class="des">
              <h5>Trendy Shoes</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>

          <div class="pro">
            <Link to={"fp-9"}>
              <img src="img/wa/23.jpg" alt="" />
            </Link>
            <div class="des">
              <h5>Trendy Accesories</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>

          <div class="pro">
            <Link to={"fp-10"}>
              <img src="img/wa/24.jpg" alt="" />
            </Link>
            <div class="des">
              <h5>Trendy Accesories</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>

          <div class="pro">
            <Link to={"fp-11"}>
              <img src="img/wa/9.jpg" alt="" />
            </Link>
            <div class="des">
              <h5>Trendy Accesories</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>

          <div class="pro">
            <Link to={"fp-12"}>
              {" "}
              <img
                src="img/beauty/4d8cce518c0bf10ce93e7a7b79cbbca5.jpg"
                alt=""
              />
            </Link>
            <div class="des">
              <h5>Trendy Products</h5>
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h4>$50</h4>
            </div>
            <Link to={"bag"}>
              <i class="fa fa-shopping-bag bag"></i>
            </Link>
          </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get email updates about our shop and <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Enter your e-mail address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
