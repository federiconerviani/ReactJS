import React from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormCheckoutContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {},
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Este campo es obligaotorio"),
      email: Yup.string()
        .email("Ingrese un email válido")
        .required("Este campo es obligaotorio"),
      password: Yup.string()
        .required("Este campo es obligaotorio")
        .min(8, "La contraseña debe tener al menos 6 caracteres y máximo 15")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener al menos 1 mayúscula, 1 minúscula, un caractér especial y un número ",
        }),
      confirmPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      <FormCheckout
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default FormCheckoutContainer;
