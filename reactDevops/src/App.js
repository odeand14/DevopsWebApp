import React, { Component } from 'react';
import Header from "./header";
import Inspiration from "./inspiration";

class App extends Component {

constructor(props) {

	super(props);

	this.state = {
		items: [],
		search: [],
	};

}


	render() {

		let filteredItems = this.state.items.filter(
			(item) => {
				return item.name.toLowerCase().indexOf(this.state.search) !== -1;
			}
		);

        return (

			<div className="App">
                <Header searchItems={this.searchItems.bind(this)}/>
                <Inspiration items={filteredItems}/>
			</div>

		);
	}


	searchItems(event) {
        this.setState({search: event.target.value.substr(0, 20)});
	}


}

export default App;
