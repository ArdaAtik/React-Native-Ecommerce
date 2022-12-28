import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "native-base";

import React, { useEffect, useState } from "react";
import Colors from "../color";
import { auth } from "../config/firebase";

const AuthDetails = () => {
  const navigation = useNavigation();

  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }

      return () => {
        listen();
      };
    });
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      {authUser ? (
        <>
          <Button
            _pressed={{ bg: Colors.lightBlack }}
            bg={Colors.lightBlack}
            bold
            onPress={userSignOut}
          >
            Sign Out
          </Button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default AuthDetails;
