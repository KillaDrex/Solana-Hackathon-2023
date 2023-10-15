import { AuthModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";

const AuthButtons = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  return (
    <>
      <Button
        variant="solid"
        onClick={() =>
          setAuthModalState({
            open: true,
            view: "login",
          })
        }
      >
        Log in
      </Button>
    </>
  );
};

export default AuthButtons;
