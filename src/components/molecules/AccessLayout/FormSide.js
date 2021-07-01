import { Box } from "@chakra-ui/react";
import Form from "src/components/molecules/forms";
import DisplayErrors from "src/components/molecules/DisplayErrors";

export const FormSide = ({
  formBtnText,
  formFieldsArr,
  formOnSubmit,
  errors,
  loading,
}) => {
  return (
    <Box>
      <Form
        btnText={formBtnText}
        fields={formFieldsArr}
        onSubmit={formOnSubmit}
        loading={loading}
      />
      {errors && Object.keys(errors).length > 0 ? (
        <DisplayErrors errors={errors} />
      ) : (
        ""
      )}
    </Box>
  );
};
