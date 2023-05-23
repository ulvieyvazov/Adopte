import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  const [category, setCategory] = useState([]);
  const getCata = async () => {
    const res = await axios.get(
      `http://localhost:6060/childs/${params.id}`
    );
    setCategory(res.data);
  };

  useEffect(() => {
    getCata();
  }, []);

  // console.log(category.name);

  return (
    <div>
   { <div>
      <img src={category?.img} alt="" />
      <h1>{category?.name}</h1>
      <p>{category?.age}</p>
    </div>}
    </div>
  );
};

export default Detail;
