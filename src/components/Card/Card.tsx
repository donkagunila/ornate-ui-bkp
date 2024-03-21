import React from "react"

interface CardProps {
    isVisible?: boolean
}
const  Card = (props:CardProps) => {
    return (
        <section>
            test me {props.isVisible}
        </section>
    )
}

export default Card