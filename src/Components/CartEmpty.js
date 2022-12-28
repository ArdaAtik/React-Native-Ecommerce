import React from "react";
import { Box, Center, Text } from "native-base";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
import ButtonComp from "../Components/ButtonComp";

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <ButtonComp bg={Colors.black} color={Colors.white}>
        START SHOPPING
      </ButtonComp>
    </Box>
  );
};

export default CartEmpty;
