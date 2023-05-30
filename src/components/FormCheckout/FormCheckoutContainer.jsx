import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../Context/CartContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );
    clearCart();
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      //password: "",
      //confirmPassword: "",
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Este campo es obligaotorio"),
      email: Yup.string()
        .email("Ingrese un email válido")
        .required("Este campo es obligaotorio"),
      telefono: Yup.number().required("Este campo es obligaotorio"),
      // password: Yup.string()
      //   .required("Este campo es obligaotorio")
      //   .min(8, "La contraseña debe tener al menos 6 caracteres y máximo 15")
      //   .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
      //     message:
      //       "La contraseña debe tener al menos 1 mayúscula, 1 minúscula, un caractér especial y un número ",
      //   }),
      // confirmPassword: Yup.string()
      //   .required("Este campo es obligatorio")
      //   .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <h1>El ID de tu compra es: {orderId}</h1>
      ) : (
        <FormCheckout
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
