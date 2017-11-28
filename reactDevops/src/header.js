import React from "react";

export default class Header extends React.Component {

    render() {

        return(
            <nav className="navbar navbar-expand-lg mx-3 my-4">

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item mx-2">
                        <input type="text" className="form-inline form-control" placeholder="Search on name" onChange={this.props.searchItems.bind(this)}/>
                    </li>

                </ul>

            </nav>
        )
    }

}
