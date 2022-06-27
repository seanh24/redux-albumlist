import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const CompWithLoading = (component) => {
  const isLoading = useSelector((state) => state.album.isLoading);

  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        {component}
      )}
    </div>
  );
};

export default CompWithLoading
