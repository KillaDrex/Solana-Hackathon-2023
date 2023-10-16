import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "../../Modal/Auth/AuthModal";
import { User, signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import UserMenu from "./UserMenu";

type Props = {
  user?: User | null;
};

const RightContent = ({ user }: Props) => {
  return (
    <>
      <AuthModal />

      <Flex justify="center" align="center">
        {user ? <div></div> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};

export default RightContent;
