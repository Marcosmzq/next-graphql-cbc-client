import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const ColorModeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return colorMode === "light" ? (
    <IconButton
      onClick={toggleColorMode}
      variant="outline"
      colorScheme="black"
      borderRadius="5%"
      icon={<MoonIcon />}
    />
  ) : (
    <IconButton
      onClick={toggleColorMode}
      variant="outline"
      colorScheme="black"
      borderRadius="5%"
      icon={<SunIcon />}
    />
  );
};

export default ColorModeBtn;
