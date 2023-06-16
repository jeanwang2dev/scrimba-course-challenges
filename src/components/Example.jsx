function Example(props) {
    //console.log(props.name())
    return (
        <div>
            {props.render(-9)}
        </div>
    )
}

export default Example