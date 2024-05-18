//? Por hacer: 
//Dado un template de una tienda online con una serie de productos, 
//necesitamos que estos productos puedan añadirse a nuestra cesta de la compra.
//Para ello, vamos a utilizar el context, de esta manera se compartirá la información de la cesta entre diferentes componentes

//? Pasos: 
// Crear contexto para el carrito
import { createContext, useState} from "react";

export const CartContext = createContext();

// Crear componente proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Al poner un array vacío decimos que nuestro carrito está vacío al inicio o su estado inicial

// Crear funciones de acción, bien sea para añadir productos al carrito o para eliminarlos

const addProduct = (product) => { //Añadimos al carrito los productos 
    setCart([...cart, product]);
  };

const removeProduct = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

// Definimos el proveedor  
  return ( 
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};



 