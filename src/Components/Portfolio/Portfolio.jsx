import React from "react";
import TheImg from "../Portfolio/image/cake.png";
import TheImgOne from "../Portfolio/image/game.png";
import TheImgThree from "../Portfolio/image/circus.png";
import TheImgFour from "../Portfolio/image/submarine.png";
import TheImgFive from "../Portfolio/image/safe.png";
import TheImages from "../Portfolio/image/cabin.png";
import style from "./Portfolio.module.css";

export default function Portfolio() {
  function Deletes() {
    let view = document.getElementById("view");
    view.classList.replace("d-flex", "d-none");
  }
  function display(e) {
    let view = document.getElementById("view");
    view.classList.replace("d-none", "d-flex");
    let allImg = document.querySelectorAll(" img ");
    let ImgChang = document.getElementById("ImgChang");
    // let address = document.getElementById("address");
    for (let i = 0; i < allImg.length; i++) {
      let imgSrc = e.target.getAttribute('src');
      ImgChang.setAttribute("src", imgSrc);

    }
  }
 
  return (
    <section  className="my-5 pt-5">
      <div className="container text-center">
        <h2 className={`${style.address}`}>PORTFOLIO</h2>
        <div className={`${style.starts}`}>
          <div className={`${style.firstStarts}`}></div>
          <i className={` fas fa-star text-denger my-4 fa-2x mx-3 `}></i>
          <div className={`${style.oneStart}`}></div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 my-2   position-relative ">
            <div className={`${style.image} item `}>
              <img
                onClick={display}
                className="w-100 rounded-2"
                src={TheImages}
                alt="p"
              />
              <div className={`${style.info} rounded-2 `}>
                <p className="fa-4x">+ </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2   position-relative ">
            <div className={`${style.image} item `}>
              <img
                onClick={display}
                className={` w-100 rounded-2  `}
                src={TheImg}
                alt=""
              />
              <div className={`${style.info} rounded-2 `}>
                <p className="fa-4x">+ </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2   position-relative ">
            <div className={`${style.image} item `}>
              <img
                onClick={display}
                className={` w-100 rounded-2  `}
                src={TheImgThree}
                alt=""
              />
              <div className={`${style.info} rounded-2 `}>
                <p className="fa-4x">+ </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2   position-relative ">
            <div className={`${style.image} item `}>
              <img
                onClick={display}
                className={` w-100 rounded-2  `}
                src={TheImgOne}
                alt=""
              />
              <div className={`${style.info} rounded-2 `}>
                <p className="fa-4x">+ </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2   position-relative ">
            <div className={`${style.image} item `}>
              <img
                onClick={display}
                className={` w-100 rounded-2  `}
                src={TheImgFive}
                alt=""
              />
              <div className={`${style.info} rounded-2 `}>
                <p className="fa-4x">+ </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2   position-relative ">
            <div className={`${style.image} item `}>
              <img
                onClick={display}
                className={` w-100 rounded-2  `}
                src={TheImgFour}
                alt=""
              />
              <div className={`${style.info} rounded-2 `}>
                <p className="fa-4x">+ </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="view" className={`${style.light} d-none   `}>
        <div className="container ">
          <div className="row">
            <div className={`${style.box} col-lg-12 mt-5  bg-white h-75 `}>
              <h2 id="address" className={`${style.address} pt-5 mt-5`}>
                TASTY CAKE
              </h2>
              <div className={`${style.starts}`}>
                <div className={`${style.firstStarts}`}></div>
                <i
                  className={`  fas fa-star text-denger my-4 fa-2x mx-3  `}
                ></i>
                <div className={`${style.oneStart}`}></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                    <img
                      id="ImgChang"
                      className={` w-75 rounded-2  `}
                      src={TheImg}
                      alt=""
                    />
                    <p className="lead pt-3 ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button onClick={Deletes} className="btn btn-success mb-3 ">
                      <i className="fas fa-times fa-fw "></i>
                      Close Window
                    </button>
                    <i
                      onClick={Deletes}
                      className={`${style.icon} fas fa-times fa-fw top  fa-3x`}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
