import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// import faker from "faker";

class App extends React.Component {
    state = { images: [] };

    //getting Images and set state
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        })
        this.setState({ images: response.data.results });
    }

    render() {
        return <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
        </div>
    }
}
export default App;