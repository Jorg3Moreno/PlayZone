import React, {Component} from 'react';
import Search from './../components/search';
import { connect } from 'react-redux';
import { searchEntities, searchAsyncEntities } from "../../actions";

class SearchContainer extends Component {
    state = {
        value: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        // Ejample 1 of async function
        // fetch(`http://miapi.com/buscar/${this.input.value}`).then((data) => {
        //     this.props.searchEntities(this.input.value);
        // });
        this.props.searchAsyncEntities(this.input.value);
    };

    handleInputChange = event => {
        this.setState({
            value: event.target.value.replace(' ', '-')
        });
    };

    setInputRef = element => {
        this.input = element;
    };

    render() {
        return(
            <Search
                setRef={this.setInputRef}
                handleChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                value={this.state.value}
            />
        );
    }
}

const mapDispatchToProps = {
    searchEntities,
    searchAsyncEntities
};

export default connect(null, mapDispatchToProps)(SearchContainer);
