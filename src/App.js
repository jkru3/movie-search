import React from "react";
import ReactDOM from "react-dom/client";
import MovieSearch from "./movieSearch";



class App extends React.Component{
    render() {
        return (
            <div className="container">
              <h1 className="title">Movie Search</h1>
              <MovieSearch/>
            </div>
        );
    }
}

export default App;