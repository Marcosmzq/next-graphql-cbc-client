import { Box, Container } from "@chakra-ui/react";
import { AccessLayout } from "src/components/molecules/AccessLayout";
import { loginUserFormFieldsArr } from "src/utils/formsFields";
import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "src/graphql/userMutations";
import { useRouter } from "next/router";
import { AuthContext } from "src/context/userAuth";

const Login = () => {
  const router = useRouter();
  const { user, login } = useContext(AuthContext);
  const [errors, setErrors] = useState();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const [loginUser, { loading, data }] = useMutation(LOGIN_USER, {
    async update(_, { data: { login: userData } }) {
      await login(userData);
      router.push("/");
    },
    onError(err) {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });
  if (data || user) {
    router.push("/");
  }
  return (
    <Container maxW="container.sm">
      <Box p={4} my="30px">
        <AccessLayout
          formFieldsArr={() =>
            loginUserFormFieldsArr({
              values,
              onChange: handleOnChange,
            })
          }
          formOnSubmit={(e) => {
            e.preventDefault();
            loginUser();
          }}
          formBtnText="Iniciar sesion"
          loading={loading}
          title="Inicia sesion y empezá a aprender de una forma más eficiente."
          imgAlt="Inicia sesion y empezá a aprender de una forma más eficiente."
          imgSrc="/images/login.svg"
          errors={errors}
        />
      </Box>
    </Container>
  );
};

export default Login;
