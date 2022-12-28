import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  ScrollView,
  Text,
  View,
} from "native-base";
import Colors from "../color";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import ButtonComp from "../Components/ButtonComp";
import { useNavigation } from "@react-navigation/native";

function CartScreen() {
  const navigation = useNavigation();

  const [cart, setCart] = useState(["shop"]);
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {cart.length == 0 ? (
        <>
          <CartEmpty />
        </>
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CartItems />
            <Center mt={5}>
              <HStack
                rounded={50}
                justifyContent="space-between"
                bg={Colors.white}
                shadow={2}
                pl={5}
                h={45}
                w="90%"
                alignItems="center"
              >
                <Text>Total</Text>
                <Button
                  _pressed={{
                    bg: Colors.main,
                  }}
                  _text={{
                    color: Colors.white,
                    fontWeight: "semibold",
                  }}
                  px={10}
                  h={45}
                  rounded={50}
                  bg={Colors.main}
                  bold
                >
                  $123
                </Button>
              </HStack>
            </Center>
            <Center px={5}>
              <ButtonComp
                bg={Colors.black}
                color={Colors.white}
                mt={10}
                onPress={() => navigation.navigate("Shipping")}
              >
                CHECK OUT
              </ButtonComp>
            </Center>
          </ScrollView>
        </>
      )}
    </Box>
  );
}

export default CartScreen;
