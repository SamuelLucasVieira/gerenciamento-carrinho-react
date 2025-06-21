import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";

export default function CarSummary(){
    const cartContext = useContext(CartContext);
    if (!cartContext){ throw new Error('CartSummary must be used within a CartProvider!')};
    const { totalItems } = cartContext;
    return <div> Carrinho ({totalItems})</div>
}