import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  commonFormStyles,
  commonTextStyles,
  TrackingForm,
} from "../utils/Constants";

const ByTCN = ({ data, handleChange, handleSubmit, isLoading }) => {
  return (
    <>
      <VStack w="53vw">
        <Text {...commonTextStyles}>
          Enter your Transportation Control Number (TCN) for government orders.
          Do not use any spaces or the letters "TCN" preceding the number.
        </Text>

        <TrackingForm
          handleSubmit={handleSubmit}
          isDisabled={!data.tcn || !data.tcnShipDate}
          isLoading={isLoading}
        >
          <FormControl isRequired>
            <FormLabel>Enter TCN or tracking number</FormLabel>
            <Input
              {...commonFormStyles}
              type="text"
              name="tcn"
              value={data.tcn}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Ship date</FormLabel>
            <Input
              {...commonFormStyles}
              type="date"
              name="tcnShipDate"
              value={data.tcnShipDate}
              onChange={handleChange}
            />
            <FormHelperText mb={3}>
              Please enter the ship date if the package was shipped more than 14
              days ago.
            </FormHelperText>
          </FormControl>
        </TrackingForm>
      </VStack>
    </>
  );
};

export default ByTCN;
