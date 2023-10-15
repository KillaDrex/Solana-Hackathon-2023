"use client";
import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="#222222" height="60px" padding="12px 0px">
      <Flex align="center">
        <Image src="ano.svg" />
      </Flex>
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};

export default Navbar;
