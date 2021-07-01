import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FormItem = ({ placeholder, inputType, values, onChange, name }) => {
  return (
    <FormControl isRequired id={name}>
      <FormLabel>{placeholder}</FormLabel>
      <Input
        name={name}
        placeholder={placeholder}
        type={inputType}
        value={values[name]}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default FormItem;
