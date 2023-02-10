import { useEffect } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { requestEnum } from "../../constants/api-constants";
import { IModalProps } from "../../interfaces/IModalProps";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchInfo } from "../../store/usersSlice";
import "./Modal.css";

export default function ModalComponent({
  userId,
  name,
  isShow,
  handleClose,
}: IModalProps) {
  const dispatch = useAppDispatch();
  const album = useAppSelector((state) => state.users.albums);

  useEffect(() => {
    dispatch(
      fetchInfo({
        requestName: requestEnum.albums,
        userId: userId,
        path: "userId",
      })
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}'s Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {album.map((alb) => {
              return (
                <Col key={name} sm={12} className="mb-1 mt-1">
                  <div>{alb.title}</div>
                </Col>
              );
            })}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
