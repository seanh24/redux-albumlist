import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav";
import List from "./components/List";
import { useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import AlbumDetails from "./components/AlbumDetails";

function App() {
  const resultCount = useSelector((state) => state.album.resultCount);
  const isLoading = useSelector((state) => state.album.isLoading);

  let main;
  if (resultCount > 0 || isLoading) {
    main = (
      <Container className='main' fluid>
        <Row>
          <Col>
            <AlbumDetails />
          </Col>
          <Col xs={9}>
            <List />
          </Col>
        </Row>
      </Container>
    );
  } else {
    main = "";
  }

  return (
    <div className="App">
      <Nav />
      {main}
    </div>
  );
}

export default App;
