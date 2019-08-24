import React, { Component } from 'react';
class GetOnlinePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchString: "",
            error : null,
            isLoaded : false,
            airports : []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        // I will use fake api from jsonplaceholder website
        // this return 100 posts
        fetch("http://localhost:8000/airports")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    airports : result,
                });
            })


    }
    handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }
    render() {

    const {error, isLoaded, airports} = this.state;
    let _airports = this.state.airports;
    console.log(airports);
    let search = this.state.searchString.trim().toLowerCase();
    if (search.length > 0) {
      _airports = _airports.filter(function(airport) {
      let searchItem = airport.iso_country + airport.name;
      return searchItem.toLowerCase().match(search);
      });
    }

    console.log(airports);
    if(error){
        return <div>Error in loading</div>
    }else if (!isLoaded) {
        return <div>Loading ...</div>
    }else{
        return(
            <div>
            <input
              type="text"
              value={this.state.searchString}
              ref="search"
              onChange={this.handleChange}
              placeholder="Country"
              />
                <ol className="item">
                {
                    _airports.map(airport => (
                        <li key={airport.id} align="start">
                            <div>
                               {airport.iso_country}: {airport.name}
                            </div>
                        </li>
                    ))
                }
                </ol>
            </div>
        );
    }

}
  }
 export default GetOnlinePosts;
