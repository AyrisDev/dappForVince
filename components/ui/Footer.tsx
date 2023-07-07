import React from "react";
import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Link,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
const Footer = () => {
  return (
    <div>
      <Box mb={3}>
        <Divider />
      </Box>
      <Stack
        isInline={true}
        spacing={1}
        justifyContent="center"
        opacity={0.5}
        fontSize="sm">
        <Text>Built by </Text>
        <Link
          href="https://ayris.dev/"
          target="_blank"
          rel="noopener noreferrer">
          Ayris.Dev
        </Link>
        <Text>with</Text>
        <Link
          href="https://cosmology.tech/"
          target="_blank"
          rel="noopener noreferrer">
          Cosmology
        </Link>
      </Stack>
    </div>
  );
};

export default Footer;
