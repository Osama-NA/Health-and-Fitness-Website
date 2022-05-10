import '../../styles/desktop/RecipeFullView.scss'
import '../../styles/tablet/RecipeFullView.scss'
import '../../styles/mobile/RecipeFullView.scss'

const CLASS_NAME = "full-view-recipe";

const RecipeFullView = ({ title, calories, image, ingredients, prepTime, setShowClickedRecipe }) => {

    // Closes recipe full view when user click anywhere except the recipe container
    const handleClick = (e) => {
        if (CLASS_NAME === e.target.classList[0]){
            setShowClickedRecipe(false);
        }
    }

    return (
        <div className={CLASS_NAME} onClick={handleClick}>
            <div className="close-button" onClick={() => setShowClickedRecipe(false)}>
                <div className="line-1 line"></div>
                <div className="line-2 line"></div>
            </div>

            <div className="recipe-container">
                <div className="image" style={{ backgroundImage: `url('${image}')` }}></div>

                <div className="info">
                    <h3 className="title">{title}</h3>
                    <p className="name">Preparation time</p>

                    {/* show prep time if more than 0 */}
                    <p className="description">{prepTime > 0 ? `${prepTime} minute(s)` : '-'}</p>

                    <p className="name">Ingredients</p>
                    {
                        ingredients.map((ingredient, i) => {
                            return <p key={i} className="description">~ {ingredient}</p>
                        })
                    }
                    <p className="name">Calories</p>
                    <p className="description">{calories}</p>
                    
                    <p className="add-favorite">
                        <svg className="fa-solid fa-bookmark" />
                        <span>Add to favorites</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default RecipeFullView