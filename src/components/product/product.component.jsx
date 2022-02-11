import React from "react"
import styles from "./product.module.css"

const Product = ({ name, price, onClick }) => {
    const handleClick = () => onClick(name)

    return <li className={styles.product} onClick={handleClick}>{name} - {price}</li>
}

export default Product
