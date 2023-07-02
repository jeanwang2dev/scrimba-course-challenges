import clsx from 'clsx'

export default function Button({children, className, size, ...rest}) {
    let sizeClass = size ?  `button-${size}` : ""
    // let sizeClass
    // if( size === 'lg') sizeClass="button-large"
    // if( size === 'sm') sizeClass="button-small"

    const allClasses = clsx(sizeClass, className)
    console.log(allClasses)
    return (
        <button className={allClasses}  {...rest}  >
            {children}
        </button>
    )
}