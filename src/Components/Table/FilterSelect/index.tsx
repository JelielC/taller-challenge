import React from "react";
import { Box, BoxProps, Flex, Image, Text } from "@chakra-ui/react";

interface IFilterSelectProps extends BoxProps {
  children: string;
  title?: string;
  isRequired?: boolean;
  hasError?: boolean;
  isOpen?: boolean;
  primaryColor?: string;
}

export function FilterSelect({
  children,
  title,
  hasError,
  isRequired,
  isOpen = false,
  width = "280px",
  primaryColor,
  ...rest
}: IFilterSelectProps) {
  const isInvalid = children.toLowerCase().includes("selecione");
  const haveError = hasError && isRequired && isInvalid;
  return (
    <Box position="relative" {...rest} width={width}>
      {title && (
        <Text
          position="absolute"
          top="-6"
          fontSize="14px"
          fontWeight={400}
          color="neutral.600"
        >
          {title} {isRequired && <span style={{ color: "#D20101" }}>*</span>}
        </Text>
      )}
      <Flex
        className={rest.className}
        borderRadius="4px"
        height="40px"
        width={width}
        border={`1px solid ${haveError ? "#B2012D" : "#99A1B4"}`}
        alignItems="center"
      >
        <Text
          marginLeft="8px"
          fontSize="14px"
          color="neutral.dark"
          wordBreak="break-all"
          whiteSpace="normal"
          noOfLines={1}
          fontWeight={400}
        >
          {children}
        </Text>
      </Flex>
      {haveError && (
        <Text
          position="absolute"
          bottom="-5"
          fontSize="12px"
          fontWeight={500}
          color="error.medium"
        >
          O campo {title?.toLowerCase()} é obrigatório.
        </Text>
      )}
    </Box>
  );
}
