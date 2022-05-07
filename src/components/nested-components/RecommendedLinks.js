import { Link } from 'react-router-dom';
import {recommendations} from '../../utils/data';

const RecommendedLinks = () => {
    return (
        <aside className="recommendations">
            {
                recommendations.map((recommendation, i) => {
                    return (<Recommendation 
                        key={i}
                        imageSource={recommendation.imageSource}
                        title={recommendation.title}
                        link={recommendation.link}
                    />)
                })
            }
        </aside>
    )
}

const Recommendation = ({imageSource, title, link}) => {
    return(
        <Link 
            to={link}
            className="recommendation" 
            style={{ backgroundImage: `url('${imageSource}')`}}
        >
            <h3>{title}</h3>
            
            <div className="overlay"></div>
        </Link>
    )
}

export default RecommendedLinks;