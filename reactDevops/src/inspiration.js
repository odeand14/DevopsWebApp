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
                            <a href="https://github.com/odeand14/DevopsWebApp">GitHub repo</a>
                        </td>
                        <td className="lead">
                            Repo on github with sourcecode
                        </td>
                    </tr>
                    <tr>
                        <td className="lead">
                            <a href="https://hub.docker.com/r/odeand14/devopsexam/">DockerHub repo</a>
                        </td>
                        <td className="lead">
                            Repo on dockerhub with image built from pipeline
                        </td>
                    </tr>
                    <tr>
                        <td className="lead">
                            <a href="../README.md">Readme</a>
                        </td>
                        <td className="lead">
                            Readme file
                        </td>
                    </tr>
                    <tr>
                        <td className="lead">
                            <a href="https://getintodevops.com/">Devops webpage</a>
                        </td>
                        <td className="lead">
                            Page I used a lot for help
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }


}