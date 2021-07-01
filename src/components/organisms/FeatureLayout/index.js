import { Heading, Divider } from "@chakra-ui/react";
import { HeroLayout } from "src/components/molecules/HeroLayout";

const FeatureLayout = ({ title, features }) => {
  return (
    <>
      <Heading
        as="h1"
        m="10"
        textAlign="center"
        fontSize="20px"
        fontWeight="bold"
        color="primary"
      >
        {title}
      </Heading>
      <Divider orientation="horizontal" my="10px" />
      {features.map((f) => {
        return (
          <HeroLayout
            key={f.title}
            imgSrc={f.imgSrc}
            imgAlt={f.imgAlt}
            title={f.title}
            desc={f.desc}
          />
        );
      })}
    </>
  );
};

export default FeatureLayout;
