import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { StakingSection } from "../components/staking/staking";

import React from "react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const chainName = "vincechain";

  return (
    <Container maxW="5xl" py={10}>
      <Head>
        <title>VinceChain Staking List</title>
        <meta name="description" content="Generated by create cosmos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="end" mb={4}>
        <Button variant="outline" px={0} onClick={toggleColorMode}>
          <Icon
            as={colorMode === "light" ? BsFillMoonStarsFill : BsFillSunFill}
          />
        </Button>
      </Flex>
      <Box textAlign="center">
        <Heading
          as="h1"
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          fontWeight="extrabold"
          mb={3}>
          VinceChain Staking List
        </Heading>
      </Box>

      <StakingSection chainName={chainName} />
    </Container>
  );
}
