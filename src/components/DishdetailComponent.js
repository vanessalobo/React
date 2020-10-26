import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
//UI COMPONENTc

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  const rencomments = comments.map((comment) => {
    return (
      <div class="container">
        <p>{comment.comment}</p>
        <p>
          -- {comment.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comment.date)))}
        </p>
      </div>
    );
  });
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      {rencomments}
    </div>
  );
}

const DishDetail = (props) => {
  const dish = props.dish;
  if (props.dish != null) {
    return (
      <div className="row">
        <RenderDish dish={dish} />
        <RenderComments comments={props.dish.comments} />
      </div>
    );
  } else return null;
};

export default DishDetail;
