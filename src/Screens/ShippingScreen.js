import React from "react";
import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import Colors from "../color";
import ButtonComp from "../Components/ButtonComp";
import { useNavigation } from "@react-navigation/native";

const ShippingInput = [
  {
    label: "CITY",
    type: "text",
  },
  {
    label: "COUNTRY",
    type: "text",
  },
  {
    label: "POSTAL CODE",
    type: "text",
  },
  {
    label: "ADDRESS",
    type: "text",
  },
];

function ShippingScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInput.map((input, index) => (
              <>
                <FormControl key={index}>
                  <FormControl.Label
                    _text={{
                      fontSize: "12",
                      fontWeight: "bold",
                    }}
                  >
                    {input.label}
                  </FormControl.Label>
                  <Input
                    type={input.type}
                    borderWidth={0.2}
                    borderColor={Colors.main}
                    bg={Colors.subGreen}
                    py={4}
                    color={Colors.main}
                    _focus={{
                      bg: Colors.subGreen,
                      borderWidth: 1,
                      borderColor: Colors.main,
                    }}
                  />
                </FormControl>
              </>
            ))}
            <ButtonComp
              onPress={() => navigation.navigate("Checkout")}
              bg={Colors.main}
              color={Colors.white}
              mt={5}
            >
              CONTINUE
            </ButtonComp>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;
