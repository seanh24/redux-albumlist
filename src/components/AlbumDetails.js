import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectedAlbum } from "./dataSlice";

const AlbumDetails = () => {
  const album = useSelector(selectedAlbum);
  const isLoading = useSelector((state) => state.album.isLoading);
  console.log("this", album);
  let releaseDate;
  if (!isLoading) {
    let date = new Date(album.releaseDate)
    releaseDate = [
        date.getMonth() + 1,
        date.getDate(),
        date.getFullYear()
    ]
    console.log(releaseDate)

  }

  return (
    <Container className="details" fluid>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container>
          <Row>
            <Col className="details-cont">
              <Image src={album.artworkUrl100} fluid />
              <Row>{album.collectionName}</Row>
              <Row>{album.artistName}</Row>
              <Row>Rating: {album.contentAdvisoryRating}</Row>
              <Row>Released: {releaseDate.join('-')}</Row>
              <Row>Tracks: {album.trackCount}</Row>
              <Row>Price: ${album.collectionPrice}</Row>
              <Row><a href={album.collectionViewUrl} target='_blank'>Go to this albums Apple Music page</a></Row>
            
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default AlbumDetails;
