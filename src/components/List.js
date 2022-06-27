import { useSelector } from "react-redux";

const List = () => {
  const resultCount = useSelector((state) => state.album.resultCount);
  const albums = useSelector((state) => state.album.results);

  return (
    <div>
      {resultCount === 0
        ? "...loading"
        : albums.map((item) => {
            return <div>{item.collectionName}</div>;
          })}
    </div>
  );
};

export default List;
