import {
  Button,
  Divider,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { TbWorld } from "react-icons/tb";
import mailIcon from "../assets/icons/mail.png";
import youtubeIcon from "../assets/icons/youtube.png";
import facebookIcon from "../assets/icons/facebook.png";
import twitterIcon from "../assets/icons/twitter.png";
import instagramIcon from "../assets/icons/instagram.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import pinterestIcon from "../assets/icons/pinterest.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack w="100%" bg="#fafafa" pt="1rem">
        <HStack justifyContent="space-between" w="100%" px="10rem">
          <HStack gap="2rem">
            <VStack alignItems="flex-start" spacing={5}>
              <Text
                lineHeight="1.3"
                color="#ECAB55"
                fontSize=".75rem"
                fontWeight="700"
                letterSpacing=".75px"
                textTransform="uppercase"
              >
                OUR COMPANY
              </Text>
              <VStack
                lineHeight="1.3"
                letterSpacing={0}
                fontWeight="400"
                fontSize=".75rem"
                spacing={2}
                alignItems="flex-start"
              >
                <Link to="/about">About FreightCo</Link>
                <Link to="/our-portfolio">Our Portfolio</Link>
                <Link to="/investor-relations">Investor Relations</Link>
                <Link to="/careers">Careers</Link>
              </VStack>
            </VStack>
            <VStack alignItems="flex-start" pt="2.3rem">
              <VStack
                lineHeight="1.3"
                letterSpacing={0}
                fontWeight="400"
                fontSize=".75rem"
                spacing={2}
                alignItems="flex-start"
              >
                <Link to="/blog">FreightCo Blog</Link>
                <Link to="/corporate-responsibility">
                  Corporate Responsibility
                </Link>
                <Link to="/newsroom">Newsroom</Link>
                <Link to="/contact-us">Contact Us</Link>
              </VStack>
            </VStack>
            <VStack alignItems="flex-start" spacing={5}>
              <Text
                lineHeight="1.3"
                color="#ECAB55"
                fontSize=".75rem"
                fontWeight="700"
                letterSpacing=".75px"
                textTransform="uppercase"
              >
                MORE FROM FREIGHTCO
              </Text>
              <VStack
                lineHeight="1.3"
                letterSpacing={0}
                fontWeight="400"
                fontSize=".75rem"
                spacing={2}
                alignItems="flex-start"
              >
                <Link to="/freightco-compatible">FreightCo Compatible</Link>
                <Link to="/freightco-developer-portal">
                  FreightCo Developer Portal
                </Link>
                <Link to="/freightco-logistics">FreightCo Logistics</Link>
                <Link to="/shoprunner">ShopRunner</Link>
              </VStack>
            </VStack>
          </HStack>
          <VStack alignItems="flex-start">
            <Text>LANGUAGE</Text>

            <HStack>
              <TbWorld size="1.5rem" />
              <Text>United States</Text>
            </HStack>
            <Menu>
              <MenuButton
                variant="outline"
                w="100%"
                border="1px solid black"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                English
              </MenuButton>
              <MenuList>
                <MenuItem>English</MenuItem>
                <MenuItem>Español</MenuItem>
                <MenuItem>Chinese</MenuItem>
              </MenuList>
            </Menu>
          </VStack>
        </HStack>

        <Stack px="10rem" w="100%">
          <Divider borderWidth="0.1rem" />
        </Stack>
        <HStack w="100%" px="10rem" py="2.5rem" gap="2rem">
          <Text
            lineHeight="1.3"
            color="#"
            fontSize=".75rem"
            fontWeight="700"
            letterSpacing=".75px"
            textTransform="uppercase"
          >
            FOLLOW FREIGHTCO
          </Text>
          <HStack>
            <Stack border="2.6px solid black" borderRadius="50%" p="0.25rem">
              <Image src={mailIcon} alt="mail icon" w="1.2rem" />
            </Stack>
            <Image src={facebookIcon} alt="facebook icon" w="2.3rem" />
            <Stack border="2.6px solid black" borderRadius="50%" p="0.25rem">
              <Image src={twitterIcon} alt="twitter icon" w="1.2rem" />
            </Stack>
            <Stack border="2.6px solid black" borderRadius="50%" p="0.15rem">
              <Image src={instagramIcon} alt="instagram icon" w="1.5rem" />
            </Stack>
            <Stack border="2.6px solid black" borderRadius="50%" p="0.15rem">
              <Image src={linkedinIcon} alt="linkedin icon" w="1.5rem" />
            </Stack>
            <Stack border="2.6px solid black" borderRadius="50%" p="0.25rem">
              <Image src={youtubeIcon} alt="youtube icon" w="1.2rem" />
            </Stack>
            <Stack border="2.6px solid black" borderRadius="50%" p="0.15rem">
              <Image src={pinterestIcon} alt="pinterest icon" w="1.5rem" />
            </Stack>
          </HStack>
        </HStack>
        <HStack
          w="100%"
          px="10rem"
          bg="#ECAB55"
          justifyContent="space-between"
          fontWeight="400"
          fontSize=".75rem"
          fontStyle="normal"
          letterSpacing="normal"
        >
          <Text>© FreightCo 1995-2024</Text>

          <HStack>
            <Button
              variant="unstyled"
              fontWeight="inherit"
              fontSize="inherit"
              fontStyle="inherit"
              letterSpacing="inherit"
            >
              Site Map
            </Button>
            <Divider
              orientation="vertical"
              borderColor="#000"
              borderWidth="0.05rem"
              h="1rem"
            />
            <Button
              fontWeight="inherit"
              fontSize="inherit"
              fontStyle="inherit"
              letterSpacing="inherit"
              variant="unstyled"
            >
              Terms of Use
            </Button>
            <Divider
              orientation="vertical"
              borderColor="#000"
              borderWidth="0.05rem"
              h="1rem"
            />

            <Button
              fontWeight="inherit"
              fontSize="inherit"
              fontStyle="inherit"
              letterSpacing="inherit"
              variant="unstyled"
            >
              Privacy & Security
            </Button>
            <Divider
              orientation="vertical"
              borderColor="#000"
              borderWidth="0.05rem"
              h="1rem"
            />

            <Button
              fontWeight="inherit"
              fontSize="inherit"
              fontStyle="inherit"
              letterSpacing="inherit"
              variant="unstyled"
            >
              Ad Choices
            </Button>
          </HStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Footer;
