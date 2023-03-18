import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { img_prefix } from "../client/index";
import { Movie } from "../model/index";
import "./styles.css";

const CardMovie = (props: Movie) => {
  const { poster_path, title, overview, release_date } = props;
  return (
    <Grid item lg={3} xs={6} sm={4}>
      <Card style={{ height: "400px", padding: "10px 0" }}>
        <CardActionArea style={{ display: "block" }}>
          <CardMedia
            component="img"
            height="200"
            image={img_prefix + poster_path}
            alt="green iguana"
            style={{ objectFit: "contain" }}
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
