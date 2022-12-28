import React, { useState } from "react";
import { Box, Button, Heading, Image, Input, Text, VStack } from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("Bottom");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.jpg")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px={6}
        justifyContent="center"
      >
        <Heading>LOGIN</Heading>
        <VStack space={8} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="*********"
            type="password"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.black,
          }}
          _text={{
            color: Colors.white,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.black}
          onPress={() => {
            signIn();
          }}
        >
          LOGIN
        </Button>
        <Pressable
          mt={4}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text color={Colors.black} bold>
            SIGN UP
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
