import React, {Component} from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";



class Search extends Component {
    

render() {
    return (
        <div
            style={{ height: 200, clear: "both", paddingtop: 5, marginBottom: 25}}
            className="jumbotron">
                Book Search
                <form>
                    <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                />
                <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
                </form>
            </div>

    )
}
}

export default Search;