import Button from '../Button/Button'

export default function MenuButton({ children, toggle, open }) {
    console.log(toggle, open)
    return (
        <Button variant="success" size="lg" onClick={toggle}>{children}</Button>
    )
}