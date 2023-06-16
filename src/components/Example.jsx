function Example(props) {
    //console.log(props.name())
    return (
        <div>
            {props.render(true)}
        </div>
    )
}

export default Example