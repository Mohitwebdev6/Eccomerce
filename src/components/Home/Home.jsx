import Card from "./Card/Card"
import products from "../../database/product"
import { createElement } from "react";
import { useEffect } from "react";

export default function Home() {

    let product = useEffect(() => {
        let productContainer = document.getElementById("container");
        console.log(productContainer)
        products.forEach(element => {

        });
    })
    return (
        <div id="container" className="productContainer mt-28 flex justify-around flex-wrap">
            {products.map(el => <Card
                image={el.image}
                productName={el.productName}
                oldPrice={el.oldPrice}
                currentPrice={el.currentPrice}
                description={el.description}
            />)}
        </div>
    )




}


