import React, { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
} from "native-base";
import Colors from "../color";
import Rating from "../Components/Rating";
import Review from "../Components/Review";
import ButtonComp from "../Components/ButtonComp";
import NumericInput from "react-native-numeric-input";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          alt="Image"
          w="full"
          resizeMode="contain"
          h={300}
          source={{ uri: product.image }}
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            onChange={(e) => console.log(e)}
            textColor={Colors.black}
            iconStyle={{ color: Colors.white, fontSize: 16 }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
            step={1}
            rounded
            borderColor={Colors.main}
            maxValue={product.countInStock}
            minValue={0}
            iconSize={25}
            value={value}
            totalWidth={140}
            totalHeight={30}
          />
          <Spacer />
          <Heading bold colr={Colors.black} fontSize={19}>
            ₺{product.price}
          </Heading>
        </HStack>

        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <ButtonComp
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}
        >
          Add To Cart
        </ButtonComp>
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
