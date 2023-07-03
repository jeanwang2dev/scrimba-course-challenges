import Button from '../Button/Button'

export default function MenuButton({ children, toggle}) {

    return (
        <Button variant="success" size="lg" onClick={toggle}>{children}</Button>
    )
}