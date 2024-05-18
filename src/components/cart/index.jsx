import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { List, Typography, Box, Button, ListItem, ListItemText } from "@mui/material";

// Componente funcional Cart
const Cart = () => {
  const { cart } = useContext(CartContext);
  // Utilizamos el contexto del carrito

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
              secondary={producto.price}                                 
      />  
      {cart.length > 0 && (   
      <Button variant="outlined" href="#outlined-buttons">
      Proceder al pago
      </Button>
      )}
    </ListItem>
    ))}
    </List>
    </Box>
  );
};

export default Cart;

// Esta es la cesta de la compra 
//! Mapeamos los ítems del carrito para mostrarlos: Revisar la definición del map
//! Mostramos el botón de "Proceder al Pago" si hay ítems en el carrito: se muestra con cada elemento 
//! Falta gestionar como se elimina con su botón 