import { useEffect } from "react";
import { requestEnum } from "../../constants/api-constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchInfo } from "../../store/usersSlice";
import "./UsersPosts.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import User from "../../components/User/User";

export default function UsersPosts() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.users.posts);
  const user = useAppSelector((state) => state.users.users);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(
      fetchInfo({
        requestName: requestEnum.posts,
        userId: Number(id),
        path: "userId",
      })
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container className="wrapper">
      <Stack gap={4}>
        {user.length && <User user={user[Number(id) - 1]} isPosts={true} />}
        {posts.map((post) => {
          return (
            <Row className="col-block">
              <Col sm={12}>
                <h4>{post.title}</h4>
              </Col>
              <Col>{post.body}</Col>
            </Row>
          );
        })}
        <Button variant="dark" onClick={handleBack}>
          Go Back
        </Button>
      </Stack>
    </Container>
  );
}
