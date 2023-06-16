function Example(props) {
    console.log(props.name())
    return (
        <div>
            <h1>{props.name()} This is an exmaple !</h1>
        </div>
    )
}

export default Example