import {
  Box,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/images/freightco-high-resolution-logo-black-transparent.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <HStack bg="#ECAB55" h="4rem" px="2rem" justifyContent="space-between">
        <Image src={logo} alt="freightco logo" w="3rem" h="auto" />
        <HStack gap="3rem">
          <Menu>
            <MenuButton
              variant="unstyled"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Tracking
            </MenuButton>
            <MenuList>
              <MenuItem>Advanced Shipment Tracking</MenuItem>
              <MenuItem>Manage Your Delivery</MenuItem>
            </MenuList>
          </Menu>

          <Button variant="ghost" rightIcon={<FaRegUserCircle size="1.5rem" />}>
            Sign Up or Log In
          </Button>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
