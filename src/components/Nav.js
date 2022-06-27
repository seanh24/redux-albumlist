import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import myFetch from "../hooks/myFetch";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./dataSlice";

const Nav = () => {

  const results = useSelector(state => state.album.resultCount)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    myFetch(e.target[0].value).then((data) => {
      console.log(data)
      dispatch(setData(data))
    })
  }

  return (
    <Navbar sticky="top">
      <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Navbar.Brand href="#home">{results}</Navbar.Brand>
    </Navbar>
  );
};

export default Nav