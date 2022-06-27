import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelection } from "./dataSlice";

const List = () => {
  const albums = useSelector((state) => state.album.results);
  const results = useSelector((state) => state.album.resultCount);
  const isLoading = useSelector((state) => state.album.isLoading);
    const dispatch = useDispatch()
    const handleClick = (index) => {
        dispatch(setSelection(index))
    }
  return (
    <Container className="list" fluid>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <span>
          <div className="list__title">{results} results found</div>
          {albums.map((item, index) => {
            return (
              <Row className="list__row" key={index} onClick={() => handleClick(index)}>
                <Col><Image src={item.artworkUrl60} fluid /></Col>
                <Col className="list__albumName">{item.collectionName}</Col>
              </Row>
            );
          })}
        </span>
      )}
    </Container>
  );
};

export default List;
