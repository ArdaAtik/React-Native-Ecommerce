import { Text, Box, ScrollView, VStack, FormControl, Input } from "native-base";
import React from "react";
import Colors from "../../color";
import ButtonComp from "../../Components/ButtonComp";

const Profile = () => {
  const Inputs = [
    {
      label: "USERNAME",
      type: "text",
    },
    {
      label: "EMAIL",
      type: "text",
    },
    {
      label: "NEW PASSWORD",
      type: "password",
    },
    {
      label: "CONFIRM PASSWORD",
      type: "password",
    },
  ];

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  color: Colors.lightBlack,
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                borderWidth={0}
                bg={Colors.subGreen}
                borderColor={Colors.main}
                py={3}
                type={i.type}
                color={Colors.main}
                fontSize={20}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 2,
                }}
              />
            </FormControl>
          ))}
          <ButtonComp bg={Colors.main} color={Colors.white}>
            UPDATE PROFILE
          </ButtonComp>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
