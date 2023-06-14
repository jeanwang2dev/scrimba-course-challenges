// A function that takes a component as its first argument and returns 
// a new component that wraps the given component, providing extra capabilities to it.

export function withExtraPropsAdded(component) {
    const Component = component
    return function(props) {
        return (
            <Component name="John doe" {...props} />
        )
    }
}