import React from "react";
import InspirationListHeader from "./inspiration-header";

export default class Inspiration extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div className="container">
                <table className="table table-bordered table-hover table-sm">
                    <InspirationListHeader/>
                    <tbody>
                    <tr>
                        <td className="lead">
                            yep
                        </td>
                        <td className="lead">
                            yap
                        </td>
                        <td className="lead">
                            yup
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }


}