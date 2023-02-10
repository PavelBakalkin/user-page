import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <Navbar
      bg="danger"
      expand={true}
      className={`${styles.footerWrapper} ${styles.navbar}`}
    >
      <Container className={`${styles.container}`}>
        <Navbar.Brand className={styles.navbarBrand}>
          <Link to="/"> The Social Network </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
