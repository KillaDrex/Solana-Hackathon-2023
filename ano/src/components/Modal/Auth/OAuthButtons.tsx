import { Flex, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

const OAuthButtons = () => {
  const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        width="100%"
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => {
          SignInWithGoogle();
        }}
      >
        <Image src="googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button width="100%" variant="oauth">
        Others
      </Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};

export default OAuthButtons;
