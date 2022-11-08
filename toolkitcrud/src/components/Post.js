import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPost } from "../features/postSlice";
import Navbar from "./Navbar";
import Spinner from "./Spinner";

const Post = () => {
  const { post, isLoading } = useSelector((store) => store.post);
  const dispatch = useDispatch();

  console.log("POST..", post);

  const handleDelete = (x) => {
    dispatch(deletePost(x));
    console.log("delete id", x);
  };

  return (
    <>
      <Navbar />
      <div className="form-contain-1">
        {isLoading ? (
          <Spinner />
        ) : (
          post?.length > 0 &&
          post?.map((item) => {
            // const { title, body, id } = item;
            return (
              <div className="card1" key={item.id}>
                <h4 className="card-title">{`${item.title}...`}</h4>
                <p className="card-text">{item.body}</p>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="btn btn-primary ">Edit</button>
                  <button
                    className="btn btn-danger ms-5"
                    // onClick={() => dispatch(deletePost(item))}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Post;
