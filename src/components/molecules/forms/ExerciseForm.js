import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";
import { subjectsList } from "src/utils/subjectsList";

const ExerciseForm = ({ type, handleOnChange, handleSubmit }) => {
  return type === "exercise" ? (
    <form onSubmit={handleSubmit}>
      <FormControl id="subject">
        <FormLabel>Materia</FormLabel>
        <Select
          name="subject"
          placeholder="Seleccionar una materia"
          onChange={handleOnChange}
        >
          {subjectsList.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>
      </FormControl>

      <FormControl id="exam">
        <FormLabel>Parcial</FormLabel>
        <Select
          name="exam"
          placeholder="Seleccionar parcial"
          onChange={handleOnChange}
        >
          <option value={1}>Primer parcial</option>
          <option value={2}>Segundo parcial</option>
        </Select>
      </FormControl>

      <FormControl id="header">
        <FormLabel>Encabezado</FormLabel>
        <Input name="header" type="text" onChange={handleOnChange} />
      </FormControl>

      <Button type="submit" variant="outline" colorScheme="black">
        Crear ejercicio
      </Button>
    </form>
  ) : (
    <form onSubmit={handleSubmit}>
      <FormControl id="header">
        <FormLabel>Encabezado</FormLabel>
        <Input name="header" type="text" onChange={handleOnChange} />
      </FormControl>

      <FormControl id="exam">
        <FormLabel>Estatus</FormLabel>
        <Select
          name="status"
          onChange={handleOnChange}
          placeholder="Seleccionar verdadero o falso"
        >
          <option value={true}>Verdadero</option>
          <option value={false}>Falso</option>
        </Select>
      </FormControl>

      <Button
        w="100%"
        my="10px"
        type="submit"
        variant="outline"
        colorScheme="black"
      >
        Añadir
      </Button>
    </form>
  );
};

export default ExerciseForm;
