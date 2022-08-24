import React from "react";
import Post from "./Post/Post.js";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@mui/material";

export const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  // console.log(posts)
  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {posts.map((post) => {
            return (
              <Grid key={post._id} item xs={12} sm={10} md={4} lg={4}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Posts;
