import { Card, CardActions, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";

const CardItem = (props) => {
  console.log(props);
  const { image, title, _id } = props.data;

  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const history = useHistory();

  // const handleClick = () => {
  //   setLoggedInUser({ ...loggedInUser, data: props.data });
  //   history.push("/registration-form");
  // };

  return (
    <Card className="card" style={{ width: "23%", height: "100%" }}>
      <CardMedia
        // onClick={handleClick}
        component="img"
        alt="child-support"
        height="140"
        image={
          image
            ? require(`../../Resources/images/${image}`)
            : require(`../../Resources/images/cleanWater.png`)
        }
        title={title}
      />

      <CardActions className="card-bottom">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/registration-form/${_id}`}
        >
          <Typography variant="body2" component="p">
            {title}
          </Typography>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardItem;
