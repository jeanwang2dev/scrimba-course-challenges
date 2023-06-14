import { withExtraPropsAdded } from './components/withExtraPropsAdded'

function App(props) {
    console.log(props)
    return (
        <div>Hello! {props.name}</div>
    )
}

export default withExtraPropsAdded(App)