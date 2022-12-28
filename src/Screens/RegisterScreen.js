import React, { useState } from "react";
import { Box, Button, Heading, Image, Input, Text, VStack } from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

function RegisterScreen({ navigation }) {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const signUp = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        navigation.navigate("Bottom");
      })
      .catch((err) => {
        alert(err);
      });
  };

  function addUser() {
    const today = new Date();
    const userDb = collection(db, "users");
    try {
      addDoc(userDb, {
        username: user.username,
        email: user.email,
        password: user.password,
        date: today.toISOString().substring(0, 10),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
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
        <Heading>SIGN UP</Heading>
        <VStack space={8} pt="6">
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="John Doe"
            w="70%"
            pl={2}
            type="text"
            color={Colors.black}
            borderBottomColor={Colors.underline}
            value={user.username}
            onChangeText={(text) => setUser({ ...user, username: text })}
          />
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            type="email"
            color={Colors.black}
            borderBottomColor={Colors.underline}
            value={user.email}
            onChangeText={(text) => setUser({ ...user, email: text })}
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
            value={user.password}
            onChangeText={(text) => setUser({ ...user, password: text })}
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
            addUser();
            signUp();
          }}
        >
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.black} bold>
            LOGIN
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
