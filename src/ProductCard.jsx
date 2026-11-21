import "./ProductCard.css";

export const ProductCard = ({id, title, price, discount, imageUrl }) => {

    return (
        <div 
        className="product-card" id={id}
        >
            {imageUrl && (
                <img
                    className="product-card__image"
                    src={imageUrl}
                    alt={title}
                />
            )}
            <div className="product-card__wrapper">
                <span
                    className={
                        discount > 0
                            ? "product-card__price product-card__price--old"
                            : "product-card__price"
                    }
                >
                    {price} ₽
                </span>

                {discount > 0 && (
                    <span className="product-card__discount">
                        {price * (1 - discount)} ₽
                    </span>
                )}
            </div>
            <p className="product-card__title">{title}</p>
        </div>
    );
}