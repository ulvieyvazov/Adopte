import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddSchema } from "../../../Schema/AddSchema";
import axios from "axios";

const Add = () => {
  const [data, setData] = useState([]);

  const [state, setState] = useState({
    img: "",
    name: "",
    price: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddSchema),
  });

  const getData = async () => {
    const resp = await axios.get("http://localhost:6060/childs");
    setData(resp.data);
  };


  const postChild = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:6060/childs", {
      img: state.img,
      name: state.name,
      age: state.age
    })
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <form action="" onSubmit={(postChild)}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            name="img"
            {...register("img")}
            onChange={handleChange}
          />
          {errors.img?.message && (
            <p style={{ color: "red" }}>{errors.img?.message}</p>
          )}
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            name="name"
            {...register("name")}
            onChange={handleChange}
          />
          {errors.name?.message && (
            <p style={{ color: "red" }}>{errors.name?.message}</p>
          )}
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            type={"number"}
            name="age"
            {...register("age")}
            onChange={handleChange}
          />
          {errors.age?.message && (
            <p style={{ color: "red" }}>{errors.age?.message}</p>
          )}
        </Box>

        <button>Submit</button>
      </form>
    </>
  );
};

export default Add;