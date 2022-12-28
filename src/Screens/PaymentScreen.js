import React from "react";
import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  View,
  VStack,
} from "native-base";
import Colors from "../color";
import ButtonComp from "../Components/ButtonComp";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const paymentMethods = [
  {
    image: require("../../assets/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/discover.png"),
    alt: "discover",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/google.png"),
    alt: "googlepay",
    icon: "fontAwesome",
  },
];
function PaymentScreen() {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          SELECT PAYMENT METHOD
        </Text>
      </Center>
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((method, index) => (
              <>
                <HStack
                  key={index}
                  alignItems="center"
                  bg={Colors.white}
                  px={3}
                  py={1}
                  rounded={10}
                  justifyContent="space-between"
                >
                  <Box>
                    <Image
                      h={50}
                      w={60}
                      resizeMode="contain"
                      alt={method.alt}
                      source={method.image}
                    />
                    <Spacer />
                  </Box>
                  {method.icon === "Ionicons" ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color={Colors.main}
                      />
                    </>
                  ) : (
                    <>
                      <FontAwesome
                        name="circle-thin"
                        size={30}
                        color={Colors.main}
                      />
                    </>
                  )}
                </HStack>
              </>
            ))}

            <ButtonComp
              onPress={() => navigation.navigate("Placeorder")}
              bg={Colors.main}
              color={Colors.white}
              mt={5}
            >
              CONTINUE
            </ButtonComp>
            <Text italic textAlign="center">
              Payment method is
              <Text bold> Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
