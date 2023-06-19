import React, {Component} from "react"
import GrandParent from "./components/GrandParent"

class App extends Component {
    state = { count: 0 }
    
    increment = () => this.setState(prevState => ({count: prevState.count + 1}))
    
    render() {
        console.log("[GP] [P] [C] [GC] APP just rendered")
        return (
            <div className="container mx-auto pt-4">
                <button className="border py-0.5 px-3.5 bg-gray-300 rounded" onClick={this.increment}>+1</button>
                <h2>{this.state.count}</h2>
                <p>I'm the App component</p>
                <GrandParent />
                <GrandParent />
            </div>
        )    
    }
}

export default App