import { ProductCard } from "./ProductCard";
import "./ProductList.css";

export const ProductList = ( {products} ) => {
    return <ul className="product-list">
        {products.map((item) => (
            <li className="product-list__item" key={item.id}>
                <ProductCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    discount={item.discount}
                    imageUrl={item.imageUrl}
                />
            </li>
        ))}
    </ul>;
}