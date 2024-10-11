import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ViewBillOfLading = ({ data, handleChange, handleSubmit }) => {
  return (
    <>
      <VStack pt="1rem">
        <Link to="/login">
          <Text
            color="#007ab7"
            fontSize=".875rem"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing=".05em"
            boxShadow="0 0"
            transition="all cubic-bezier(.23,1,.32,1) .2s"
          >
            LOGIN TO ACCESS BILL OF LADING
          </Text>
        </Link>
      </VStack>
    </>
  );
};

export default ViewBillOfLading;
