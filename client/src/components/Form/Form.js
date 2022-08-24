import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { Button, Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

export const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const CustomButton = styled(Button)({
    marginTop: "10px",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Box>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography mt={4} align="center" component="h5" variant="h6">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          sx={{ my: 1 }}
          name="creator"
          label="Creator"
          variant="outlined"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          sx={{ my: 1 }}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          sx={{ my: 1 }}
          name="message"
          label="Message"
          multiline
          variant="outlined"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <div className="fileinput">
          <FileBase
            className="selectedFile"
            type="file"
            mutiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <CustomButton
          className="buttonSubmit"
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </CustomButton>
        <CustomButton
          variant="contained"
          color="white"
          size="large"
          onClick={clear}
          fullWidth
        >
          Clear
        </CustomButton>
      </form>
    </Box>
  );
};

export default Form;
