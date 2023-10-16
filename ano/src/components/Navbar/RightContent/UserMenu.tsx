import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  MenuDivider,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";

import { VscAccount } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { auth } from "@/firebase/clientApp";

type Props = {
  user?: User | null;
};

const UserMenu = ({ user }: Props) => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        _hover={{ outline: "3px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon fontSize={24} mr={1} color="gray.300" as={VscAccount} />
                <Flex>User Name</Flex>
                <ChevronDownIcon />
              </>
            ) : (
              <div></div>
            )}
          </Flex>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem fontSize="10pt" fontWeight={700}>
          <Flex align="center">
            <Icon fontSize={20} mr={2} as={CgProfile} />
            Profile
          </Flex>
          <MenuDivider />
        </MenuItem>
        <MenuItem
          fontSize="10pt"
          fontWeight={700}
          onClick={() => {
            signOut(auth);
          }}
        >
          <Flex align="center">
            <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
            Log Out
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
