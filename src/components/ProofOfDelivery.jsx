import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ViewProofOfDelivery from "./ViewProofOfDelivery";
import ViewBillOfLading from "./ViewBillOfLading";

const ProofOfDelivery = ({ data, handleChange, handleSubmit, isLoading }) => {
  const [proofMethod, setProofMethod] = useState("delivery");

  const methodComponents = {
    delivery: ViewProofOfDelivery,
    bill: ViewBillOfLading,
  };

  const MethodComponent = methodComponents[proofMethod] || ViewProofOfDelivery;

  return (
    <>
      <VStack w="53vw">
        <Text
          noOfLines={3}
          textAlign="center"
          fontWeight="300"
          fontSize="1.25rem"
          color="#333"
        >
          View your proof of delivery, including an image of the recipient’s
          signature for FreightCo Express, FreightCo Ground and FreightCo
          Freight shipments. You can also get a copy of your FreightCo Freight
          bill of lading.
        </Text>

        <HStack w="100%" gap="0">
          {["delivery", "bill"].map((method) => (
            <Button
              key={method}
              borderRadius="0"
              borderBottom={proofMethod === method && "4px solid #ECAB55"}
              py="1.5rem"
              w="50%"
              variant="unstyled"
              display="flex"
              alignItems="center"
              onClick={() => setProofMethod(method)}
            >
              {method === "delivery"
                ? "View proof of delivery"
                : "View bill of lading"}
            </Button>
          ))}
        </HStack>

        <MethodComponent
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </VStack>
    </>
  );
};

export default ProofOfDelivery;
