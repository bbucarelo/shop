import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { List, Typography, Box, Button, ListItem, ListItemText } from "@mui/material";

// Componente funcional Cart
const Cart = () => {
  const { cart } = useContext(CartContext); // Utilizamos el contexto del carrito

  //! Función para manejar la eliminación de un ítem del carrito
  return (
    <Box sx={{ width: 320, p: 2 }}>
      {/* Título del carrito */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Carrito de Compras
      </Typography>         
      <List>
        {cart.map((producto) => (  
            <ListItem key={producto.id}>
              <ListItemText
              primary={producto.name}
              secondary={`$${producto.price}`}                                
      />       
    </ListItem>
    ))}
      {cart.length > 0 && (   
      <Button variant="outlined" > 
      Proceder al pago
      </Button>
      )}
    </List>
    </Box>
  );
};

export default Cart;

// Esta es la cesta de la compra 
//? Mapeamos los ítems del carrito para mostrarlos con mui mat y listitem... - hecho
//? Mostramos el botón de "Proceder al Pago" si hay ítems en el carrito - hecho
//? Concantenar la cantidad y precio para que salga el dolar - hecho
//Dato: La condición cart.lenght se pone fuera de la lista para que le botón no renderice cada item con ícono
//! Pendientes: revisar como acumular productos para que no se añada varias veces el mismo producto a la lista del carrito
//! Falta gestionar como se eliminan los productos con su botón 