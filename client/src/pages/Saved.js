import React, { Component } from "react";
//importing elemental things huahaha
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
class Saved extends Component {
  //state
  state = {
    savedResults: []
  };
  //blah
  //la la la

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>React Google Books Search</Jumbotron>
        </Row>
        <Row>Saved Books</Row>
        <Row>Results</Row>
      </Container>
    );
  }
}

export default Search;
