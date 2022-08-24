import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid,
  Tooltip,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from "react-redux";

import { deletePost } from "../../../actions/posts";

export const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={post.selectedFile}
          alt="green iguana"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2">
                {moment(post.createdAt).fromNow()}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                size="small"
                style={{ color: "black" }}
                onClick={() => setCurrentId(post._id)}
              >
                <Tooltip title="Edit" arrow>
                  <MoreHorizIcon />
                </Tooltip>
              </Button>
            </Grid>
          </Grid>
          <Typography variant="body2" color="primary">
            {post.creator}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "end" }}>
          <Button size="small" onClick={() => dispatch(deletePost(post._id))}>
            <Tooltip title="Delete" arrow>
              <DeleteIcon />
            </Tooltip>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
