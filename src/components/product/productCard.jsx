/* eslint-disable react/prop-types */
// components/ProductCard.jsx

import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";
 
// Componente para renderizar la tarjeta del producto
const ProductCard = ({ product }) => {// aqui queremos modificar y en el cart queremos añadir 
  const { dispatch } = useContext(CartContext);  //disparando las acciones
  //traerme el contexto y coger el addProduct del contexto y si tuviese la funcion de eliminar, también y en cart solo debo traerme el estado 

  const addToProduct = () => 
    dispatch({type: "add", payload: product}); 
  
  return (

    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "0.3s ease-in-out",
        "&:hover": { boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
      }}
    >
      <CardActionArea>
        {/* Imagen del producto */}
        <CardMedia
          component="img"
          height="200"
          image={product?.images?.[0]?.url}
          alt={product.name}
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />
        <CardContent>
          {/* Nombre del producto */}
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {product.name}
          </Typography>
          {/* Descripción del producto */}
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          {/* Precio del producto */}
          <Typography variant="h6" component="div" sx={{ paddingTop: "8px" }}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        {/* Botón para añadir al carrito */}
      </CardActions>
      {/* Actualizamos el componente */}
        <Button variant="contained"  onClick={addToProduct}>
          AÑADIR AL CARRITO
        </Button>
    </Card>
  );
};

export default ProductCard;
