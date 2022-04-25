import { Link } from 'react-router-dom';

const SERVICE_ALT = "FoodFinder Services";

const Service = ({ img, description, path, text, buttonIcon }) => {
    return (
        <article className="service">
            <img src={img} alt={SERVICE_ALT} draggable={false}/>

            <p>{description}</p>

            <Link to={path}>
                <span>{text}</span>
                <svg className={buttonIcon}></svg>
            </Link>
        </article>
    )
}

export default Service;