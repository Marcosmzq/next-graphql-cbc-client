import { VStack, StackDivider, Button } from "@chakra-ui/react";
import FormItem from "./FormItem";

const Form = ({ fields, btnText, onSubmit, loading }) => {
  const data = fields();
  return (
    <form onSubmit={onSubmit}>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {data.map((field, i) => {
          return (
            <FormItem
              key={i}
              placeholder={field.placeholder}
              inputType={field.inputType}
              values={field.values}
              onChange={field.onChange}
              name={field.name}
            />
          );
        })}
        {loading ? (
          <Button
            colorScheme="black"
            variant="outline"
            type="submit"
            isLoading
            loadingText="Loading"
          />
        ) : (
          <Button colorScheme="black" variant="outline" type="submit">
            {btnText}
          </Button>
        )}
      </VStack>
    </form>
  );
};

export default Form;
