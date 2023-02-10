import { Container, Stack } from "react-bootstrap";
import { useAppSelector } from "../../store/hooks";
import User from "../../components/User/User";
import "./AllUsers.css";

export default function AllUsers() {
  const users = useAppSelector((state) => state.users.users);

  return (
    <Container className="wrapper">
      <Stack gap={4}>
        {users.map((user) => {
          return <User key={user.email} user={user} />;
        })}
      </Stack>
    </Container>
  );
}
