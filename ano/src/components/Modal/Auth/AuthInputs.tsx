import { AuthModalState } from "@/atoms/authModalAtom";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

type Props = {};

const AuthInputs = (props: Props) => {
  const modalState = useRecoilValue(AuthModalState);
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <SignUp />}
    </Flex>
  );
};

export default AuthInputs;
