import { Box, Container } from "@chakra-ui/react";
import { AccessLayout } from "src/components/molecules/AccessLayout";
import { registerUserFormFieldsArr } from "src/utils/formsFields";
import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "src/graphql/userMutations";
import { useRouter } from "next/router";
import { AuthContext } from "src/context/userAuth";

const Register = () => {
  const router = useRouter();
  const { user, login } = useContext(AuthContext);
  const [errors, setErrors] = useState();
  const [registerUserValues, registerUserSetValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const handleOnChange = (e) => {
    registerUserSetValues({
      ...registerUserValues,
      [e.target.name]: e.target.value,
    });
  };
  const [addUser, { loading, data }] = useMutation(REGISTER_USER, {
    async update(_, { data: { register: userData } }) {
      await login(userData);
      router.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: registerUserValues,
  });
  if (data || user) {
    router.push("/");
  }
  return (
    <Container maxW="container.sm">
      <Box p={4}>
        <AccessLayout
          formFieldsArr={() =>
            registerUserFormFieldsArr({
              values: registerUserValues,
              onChange: handleOnChange,
            })
          }
          formOnSubmit={(e) => {
            e.preventDefault();
            addUser();
          }}
          formBtnText="Crear cuenta"
          loading={loading}
          title="Crea una cuenta para empezar. Es seguro, gratis y rápido!"
          imgAlt="Create an account is safe and free here"
          imgSrc="/images/secure-login.svg"
          errors={errors}
        />
      </Box>
    </Container>
  );
};

export default Register;
