//import { withExtraPropsAdded } from './components/withExtraPropsAdded'
import { withFavoriteNumber } from "./components/withFavoriteNumber"

function App(props) {
    console.log(props)
    return (
        <div>Hello! My Favorite Number is {props.favNumber}</div>
    )
}

export default withFavoriteNumber(App)