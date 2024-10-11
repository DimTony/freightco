import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  commonFormStyles,
  commonTextStyles,
  TrackingForm,
} from "../utils/Constants";

const ByTrackingNumber = ({ data, handleChange, handleSubmit, isLoading }) => {
  return (
    <>
      <VStack w="53vw">
        <Text {...commonTextStyles}>
          Enter up to 30 of your FreightCo tracking, door tag, or FreightCo
          Office order numbers (one per line).
        </Text>

        {/* <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <VStack w="100%">
            <FormControl isRequired>
              <FormLabel>Training number</FormLabel>
              <Input
                w="100%"
                h="3rem"
                border="1px solid black"
                fontSize="1rem"
                paddingInlineStart=".5rem"
                bg="transparent"
                minW={0}
                outline={0}
                mb={3}
                type="text"
                name="trackingNumber"
                value={data.trackingNumber}
                onChange={handleChange}
              />
            </FormControl>

            <Button
              type="submit"
              w="10rem"
              boxShadow="0 0"
              borderColor="#e3e3e3"
              bg="#ECAB55"
              color="#000"
              fontSize="1.1875rem"
              fontWeight="700"
              lineHeight="1.3"
              textTransform="uppercase"
              paddingInline="1.5rem"
              transition="all cubic-bezier(.23, 1, .32, 1) .2s"
              isDisabled={!data.trackingNumber}
            >
              Track
            </Button>
          </VStack>
        </form> */}
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

export default ByTrackingNumber;
