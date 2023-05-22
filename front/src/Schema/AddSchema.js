import * as yup from "yup";

export const AddSchema = yup.object().shape({
  img: yup.string().required("******dv*vd*dv"),
  name: yup.string().required("******dv*vd*dv"),
  age: yup.string().required("******dv*vd*dv"),
});
