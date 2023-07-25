import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="src\assets\logo.svg"
              width="25"
              height="25"
              className="d-inline-block align-top"
            />{' '}
            CodingGaby
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
