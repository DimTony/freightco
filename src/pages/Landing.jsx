import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ByTrackingNumber from "../components/ByTrackingNumber";
import ByReference from "../components/ByReference";
import ByTCN from "../components/ByTCN";
import ProofOfDelivery from "../components/ProofOfDelivery";
import DefaultContent from "../components/DefaultContent";
import FetchedData from "../components/FetchedData";
import Footer from "../components/Footer";
import axios from "axios";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trackBy, setTrackBy] = useState("number");
  const [fetchedData, setFetchedData] = useState(null);
  const [data, setData] = useState({
    trackingNumber: "",
    referenceNumber: "",
    referenceCountry: "",
    tcn: "",
    tcnShipDate: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: notifyIsOpen,
    onOpen: notifyOnOpen,
    onClose: notifyOnClose,
  } = useDisclosure();
  const toast = useToast();

  const isTrackingByNumber = trackBy === "number";
  const isTrackingByReference = trackBy === "reference";
  const isTrackingByTCN = trackBy === "tcn";
  const isProofOfDelivery = trackBy === "proof";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateFields = () => {
    switch (trackBy) {
      case "number":
        if (!data.trackingNumber.trim()) {
          toast({
            title: "Validation Error",
            description: "Please enter a tracking number",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          return false;
        }
        break;

      case "reference":
        if (!data.referenceNumber.trim() || !data.referenceCountry.trim()) {
          toast({
            title: "Validation Error",
            description: "Please enter both reference number and country",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          return false;
        }
        break;

      case "tcn":
        if (!data.tcn.trim() || !data.tcnShipDate.trim()) {
          toast({
            title: "Validation Error",
            description: "Please enter both TCN and ship date",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    setIsLoading(true);
    setFetchedData(null);

    try {
      let url;
      switch (trackBy) {
        case "number":
          url = `${import.meta.env.VITE_BASE_URL}/tracking/${
            data.trackingNumber
          }`;
          break;
        case "reference":
          url = `${import.meta.env.VITE_BASE_URL}/tracking/reference/${
            data.referenceNumber
          }/${data.referenceCountry}`;
          break;
        case "tcn":
          url = `${import.meta.env.VITE_BASE_URL}/tracking/tcn/${data.tcn}/${
            data.tcnShipDate
          }`;
          break;
        case "proof":
          // Add specific URL handling for proof of delivery if needed
          url = `${import.meta.env.VITE_BASE_URL}/tracking/${
            data.trackingNumber
          }`;
          break;
        default:
          throw new Error("Invalid tracking method");
      }

      // Simulate API delay (optional, can be removed)
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Axios API call
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check for a successful response
      if (response.status !== 200) {
        throw new Error("Request failed");
      }

      setFetchedData(response.data);

      toast({
        title: "Success",
        description: "Tracking information retrieved successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      console.log("Catch Error:", error);
      toast({
        title: "Error",
        description:
          "Failed to retrieve tracking information. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelShipment = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/tracking/${fetchedData._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Request failed");
      }

      setFetchedData(null);
      onOpen();
    } catch (error) {}
  };

  const renderTracker = () => {
    const commonProps = {
      data,
      handleChange,
      handleSubmit,
      isLoading,
    };

    switch (trackBy) {
      case "number":
        return <ByTrackingNumber {...commonProps} trackBy={trackBy} />;
      case "reference":
        return <ByReference {...commonProps} />;
      case "tcn":
        return <ByTCN {...commonProps} />;
      case "proof":
        return <ProofOfDelivery {...commonProps} />;
      default:
        return <ByTrackingNumber {...commonProps} trackBy={trackBy} />;
    }
  };

  const renderContent = () =>
    fetchedData ? (
      <FetchedData
        handleCancelShipment={handleCancelShipment}
        fetchedData={fetchedData}
        notifyOnOpen={notifyOnOpen}
      />
    ) : (
      <DefaultContent />
    );

  return (
    <>
      <Box>
        <Navbar />
        <VStack
          pt="1rem"
          pb="4rem"
          mb="3rem"
          overflowX="hidden"
          overflowY="auto"
          h="100vh"
        >
          {!fetchedData && (
            <VStack mb="2.5rem">
              <HStack gap={0}>
                <Button
                  bg={isTrackingByNumber ? "#ECAB55" : "#edf2f7"}
                  _hover={{ bg: isTrackingByNumber ? "#ECAB55" : "#C6CACE" }}
                  onClick={() => setTrackBy("number")}
                  borderRadius="0"
                >
                  Tracking number
                </Button>
                <Button
                  bg={isTrackingByReference ? "#ECAB55" : "#edf2f7"}
                  _hover={{ bg: isTrackingByReference ? "#ECAB55" : "#C6CACE" }}
                  onClick={() => setTrackBy("reference")}
                  borderRadius="0"
                >
                  Track by reference
                </Button>
                <Button
                  bg={isTrackingByTCN ? "#ECAB55" : "#edf2f7"}
                  _hover={{ bg: isTrackingByTCN ? "#ECAB55" : "#C6CACE" }}
                  onClick={() => setTrackBy("tcn")}
                  borderRadius="0"
                >
                  Tracking by TCN
                </Button>
                <Button
                  bg={isProofOfDelivery ? "#ECAB55" : "#edf2f7"}
                  _hover={{ bg: isProofOfDelivery ? "#ECAB55" : "#C6CACE" }}
                  onClick={() => setTrackBy("proof")}
                  borderRadius="0"
                >
                  Obtain proof of delivery
                </Button>
              </HStack>

              <Box>{renderTracker()}</Box>
            </VStack>
          )}
          <Divider borderWidth="0.2rem" mb="1rem" mx="1rem" />
          <VStack mb="2rem" w="100%">
            {renderContent()}
          </VStack>
          <Footer mb="3rem" />
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shipment Canceled</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Your shipment is being canceled. You will be notified of its
              return to sender.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={notifyIsOpen} onClose={notifyOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notification Enabled</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Notifications will be forwarded to the contact info on file.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Landing;
