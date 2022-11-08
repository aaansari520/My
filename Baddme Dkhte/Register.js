import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import Logo from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const memberState = {
  isMember: true,
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required!"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required!"),
  password: Yup.string().required("Password is Required!"),
});

const Register = () => {
  const dispatch = useDispatch();
  const { user, isloading } = useSelector((store) => store.user);
  const [state, setState] = useState(memberState);
  const { isMember } = state;
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const { isMember } = state;
    console.log("Form values", values);
    if (isMember) {
      return dispatch(
        loginUser({ email: values.email, password: values.password })
      );
    }
    return dispatch(
      registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    isMember: true,
    onSubmit,
    // (values) => {
    //   if (isMember) {
    //     return dispatch(
    //       loginUser({ email: values.email, password: values.password })
    //     );
    //   }
    //   dispatch(
    //     registerUser({
    //       name: values.name,
    //       email: values.email,
    //       password: values.password,
    //     })
    //   );
    // },
    validationSchema,
  });

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user]);

  const toggleMember = () => {
    setState({ ...state, isMember: !state.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={formik.handleSubmit}>
        <Logo />
        <h3>{state.isMember ? "LOGIN" : "REGISTER"}</h3>
        {!state.isMember && (
          <div>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <p style={{ color: "red" }} className="error">
                {formik.errors.name}
              </p>
            ) : null}
          </div>
        )}
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p style={{ color: "red" }} className="error">
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p style={{ color: "red" }} className="error">
              {formik.errors.password}
            </p>
          ) : null}
        </div>
        <button type="submit" className="btn btn-block" disabled={isloading}>
          {isloading ? "Loading..." : "Submit"}
        </button>
        <p>
          {state.isMember ? "Not a member ? " : "Already a member ? "}
          <button type="button" onClick={toggleMember} className="member-btn">
            {state.isMember ? " Register" : " Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
//  onClick = { toggleMember };
