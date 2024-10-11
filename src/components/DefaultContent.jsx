import React from "react";
import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import deliveryManagerPic from "../assets/images/delivery-manager.jpg";
import understandingTrackingPic from "../assets/images/guide.jpg";
import boxPic from "../assets/images/box.svg";
import screenPic from "../assets/images/screen.svg";

const DefaultContent = () => {
  return (
    <>
      <VStack>
        <HStack w="75vw" bg="#fafafa" pl="2rem" gap="3rem" mb="7rem">
          <VStack alignItems="flex-start" gap="1.5rem">
            <Text
              fontWeight="300"
              lineHeight="1.3"
              letterSpacing="-0.4px"
              fontSize="2rem"
              color="#333"
            >
              Bring on the benefits
            </Text>
            <Text>
              Sign up for FreightCo Delivery Manager and take more control of
              deliveries. Get tracking notifications, provide delivery
              instructions and requests, and more. Plus, you'll be eligible for
              a free ShopRunner® membership and all the perks that come with it.
            </Text>

            <Button variant="link" color="#0F7AB7">
              GET FREIGHTCO DELIVERY MANAGER FOR FREE
            </Button>
          </VStack>

          <Image
            src={deliveryManagerPic}
            alt="delivery manager"
            w="426.79px"
            h="271.8px"
          />
        </HStack>

        <HStack w="75vw" bg="#fafafa" pr="2rem" gap="3rem" mb="7rem">
          <Image
            src={understandingTrackingPic}
            alt="delivery manager"
            w="426.79px"
            h="271.8px"
          />

          <VStack alignItems="flex-start" gap="1.5rem">
            <Text
              fontWeight="300"
              lineHeight="1.3"
              letterSpacing="-0.4px"
              fontSize="2rem"
              color="#333"
            >
              Guide for tracking and managing your deliveries
            </Text>
            <Text>
              Not sure what the tracking status means or have questions about
              your expected package? Learn how to track, manage, and return your
              home deliveries with this helpful guide.
            </Text>

            <Button variant="link" color="#0F7AB7">
              UNDERSTANDING TRACKING TERMINOLOGY
            </Button>
          </VStack>
        </HStack>

        <HStack w="75vw" bg="#fafafa" p="1.5rem" gap="3rem" mb="3rem">
          <Image src={boxPic} alt="box" />

          <VStack alignItems="flex-start" gap="1rem">
            <Text
              fontWeight="300"
              lineHeight="1.3"
              letterSpacing="-0.4px"
              fontSize="2rem"
            >
              Take the stress out of holiday shipping
            </Text>
            <Text
              fontWeight="300"
              fontSize="1rem"
              lineHeight="1.5"
              letterSpacing="-0.1px"
              w="80%"
            >
              From package visibility to delivery flexibility, find tools that
              can help make the season bright.
            </Text>

            <Button variant="link" color="#0F7AB7">
              EXPLORE SHIPPING RESOURCES
            </Button>
          </VStack>
        </HStack>

        <HStack w="75vw" bg="#fafafa" p="1.5rem" gap="3rem" mb="3rem">
          <Image src={screenPic} alt="box" />

          <VStack alignItems="flex-start" gap="1rem">
            <Text
              fontWeight="300"
              lineHeight="1.3"
              letterSpacing="-0.4px"
              fontSize="2rem"
            >
              Get a handle on holiday deliveries
            </Text>
            <Text
              fontWeight="300"
              fontSize="1rem"
              lineHeight="1.5"
              letterSpacing="-0.1px"
              w="80%"
            >
              Expecting lots of packages this season? Track them with FreightCo
              Delivery Manager®. You’ll know exactly when your package arrives
              and get a picture showing where your driver left it.
            </Text>

            <Button variant="link" color="#0F7AB7">
              SIGN UP FOR FREIGHTCO DELIVERY MANAGER
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default DefaultContent;
