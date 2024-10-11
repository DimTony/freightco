import {
  Button,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  Stepper,
  StepStatus,
  Text,
  Tooltip,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Example from "./Example";
import { ChevronDownIcon } from "@chakra-ui/icons";
import TrackingTable from "./TrackingTable";
import TrackTable from "./TrackTable";
import { formatShipDate } from "../utils/Functions";

const FetchedData = ({ fetchedData, handleCancelShipment }) => {
  return (
    <>
      <VStack w="100%" px="10rem">
        <HStack w="100%" justifyContent="space-between">
          <VStack alignItems="flex-start">
            <VStack alignItems="flex-start">
              <Text>Ship date:</Text>
              <Text>{formatShipDate(fetchedData.shipDate)}</Text>
            </VStack>
            <Divider borderWidth="0.1rem" />
            <Text textTransform="uppercase">{fetchedData.from}</Text>
          </VStack>
          <VStack w="50%">
            <Example fetchedData={fetchedData} />
            <VStack spacing={0}>
              <Text
                fontWeight="700"
                fontSize="1rem"
                lineHeight="1.5"
                textTransform="uppercase"
                letterSpacing="1px"
                color="#ECAB55"
              >
                {fetchedData.currentStep === 1 && "Pick Up"}
                {fetchedData.currentStep === 2 && "Dispatched"}
                {fetchedData.currentStep === 3 && "In Transit"}
                {fetchedData.currentStep === 4 && "Delivered"}
              </Text>
              <Text textTransform="uppercase">
                {fetchedData.currentLocation}
              </Text>
            </VStack>
          </VStack>
          <VStack alignItems="flex-start">
            <VStack alignItems="flex-start">
              <Text>Scheduled delivery:</Text>
              <Text>{formatShipDate(fetchedData.deliveryDate)}</Text>
            </VStack>
            <Divider borderWidth="0.1rem" />
            <Tooltip label={fetchedData.to} aria-label="Full Address">
              <Text w="244px" textTransform="uppercase" isTruncated>
                {fetchedData.to}
              </Text>
            </Tooltip>
          </VStack>
        </HStack>
        <Divider borderWidth="0.1rem" my="0.5rem" />
        <HStack w="100%" justifyContent="space-between">
          <VStack alignItems="flex-start">
            <Text
              lineHeight="1"
              fontWeight="700"
              fontSize=".75rem"
              letterSpacing="1px"
            >
              Tracking ID
            </Text>
            <Text
              lineHeight="1.3"
              fontWeight="400"
              fontSize="1rem"
              textTransform="uppercase"
            >
              {fetchedData._id}
            </Text>
          </VStack>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Request Notication</MenuItem>
              <MenuItem isDisabled={fetchedData.currentStep !== 4}>
                Obtain Proof of Delivery
              </MenuItem>
              <MenuItem onClick={handleCancelShipment}>
                Cancel Shipment Delivery
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Divider borderWidth="0.1rem" my="0.5rem" />
        <TrackTable trackingData={fetchedData.trackingData} />
      </VStack>
    </>
  );
};

export default FetchedData;
