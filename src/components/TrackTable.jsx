import React from "react";
import { Package } from "lucide-react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";

export default function TrackTable({ trackingData }) {
  return (
    <Box w="100%" mx="auto" p={4}>
      <Flex align="center" mb={4} gap={2}>
        <Icon as={Package} boxSize={6} color="purple.600" />
        <Heading as="h2" size="md">
          Tracking Details
        </Heading>
      </Flex>

      <Box overflowX="auto">
        <Table variant="simple" size="sm">
          <Thead bg="gray.50">
            <Tr>
              <Th>Date/Time</Th>
              <Th>Activity</Th>
              <Th>Location</Th>
            </Tr>
          </Thead>
          <Tbody>
            {trackingData.map((entry, index) => (
              <Tr key={index} _hover={{ bg: "gray.50" }}>
                <Td>
                  <Text fontWeight="medium">
                    {entry.date} - {entry.day}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {entry.time}
                  </Text>
                </Td>
                <Td>{entry.activity}</Td>
                <Td>{entry.location}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
