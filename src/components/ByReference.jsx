import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  commonFormStyles,
  commonSelectFormStyles,
  commonTextStyles,
  countries,
  TrackingForm,
} from "../utils/Constants";

const ByReference = ({ data, handleChange, handleSubmit, isLoading }) => {
  return (
    <>
      <VStack w="53vw">
        <Text {...commonTextStyles}>
          Enter your reference number or purchase order numbers.
        </Text>

        <TrackingForm
          handleSubmit={handleSubmit}
          isDisabled={!data.referenceNumber || !data.referenceCountry}
          isLoading={isLoading}
        >
          <FormControl isRequired>
            <FormLabel>Reference number</FormLabel>
            <Input
              {...commonFormStyles}
              type="text"
              name="referenceNumber"
              value={data.referenceNumber}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Destination country/territory</FormLabel>
            <Select
              {...commonSelectFormStyles}
              name="referenceCountry"
              value={data.referenceCountry}
              onChange={handleChange}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </TrackingForm>
      </VStack>
    </>
  );
};

export default ByReference;
