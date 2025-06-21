import React, {useContext} from "react";
import { CartContext,Product } from "../context/CartContext";

const product: Product[] =[
    {id: 1, name: "Produto 01", price: 1},
    {id: 2, name: "Produto 02", price: 2},
    {id: 3, name: "Produto 03", price: 3},
    {id: 4, name: "Produto 04", price: 4},
];

export default function ProductList(){
    const cartContext = useContext(CartContext);
    if(!cartContext){ throw new Error('ProductList must be used within a CartProvider!')};
    const {addItemToCart}  = cartContext;
    return(
        <div>
            <h2>Produtos</h2>
                <ul>
                    {product.map(product => (
                        <li key ={product.id}>
                            {product.name} - R$ {product.price.toFixed(2)}{' '}
                            <button onClick={() => addItemToCart(product)}>Adicinar ao Carrinho</button>
                        </li>
                    ))}
                </ul>
        </div>
    ) 
} 
