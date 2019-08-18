import React, { Component } from "react";
class Search extends Component {
  //state
  state = {
    titleSearch: "",
    results: []
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
        <Row>
          Book Search
          <br />
          <Input
            value={this.state.titleSearch}
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
