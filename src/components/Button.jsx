export default function Button({children, varient, ...rest}) {
    console.log(rest)
    return (
        <button {...rest}>
            {children}
        </button>
    )
}