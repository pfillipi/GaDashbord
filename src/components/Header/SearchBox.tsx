import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

// controlled components
// Uncontrolled components for

// Imperative vs Declarative

export function SearchBox() {
  // const [search, setSearch] = useState('')

  const searchInputRef = useRef<HTMLInputElement>(null)

  // searchInputRef.current.focus() (Imperative)

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth="400"
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Søk på plattform"
        _placeholder={{ color: 'gray.400' }}
        ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}