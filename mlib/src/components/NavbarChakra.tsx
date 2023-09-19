"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Logo } from "./Logo";
import BookModal from "./AddBookModal";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface Props {
  children: React.ReactNode;
  link: string
}

const NavLink = (props: Props) => {
  const { children, link } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      href={link}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Box>
  );
};


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        borderRadius="20px"
        marginTop="20px"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Logo />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink link="/">Home</NavLink>
              <NavLink link="/finished">Finished</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <BookModal />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
