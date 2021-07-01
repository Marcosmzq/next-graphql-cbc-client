import { Center, SimpleGrid } from "@chakra-ui/react";
import { FormSide } from "./FormSide";
import { ImgSide } from "./ImgSide";

export const AccessLayout = ({
  imgSrc,
  imgAlt,
  title,
  formFieldsArr,
  formBtnText,
  formOnSubmit,
  errors,
  loading,
}) => {
  return (
    <Center p={2}>
      <SimpleGrid columns={[1, 2]} spacing="60px">
        <ImgSide imgSrc={imgSrc} imgAlt={imgAlt} title={title} />
        <FormSide
          errors={errors}
          formFieldsArr={formFieldsArr}
          formBtnText={formBtnText}
          formOnSubmit={formOnSubmit}
          loading={loading}
        />
      </SimpleGrid>
    </Center>
  );
};
