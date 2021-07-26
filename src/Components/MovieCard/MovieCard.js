import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ movie,handleDelete }) => {
  return (
    <div>
      <Card style={{ width: "19rem" }} className="mx-3 my-3">
        <Card.Img style={{height:"320px"}} variant="top" src={movie.posterUrl}/>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.rate}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          <Button onClick={()=>{handleDelete(movie.id)}}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
