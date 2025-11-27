import {Component} from "react";

class classComponent extends Component {
    render() {
        const title = "Is a Class Component";
        return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>        //tailwind
    }
}

export default classComponent;