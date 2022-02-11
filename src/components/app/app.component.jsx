import React from "react";
import ProductList from "../product-list/product-list.component";
import Product from "../product/product.component";
import products from "../products";
import styles from "./app.module.css"

const App = () => {
    const onProductClick = (name) => console.error(name)

    return (
        <>
            <h1 className={styles.product}>Products</h1>
            <ProductList>
                {products.map(product => {
                    return <Product
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        onClick={onProductClick}
                    />
                })}
            </ProductList>
        </>

    )
}

export default App
