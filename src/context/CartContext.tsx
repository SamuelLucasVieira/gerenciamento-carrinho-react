import React,{ createContext, ReactNode, useState} from "react";

export interface Product{ id: number; name:string; price: number;} // Interface para o Produtos

export interface CartItem extends Product{ quantity: number;} // Interface para Itens que herda Produtos

interface CartContextType{ cartItems: CartItem[]; totalItems: number, cartTotal: number, addItemToCart: (product: Product) => void, removeItemFromCart: (productID: number) => void;}

export const CartContext = createContext <CartContextType | undefined>(undefined);

interface CartProviderProps{ children: ReactNode;}

export function CartProvider({children}: CartProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const totalItems = cartItems.reduce((acc,item) => acc + item.quantity, 0);
    const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    function addItemToCart(product: Product){
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.id === product.id);
            if (itemIndex >= 0){
                const newItems = [...prevItems];
                newItems[itemIndex].quantity += 1;
                return newItems;
            }else { return [...prevItems, {...product, quantity: 1}]};
        });
    }

    function removeItemFromCart(productId: number){
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.id === productId);
            if (itemIndex === -1) return prevItems;
            const item = prevItems[itemIndex];
            if (item.quantity === 1){ return prevItems.filter(item => item.id !== productId);} else{
                const newItems = [...prevItems];
                newItems[itemIndex].quantity -= 1;
                return newItems
            }
        });
    }

    return(
        <CartContext.Provider value={{ cartItems, totalItems, cartTotal, addItemToCart, removeItemFromCart}}>
            {children}
        </CartContext.Provider>
    );
}

