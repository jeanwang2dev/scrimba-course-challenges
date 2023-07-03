import Button from '../Button/Button'

export default function MenuButton({ children, onClick }) {
    return (
        <Button variant="success" size="sm" onClick={onClick}>{children}</Button>
    )
}