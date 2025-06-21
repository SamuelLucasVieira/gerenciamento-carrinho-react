import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage(){
    const cartContext = useContext(CartContext);
    if(!cartContext){throw new Error('CartPage must be used within a CartProvider!')};

    const { cartItems, cartTotal, removeItemFromCart } = cartContext;
    return(
    <div>
        <h2>Seu Carrinho</h2>
        {cartItems.length === 0 && <p>Seu carrinho está vazio.</p>}
        {cartItems.length > 0 && (
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço Unitário</th>
                        <th>Subtotal</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item =>(
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price.toFixed(2)}</td>
                        <td>{item.price * item.quantity}</td>
                        <td>
                            <button onClick={() => removeItemFromCart(item.id)}>Remover</button>
                        </td>
                      </tr>  
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}><strong>Total</strong></td>
                        <td colSpan={2}><strong>R$ {cartTotal.toFixed(2)}</strong></td>
                    </tr>
                </tfoot>
            </table>
        )}
    </div>
    )
}
