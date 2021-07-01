import Head from "next/head";
import { AuthContext } from "src/context/userAuth";
import { useContext } from "react";
import List from "src/components/molecules/Courses/List";
import { features } from "src/utils/landingPageFeatures";
import FeatureLayout from "src/components/organisms/FeatureLayout";
import { Container } from "@chakra-ui/react";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <Container maxW="container.sm">
        {!user ? (
          <FeatureLayout
            title={"Para empezar a aprender crea una cuenta e inicia sesion"}
            features={features}
          />
        ) : (
          <List />
        )}
      </Container>
    </>
  );
}
