import clsx from 'clsx'

export default function Button({children, className, size, variant, ...rest}) {
    let sizeClass = size ?  `button-${size}` : "button-middle"
    let variantClass = variant && `button-${variant}`

    const allClasses = clsx(sizeClass, variantClass, className)
    console.log(allClasses)
    return (
        <button className={allClasses}  {...rest}  >
            {children}
        </button>
    )
}