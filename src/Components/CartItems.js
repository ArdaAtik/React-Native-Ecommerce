import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from "../color";
import products from "../data/Products";
import { FontAwesome } from "@expo/vector-icons";
const Swiper = () => (
  <SwipeListView
    nestedScrollEnabled={true}
    rightOpenValue={-50}
    previewRowKey={"0"}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products}
    renderItem={renderItems}
    renderHiddenItem={renderHiddenItems}
    showsVerticalScrollIndicator={false}
  />
);

const renderItems = (data) => {
  return (
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems="center"
          bg={Colors.white}
          shadow={1}
          rounded={10}
          overflow="hidden"
        >
          <Center w="25%" bg={Colors.white}>
            <Image
              resizeMode="center"
              h={24}
              w="full"
              source={{ uri: data.item.image }}
              alt={data.item.name}
            />
          </Center>
          <VStack w="60%" px={2} space={2}>
            <Text isTruncated color={Colors.black} bold fontSize={12}>
              data.item.name
            </Text>
            <Text bold color={Colors.lightBlack}>
              ${data.item.price}
            </Text>
          </VStack>
          <Center>
            <Button
              bg={Colors.main}
              _pressed={{
                bg: Colors.main,
              }}
              _text={{
                color: Colors.white,
              }}
            >
              5
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );
};

const renderHiddenItems = () => {
  return (
    <Pressable
      w={50}
      roundedTopRight={10}
      roundedBottomRight={10}
      h="88%"
      ml="auto"
      justifyContent="center"
      bg={Colors.red}
    >
      <Center alignItems="center" space={2}>
        <FontAwesome name="trash" size={24} color={Colors.white} />
      </Center>
    </Pressable>
  );
};

const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItems;
