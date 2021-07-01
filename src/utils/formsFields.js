export const registerUserFormFieldsArr = ({ values, onChange }) => {
  return [
    {
      name: "username",
      placeholder: "Nombre de usuario",
      inputType: "text",
      values,
      onChange,
    },
    {
      name: "email",
      placeholder: "Correo electrónico",
      inputType: "email",
      values,
      onChange,
    },
    {
      name: "password",
      placeholder: "Contraseña",
      inputType: "password",
      values,
      onChange,
    },
    {
      name: "confirmPassword",
      placeholder: "Confirmar contraseña",
      inputType: "password",
      values,
      onChange,
    },
  ];
};

export const loginUserFormFieldsArr = ({ values, onChange }) => {
  return [
    {
      name: "username",
      placeholder: "Nombre de usuario",
      inputType: "text",
      values,
      onChange,
    },
    {
      name: "password",
      placeholder: "Contraseña",
      inputType: "password",
      values,
      onChange,
    },
  ];
};
