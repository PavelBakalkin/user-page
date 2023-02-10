import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <Navbar
      bg="danger"
      expand={true}
      className={`${styles.headerWrapper} ${styles.navbar}`}
    >
      <Container className={`${styles.container}`}>
        <Navbar.Brand className={styles.navbarBrand}>
          <Link to="/"> The Social Network </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
