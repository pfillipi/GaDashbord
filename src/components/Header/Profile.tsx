import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Fillipi Pereira</Text>
          <Text color="gray.300" fontSize="small">
            pfillipi@gmx.de
            </Text>
        </Box>
      )}

      <Avatar size="md" name="Fillipi Pereira" src="https://github.com/pfillipi.png" />
    </Flex>
  );
}