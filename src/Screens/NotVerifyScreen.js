import React from "react";
import { Box, Center, Image, VStack } from "native-base";
import Colors from "../color";
import ButtonComp from "../Components/ButtonComp";

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image alt="LOGO" size="lg" source={require("../../assets/logo.png")} />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <ButtonComp bg={Colors.black} color={Colors.white}>
          REGISTER
        </ButtonComp>
        <ButtonComp bg={Colors.white} color={Colors.black}>
          LOGIN
        </ButtonComp>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
