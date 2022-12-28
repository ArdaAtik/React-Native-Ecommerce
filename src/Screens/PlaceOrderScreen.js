import React from "react";
import { Box, ScrollView, Text, View } from "native-base";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

function PlaceOrderScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen} pt={6}>
      <Box>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Username"
            text="user@example.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="ORDER INFO"
            subTitle="Shipping : Turkey"
            text="Pay Method : PayPal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle="Address: "
            text="Arda Atik , Yunusemre Muradiye , Manisa 45000 "
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PlaceOrderScreen;
