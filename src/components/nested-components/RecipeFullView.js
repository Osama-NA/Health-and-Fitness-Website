import '../../styles/desktop/RecipeFullView.scss'
import '../../styles/tablet/RecipeFullView.scss'
import '../../styles/mobile/RecipeFullView.scss'
import AddToFavorites from './AddToFavorites';

const CLASS_NAME = "full-view-recipe";

const RecipeFullView = ({ recipe, setShowClickedRecipe }) => {

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
                <div className="image" style={{ backgroundImage: `url('${recipe.image}')` }}></div>

                <div className="info">
                    <h3 className="title">{recipe.name}</h3>
                    <p className="name">Preparation time</p>

                    {/* show prep time if more than 0 */}
                    <p className="description">{recipe.prepTime > 0 ? `${recipe.prepTime} minute(s)` : '-'}</p>

                    <p className="name">Ingredients</p>
                    {
                        recipe.ingredients.map((ingredient, i) => {
                            return <p key={i} className="description">~ {ingredient}</p>
                        })
                    }
                    <p className="name">Calories</p>
                    <p className="description">{recipe.calories}</p>

                    <AddToFavorites recipe={recipe} />
                </div>
            </div>
        </div>
    )
}

export default RecipeFullView