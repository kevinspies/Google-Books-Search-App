import React, { Component } from "react";
class Search extends Component {
  //state
  //blah
  //la la la

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>React Google Books Search</Jumbotron>
        </Row>
        <Row>
          Book Search
          <br />
          <Input
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            placeholder="Title (required)"
          />
        </Row>
        <Row>Results</Row>
      </Container>
    );
  }
}

export default Search;
