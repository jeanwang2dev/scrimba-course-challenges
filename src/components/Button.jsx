export default function Button({children, size, ...rest}) {
    let sizeClass 
    if( size === 'lg') sizeClass="button-large"
    if( size === 'sm') sizeClass="button-small"
    return (
        <button {...rest} className={sizeClass}  >
            {children}
        </button>
    )
}