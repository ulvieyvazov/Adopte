import React, { useEffect } from "react";
import "./index.scss";
import img from "../../../assets/family.png";
import CustomizedAccordions from "../../Accordion";
import { useState } from "react";
import Carousel from "nuka-carousel";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Home = () => {
  const navigate = useNavigate()
  const [sort, setSort] = useState('sorting')

  const [value, setValue] = useState('');
  const [data, setData] = useState([]);


  const deletData = async (id) => {
    await axios.delete(`http://localhost:6060/childs/${id}`);
    await getData();
  };

  const getData = async () => {
    const res = await axios.get("http://localhost:6060/childs");
    setData(
      res.data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  
  const handleSort = () => {
    let sortData = []
    
    sortData = [...data].sort((a,b)=>{
      setSort('sorting');
      return(a.age - b.age)
    })
    
    setData(sortData)
  }

  useEffect(() => {
    getData();
  }, [value]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="home-container">
        <div className="home-parent">
          <Carousel>
            <div className="bg-image">
              <div className="div">
                <div className="text">
                  <span>Celine Richardson, 14 yrs. old</span>
                  <h1>Needs a Caring Parents</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi unde impedit, necessitatibus, soluta sit quam minima
                    expedita atque corrupti reiciendis.
                  </p>

                  <a>Adopt Her Now!</a>
                </div>
              </div>
            </div>

            <div className="bg-image new">
              <div className="div">
                <div className="text">
                  <span>Celine Richardson, 14 yrs. old</span>
                  <h1>Needs a Caring Parents</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi unde impedit, necessitatibus, soluta sit quam minima
                    expedita atque corrupti reiciendis.
                  </p>

                  <a>Adopt Her Now!</a>
                </div>
              </div>
            </div>
          </Carousel>

          <div className="new-section">
            <div className="left">
              <img src={img} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                nemo et, esse laudantium consequatur. Eum soluta illum
                architecto dolorum quae suscipit dignissimos! Saepe, amet
                explicabo nemo eligendi totam sint repudiandae.
              </p>
              <button>Adopt a child now</button>
            </div>

            <div className="right">
              <h1>Steps to adopt & foster a child</h1>
              <CustomizedAccordions />
            </div>
          </div>

          <div className="cart-parent">
            <div className="cart-top">
              <h1>WAITING CHILDREN</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi unde impedit, necessitatibus, soluta sit quam minima
                expedita atque corrupti reiciendis.
              </p>

              <button>Find More Waiting Children</button>
            </div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSort}>Sort</button>
            <div className="cart">
              {data.map((d) => (
                <div className="cart-child" key={d._id} onClick={() => navigate(`/${d._id}`)}>
                  <img src={d.img} alt="" />
                  <h2 style={{ display: "inline", margin: "0 20px" }}>
                    {d.name}
                  </h2>
                  <span>{d.age} yrs. old</span>
                  <button onClick={() => deletData(d._id)}>delet</button>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-parent">
            <div className="cart-top">
              <h1>WAITING CHILDREN</h1>
            </div>
            <div className="cart" style={{ gap: 80, marginLeft: "250px" }}>
              <div className="cart-child">
                <img
                  src="https://preview.colorlib.com/theme/adopted/img/work_thumb_1.jpg.webp"
                  alt=""
                />
              </div>
              <div className="cart-child">
                <img
                  src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg.webp"
                  alt=""
                />
              </div>
              <div className="cart-child">
                <img
                  src="https://preview.colorlib.com/theme/adopted/img/work_thumb_3.jpg.webp"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="form">
            <h1>GET NEWS & UPDATES</h1>
            <form action="">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
