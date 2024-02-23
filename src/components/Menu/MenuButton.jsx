import Button from '../Button/Button'

export default function MenuButton({ children, onClick }) {
    return (
        <Button variant="success" size="lg" onClick={onClick}>{children}</Button>
    )
}