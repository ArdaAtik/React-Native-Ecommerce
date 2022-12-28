import React, { useEffect, useState } from "react";
import { Center, Heading, Image, Text, View } from "native-base";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";
import AuthDetails from "../hooks/AuthDetails";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const currentAuth = getAuth();

function ProfileScreen() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, "users");
    onSnapshot(usersQuery, (snapshot) => {
      let usersList = [];
      snapshot.docs.map((doc) => usersList.push({ ...doc.data(), id: doc.id }));
      setUsers(usersList);
      setLoading(false);
    });
  }, []);
  const findUser = (email) => {
    users.map((user) =>
      user["email"] === email ? setCurrentUser(user) : console.log("")
    );
  };
  onAuthStateChanged(currentAuth, (user) => {
    if (user) {
      const email = user.email;
      findUser(email);
    }
  });
  return (
    <>
      {!loading && (
        <Center bg={Colors.main} pt={10} pb={6}>
          <Image
            borderWidth={8}
            borderColor={Colors.main}
            rounded="full"
            w={24}
            h={24}
            alt="profile"
            resizeMode="cover"
            source={{
              uri: "https://i.pinimg.com/736x/7b/8a/bb/7b8abb4b31114928e5456f671c72bbed.jpg",
            }}
          />
          <AuthDetails />
          <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
            {currentUser["username"]}
          </Heading>
          <Text italic fontSize={10} color={Colors.white}>
            Joined {currentUser["date"]}
          </Text>
        </Center>
      )}
      <Tabs />
    </>
  );
}

export default ProfileScreen;
