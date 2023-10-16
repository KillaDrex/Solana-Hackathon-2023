"use client";
import React from "react";
import { Flex, Image, Spacer } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="#222222" height="60px" padding="12px 0px" justify="center">
      <Flex width={1300}>
        <Flex align="center">
          <Image src="ano.svg" width="100px" height="60px" />
        </Flex>
        <Spacer />
        <Flex width={836}>
          <SearchInput />
        </Flex>
        <Spacer />
        <Flex mr={10}>
          <RightContent user={user} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
