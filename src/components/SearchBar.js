import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: 'Search for video...'
    };

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        const { onFormSubmit } = this.props;
        const { term } = this.state;

        onFormSubmit(term);
    };

    render() {
        const { term } = this.state;

        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>
                            Video Search
                        </label>
                        <input
                            type="text"
                            value={ term }
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;