import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { img_prefix } from "../client/index";
import { Movie } from "../model/index";
import "./styles.css";

const CardMovie: React.FC<Movie> = (props) => {
  const navigate = useNavigate();
  const { id, poster_path, title, overview, release_date } = props;
  return (
    <Grid item lg={3} xs={6} sm={4}>
      <Card
        className="card_movie"
        onClick={() => {
          navigate(`/detail-movie/${id}`);
        }}
      >
        <CardActionArea style={{ display: "block" }}>
          <CardMedia
            component="img"
            height="200"
            image={img_prefix + poster_path}
            alt="green iguana"
            className="cardMedia"
          />
          <CardContent>
            <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
              {title}
            </Typography>
            <Typography>{release_date}</Typography>
            <Typography variant="body2" className="overview">
              {overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CardMovie;
