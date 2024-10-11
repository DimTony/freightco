// StepperComponent.js
import React from "react";
import {
  Box,
  Progress,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  useSteps,
} from "@chakra-ui/react";
import { FaTruck, FaShippingFast, FaRoad, FaCheckCircle } from "react-icons/fa";
import { LuPackagePlus } from "react-icons/lu";
import { LuPackageCheck } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FcShipped } from "react-icons/fc";

const steps = [
  { title: "Pickup", description: "Package Picked Up" },
  { title: "Dispatch", description: "Package Sent Out" },
  { title: "Transit", description: "Package In Transit" },
  { title: "Delivered", description: "Package Delivered" },
];

export function Example({ fetchedData }) {
  // Use fetchedData.currentStep to set the active step
  const currentStep = fetchedData.currentStep;
  const { activeStep, setActiveStep } = useSteps({
    index: currentStep - 1, // Ensure index is zero-based
    count: steps.length,
  });

  //   const activeStepText = steps[activeStep].description;
  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  const getStepIcon = (index) => {
    switch (index) {
      case 0:
        return <LuPackagePlus />; // Icon for Pickup
      case 1:
        return <LuPackageCheck />; // Icon for Dispatch
      case 2:
        return <LiaShippingFastSolid />; // Icon for Transit
      case 3:
        return <FcShipped />; // Icon for Delivered
      default:
        return <StepIcon />; // Default icon if none matches
    }
  };

  return (
    <Box position="relative" w="100%">
      <Stepper size="sm" index={activeStep} gap="0">
        {steps.map((step, index) => (
          <Step key={index} gap="0">
            <StepIndicator bg="white">
              {/* <StepStatus complete={<StepIcon />} /> */}
              <StepStatus
                complete={getStepIcon(index)} // Use the custom icon for completed steps
                incomplete={getStepIcon(index)} // Use the custom icon for incomplete steps
                active={getStepIcon(index)} // Use the custom icon for active steps
              />
            </StepIndicator>
          </Step>
        ))}
      </Stepper>
      <Progress
        value={progressPercent}
        position="absolute"
        height="3px"
        width="full"
        top="10px"
        zIndex={-1}
      />
    </Box>
  );
}

export default Example;
