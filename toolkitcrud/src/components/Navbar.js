import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getPost } from "../features/postSlice";
const Navbar = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = (e) => {
    e.preventDefault();
    // console.log("idddd", id);
    if (!id) {
      toast.error("Please Provide the ID ");
    } else {
      dispatch(getPost({ id }));
      setId("");
    }
  };

  return (
    <>
      <div className="form-contain">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Please Enter Your Post ID
            </label>
            <input
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="buttons">
            <button
              onClick={() => navigate("/createPost")}
              type="button"
              className="btn btn-primary"
            >
              Create
            </button>
            <button
              onClick={fetchData}
              type="submit"
              //   style={{ backgroundColor: "#a2ad24", borderRadius: "15px" }}
              className="btn btn-info "
            >
              Fetch Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Navbar;
