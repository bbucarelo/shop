//? Por hacer: Context - hecho
//Dado un template de una tienda online con una serie de productos, 
//necesitamos que estos productos puedan añadirse a nuestra cesta de la compra.
//Para ello, vamos a utilizar el context, de esta manera se compartirá la información de la cesta entre diferentes componentes

//? Por hacer: Reducer
// Definir el estado inicial
// Definir la función reductora 
// Llamar a userReducer
// Disparar acciones (dispatch)
// Actualizar componente
//Integración del componente

//! Recordar que context va fuera de los componentes 
//? Pasos: 
// Crear contexto para el carrito
import { createContext, useReducer} from "react"; //aqui cambio el useState por el useReducer

export const CartContext = createContext();

const CartReducer = (state, action) => { //Le doy al provider la opción de usar el reducer
  //esta es la función reductora
  switch (action.type) {
    case "add": 
    return [...state, action.payload];
    //!case "remove": pendiente de definir
    //return 
    default:
      return state; 
  }
};

// Crear componente proveedor con el estado y la función reductora
export const CartProvider = ({ children }) => { //implementamos el useReducer
 const [cart, dispatch] = useReducer(CartReducer, []); // Al poner un array vacío decimos que nuestro carrito está vacío al inicio = estado inicial

  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {children}
    </CartContext.Provider>

  );
};



/* const removeProduct = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  }; */


 





 