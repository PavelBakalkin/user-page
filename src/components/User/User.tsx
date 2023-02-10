import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Avatar from "../../images/avatar.png";
import { IUserProps } from "../../interfaces/IUserProps";
import ModalComponent from "../Modal/ModalComponent";
import "./User.css";

export default function User({ user, isPosts }: IUserProps) {
  const [isShowModal, setIsShowModal] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setIsShowModal(false);
  const handleShow = () => setIsShowModal(true);
  const handleCheckPosts = () => {
    navigate(`/users-posts/${user.id}`);
  };

  return (
    <>
      <Card className="m-10">
        <Card.Body style={{ justifyContent: `${isPosts && "center"}` }}>
          <Row>
            <Col md={12} lg={2}>
              <Card.Img
                className="justify-content-md-center"
                variant="top"
                src={Avatar}
              />
            </Col>
            <Col md={12} lg={10}>
              <Card.Title>{user.name}</Card.Title>
              <div>
                <Row>
                  <Col md={12} lg={3}>
                    <div>Phone: {user.phone}</div>
                    <div>User Name: {user.username}</div>
                    <div>Website: {user.website}</div>
                  </Col>
                  <Col md={12} lg={3}>
                    <div>City: {user.address.city}</div>
                    <div>Street: {user.address.street}</div>
                    <div>Suite: {user.address.suite}</div>
                  </Col>
                  <Col md={12} lg={3}>
                    <div>Company Name: {user.company.name}</div>
                    <div>Catch Phrase: {user.company.catchPhrase}</div>
                    <div>Bs: {user.company.bs}</div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          {!isPosts && (
            <Row>
              <Col md={12} lg={2}>
                <Button variant="danger" onClick={handleCheckPosts}>
                  Check posts
                </Button>
              </Col>
              <Col md={12} lg={10}>
                <Button variant="danger" onClick={handleShow}>
                  Check album
                </Button>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
      {isShowModal && (
        <ModalComponent
          userId={user.id}
          name={user.name}
          isShow={isShowModal}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
