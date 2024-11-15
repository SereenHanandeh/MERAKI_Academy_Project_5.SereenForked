import React, { useEffect } from "react";
import "./posts.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../redux/reducers/slicePosts";
const Posts = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const posts = useSelector((posts) => {
    return posts.posts.posts;
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setPosts(res.data.Posts));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [posts]);
  return (
    <div>
      <div className="createPost">
        <input placeholder="whats on your mind?" />
        <button type="submit">post</button>
      </div>
      {posts?.map((elem, ind) => {
        return (
          <div key={ind} className="post">
            {/* just for test */}
            {elem.profile_image ? (
              <img src={elem.profile_image} className="profPic" />
            ) : null}
            <div className="innerPost">
              <h3>{elem.user_name}</h3>
              <p>{elem.body}</p>
              <div className="btn">
                <button>share</button>
                <button>comments</button>
                <button>like</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
