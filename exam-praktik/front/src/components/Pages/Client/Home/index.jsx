import React from "react";
import "./index.scss";
import Carousel from "nuka-carousel";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  //https://swiperjs.com/react
  const [sort , setSort] = useState('sorting')
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const handleSort = ()=>{
    let sortData = []
    
  }

  const getData = async () => {
    const res = await axios.get("http://localhost:6060/bloggers");
    setData(
      res.data.filter((item) => item._id.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getData();
  }, [value]);

  return (
    <>
      <div className="section-1">
        <div className="div">
          <div className="text-sec1">
            <div className="text-parent">
              <h1>A Discount Toner Cartridge Is Better Than Ever.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="latest">
          <h2>Latest News from all categories</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="latest-cart-parent" style={{ display: "flex" }}>
          <Carousel>
            <div className="latest-cart">
              <img
                src="https://preview.colorlib.com/theme/blogger/img/c1.jpg.webp"
                alt=""
              />
              <p>10 Jan 2018</p>
              <p>It S Hurricane Season Visiting Hilton</p>
            </div>
            <div className="latest-cart">
              <img
                src="https://preview.colorlib.com/theme/blogger/img/c2.jpg.webp"
                alt=""
              />
              <p>10 Jan 2018</p>
              <p>What Makes A Hotel Boutique</p>
            </div>
            <div className="latest-cart">
              <img
                src="https://preview.colorlib.com/theme/blogger/img/c3.jpg.webp"
                alt=""
              />
              <p>10 Jan 2018</p>
              <p>Les Houches The Hidden Gem Valley</p>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="sec-3">
        <div className="latestt">
          <h2>Hot topics from Travel Section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="api-cart">
          <div className="cart">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {data.map((d) => (
              <div className="image-cart">
                <div className="image" style={{ display: "flex" }}>
                  <img src={d.img} alt="" style={{ position: "relative" }} />
                  <div
                    className="20"
                    style={{
                      position: "absolute",
                      width: "80px",
                      textAlign: "center",
                      fontSize: "30px",
                      color: "white",
                      height: "80px",
                      backgroundColor: "black",
                    }}
                  >
                    20 Dec
                  </div>
                </div>
                <div
                  className="right"
                  style={{ width: "380px", marginLeft: "20px" }}
                >
                  <h2>{d.title}</h2>
                  <p style={{ padding: "20px 0" }}>{d.caption}</p>
                  <span style={{ marginRight: "80px" }}>2</span>
                  <span>{d.comment}</span>
                </div>
              </div>
            ))}
          </div>
          <button style={{ width: "5%", margin: "0 auto" }}>LOAD MORE</button>
        </div>
      </div>

      <div className="section-4">
        <div className="latestt">
          <h2>Fashion News This Week</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="week">
          <div className="carts">
            <img
              src="https://preview.colorlib.com/theme/blogger/img/f1.jpg.webp"
              alt=""
            />
            <p className="p1">10 Jan 2018</p>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <span>15 liks</span>
              <span>02 comments</span>
            </div>
          </div>
          <div className="carts">
            <img
              src="https://preview.colorlib.com/theme/blogger/img/f2.jpg.webp"
              alt=""
            />
            <p className="p1">10 Jan 2018</p>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <span>15 liks</span>
              <span>02 comments</span>
            </div>
          </div>
          <div className="carts">
            <img
              src="https://preview.colorlib.com/theme/blogger/img/f3.jpg.webp"
              alt=""
            />
            <p className="p1">10 Jan 2018</p>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <span>15 liks</span>
              <span>02 comments</span>
            </div>
          </div>
          <div className="carts">
            <img
              src="https://preview.colorlib.com/theme/blogger/img/f4.jpg.webp"
              alt=""
            />
            <p className="p1">10 Jan 2018</p>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <span>15 liks</span>
              <span>02 comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-5">
        <div className="latestt">
          <h2>About Blogger Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="about">
          <div className="about-left">
            <p>
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why it’s crucial that, as women, our behavior on
              the job is beyond reproach. inappropriate behavior is often
              laughed off as “boys will be boys,” women face higher conduct
              standards especially in the workplace. That’s why it’s crucial
              that. inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why it’s crucial that, as women.
            </p>
          </div>

          <div className="about-right">
            <div className="">
              <img
                src="https://preview.colorlib.com/theme/blogger/img/team1.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/blogger/img/team1.jpg.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
