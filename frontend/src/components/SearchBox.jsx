import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = () => {
  return (
    <Form style={{ display: "flex", width: "100%" }} inline>
      <Form.Control
        className="mr-sm-2 ml-sm-5"
        type="text"
        placeholder="Enter your email address"
      />
      <Button
        style={styles.btnStyle}
        type="submit"
        variant="light"
        className="p-2"
      >
        SUBSCRIBE
      </Button>
    </Form>
  );
};

const styles = {
  btnStyle: {
    color: "grey",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingRight: "15px",
    paddingLeft: "15px",
    borderRadius: "0px",
  },
};

export default SearchBox;
