import React from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    
    <div className="hero_area">
    <div className="hero_bg_box">
      <img src="images/hero-bg.jpg" alt="" />
    </div>
 
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid header_top_container">

          <div className="contact_nav">
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
          <div className="social_box">
            <a href="www.facebook.com">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand " href="/"> Finter </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"> About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/team"> Team </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>
                      Login
                    </span>
                  </a>
                </li>
                <form className="form-inline justify-content-center">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <h1>
                    We Provide <br />
        Welding Services
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <h1>
                    We Provide <br />
        Welding Services
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <h1>
                    We Provide <br />
        Welding12 Services
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  
  </div>
  
  )
}
