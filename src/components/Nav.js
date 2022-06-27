import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import myFetch from "../hooks/myFetch";
import { useDispatch } from "react-redux";
import { setData, mountLoading, unmountLoading } from "./dataSlice";

const Nav = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    dispatch(mountLoading())
    myFetch(e.target[0].value).then((data) => {
      console.log(data)
      dispatch(setData(data))
      dispatch(unmountLoading())
    })
  }

  return (
    <Navbar bg='dark' sticky="top">
      <Form className="d-flex nav__form" onSubmit={(e) => handleSubmit(e)}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 nav__form__inp"
        />
        <Button variant="light">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Nav