import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaLock, FaRocket } from "react-icons/fa";

const Feature = ({ title, icon, children }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }} align="center">
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("blue.500", "blue.300")} mb={1}>
        {icon}
      </Flex>
      <Box ml={4}>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.600"}>{children}</Text>
      </Box>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"5xl"} py={12}>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }}>
        <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Make work easier with <br />
          <Text as={"span"} color={"blue.400"}>
            Our SaaS Solution
          </Text>
        </Heading>
        <Text color={"gray.500"}>Our comprehensive suite of software solutions will streamline your workflow, improve productivity, and ensure security.</Text>
        <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
          <Button
            colorScheme={"blue"}
            bg={"blue.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "blue.500",
            }}
            rightIcon={<FaArrowRight />}
          >
            Get Started
          </Button>
          <Text fontSize={"lg"} color={"gray.600"}>
            No credit card required
          </Text>
          <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNvZnR3YXJlfGVufDB8fHx8MTcwOTczMzQwNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Screenshot of SaaS product" maxW={"3xl"} mt={10} rounded="lg" shadow="2xl" />
        </Stack>
      </Stack>

      <Box py={12}>
        <VStack spacing={2} textAlign={"center"}>
          <Heading as="h3" fontSize={"2xl"}>
            Trusted by companies worldwide
          </Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            Our clients experience a measurable improvement in efficiency, effectiveness, and compliance.
          </Text>
        </VStack>
      </Box>

      <Flex wrap={"wrap"} spacing={8} justify={"center"}>
        <Feature icon={<FaLock size={"3em"} />} title={"Secure"}>
          Industry-standard encryption to ensure your data is protected.
        </Feature>
        <Feature icon={<FaCloud size={"3em"} />} title={"Cloud-Based"}>
          Access your work from anywhere, at any time.
        </Feature>
        <Feature icon={<FaRocket size={"3em"} />} title={"Performance"}>
          Blazing fast speeds to improve your team's efficiency.
        </Feature>
      </Flex>
    </Container>
  );
};

export default Index;
