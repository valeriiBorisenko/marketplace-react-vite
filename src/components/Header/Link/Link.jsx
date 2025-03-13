import "./link.css"

const Link = (props) => {
    const {name, href} = props

    return (
        <li>
            <a className="link" href={href} target="_blank" >{name}</a>
        </li>
    )
}

export default Link;