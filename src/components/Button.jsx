export default function Button(props) {
    return (
        <button onClick={props.log}>{props.children}</button>
    )
}