import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <div>
      <h2 className="text-center">Generate Random User</h2>
      <Card>
        <CardBody className="text-center">
          <img
            height="200"
            width="200"
            className="rounded-circle img-thumbnail border-danger"
            alt="Random User"
            src={details.picture?.large}
          />
          <CardTitle className="text-primary text-center">
            <h3>
              <span>{details.name?.title}</span>&nbsp;
              <span>{details.name?.first}</span>&nbsp;
              <span>{details.name?.last}</span>
            </h3>
          </CardTitle>
          <CardText>
            <FaMapMarkedAlt />
            {details.location?.city}, {details.location?.country}
            <p>
              <i>Phone: </i>
              {details.phone}
            </p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyCard;
