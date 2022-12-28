import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import products from "../data/Products";
import Colors from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

function HomeProducts() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, "products");
    onSnapshot(usersQuery, (snapshot) => {
      let usersList = [];
      snapshot.docs.map((doc) => usersList.push({ ...doc.data() }));
      setProducts(usersList);
      setLoading(false);
    });
  }, []);
  return (
    !loading && (
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex
          flexWrap="wrap"
          direction="row"
          justifyContent="space-between"
          px={6}
        >
          {products.map((product) => (
            <Pressable
              onPress={() => navigation.navigate("Single", product)}
              key={product.id}
              w="47%"
              bg={Colors.white}
              rounded="md"
              shadow={2}
              pt={0.3}
              my={3}
              pb={2}
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                h={24}
                w="full"
                alt={product.name}
                source={{
                  uri: product.image,
                }}
              />
              <Box px={4} pt={1}>
                <Heading size="sm" bold>
                  ₺{product.price}
                </Heading>
                <Text fontSize={10} mt={1} isTrucated w="full">
                  {product.name}
                </Text>
                <Rating value={product.rating} />
              </Box>
            </Pressable>
          ))}
        </Flex>
      </ScrollView>
    )
  );
}

export default HomeProducts;
