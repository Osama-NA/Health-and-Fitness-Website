import plateBackgroundImage from "../../utils/images/home-background-plate-img.png";

const IMAGE_ALT = "Image of healthy food from pexels.com by Allexana";

const HomeImage = () => {
    return (
        <aside className="home-image">
            <img src={plateBackgroundImage} alt={IMAGE_ALT} draggable={false} />

            <div className="blurred-color-bg-1"></div>
            <div className="blurred-color-bg-2"></div>
        </aside>
    )
}

export default HomeImage;