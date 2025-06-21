import React from "react";
import { CartContext, CartProvider } from "./context/CartContext";
import ProductList from "./componets/ProductList";
import CarSummary from "./componets/CartSummary";
import CartPage from "./componets/CartPage";

export default function App(){
    return(
        <CartProvider>
            <header>
                <h1>Minha Loja</h1>
                <CarSummary/>
            </header>
            <main>
                <ProductList/>
                <hr/>
                <CartPage/>
            </main>
        </CartProvider>
    )
}