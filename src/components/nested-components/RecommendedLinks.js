import { Link } from 'react-router-dom';
import RecommendedLinkImage1 from '../../utils/images/recommended1.jpg';
import RecommendedLinkImage2 from '../../utils/images/recommended2.jpg';
import RecommendedLinkImage3 from '../../utils/images/recommended3.jpg';
import RecommendedLinkImage4 from '../../utils/images/recommended4.jpg';

const recommendations = [
    {
        imageSource: RecommendedLinkImage1,
        title: 'Top 10 healthy recipes',
        link: ''
    },
    {
        imageSource: RecommendedLinkImage2,
        title: 'Calories in common foods',
        link: ''
    },
    {
        imageSource: RecommendedLinkImage3,
        title: 'Calories meal planning samples',
        link: ''
    },
    {
        imageSource: RecommendedLinkImage4,
        title: 'Top calorie dense foods to gain weight',
        link: ''
    }
]

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