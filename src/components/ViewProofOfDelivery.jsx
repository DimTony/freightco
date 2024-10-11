import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  commonFormStyles,
  commonTextStyles,
  TrackingForm,
} from "../utils/Constants";

const ViewProofOfDelivery = ({
  data,
  handleChange,
  handleSubmit,
  isLoading,
}) => {
  return (
    <>
      <VStack w="53vw" pt="1rem">
        <Text {...commonTextStyles}>
          Enter up to 30 of your FreightCo tracking numbers
        </Text>

        <TrackingForm
          handleSubmit={handleSubmit}
          isDisabled={!data.trackingNumber}
          isLoading={isLoading}
        >
          <FormControl isRequired>
            <FormLabel>Tracking number</FormLabel>
            <Input
              {...commonFormStyles}
              type="text"
              name="trackingNumber"
              value={data.trackingNumber}
              onChange={handleChange}
            />
          </FormControl>
        </TrackingForm>
      </VStack>
    </>
  );
};

export default ViewProofOfDelivery;
