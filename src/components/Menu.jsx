import React, {Component} from "react"
import { withToggler } from "./HOCs/withToggler"

class Menu extends Component {
    state = {
        show: true
    }
    
    toggleShow = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }
    
    render() {
        return (
            <div>
                <button className="border bg-gray-300 p-1.5 rounded" onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"} Menu </button>
                <nav className="flex-col mb-3" style={{display: this.state.show ? "flex" : "none"}}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        ) 
    }
}

export default withToggler(Menu)