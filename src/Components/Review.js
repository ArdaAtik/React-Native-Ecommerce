import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "./Rating";
import Message from "../Components/Message";
import ButtonComp from "./ButtonComp";

function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Review
      </Heading>
      <Message
        color={Colors.black}
        bg={Colors.deepGray}
        size={14}
        bold
        children={"NO REVIEWS YET."}
      />
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Name
        </Heading>
        <Text my={2}>Jan 12 2022</Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={12}
          children={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, deserunt!"
          }
        />
      </Box>
      <Box mt={6}>
        <Heading fontSize={15} bold color={Colors.black}>
          ENTER A REVIEW
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                color: Colors.lightBlack,
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rating"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={4} />,
                justifyContent: "center",
                alignContent: "center",
              }}
              selectedValue={ratings}
              onValueChange={(val) => setRatings(val)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: Colors.lightBlack,
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              color={Colors.lightBlack}
              placeholder="Make a comment"
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            ></TextArea>
          </FormControl>
          <ButtonComp mb={4} bg={Colors.main} color={Colors.white}>
            SUBMIT
          </ButtonComp>
        </VStack>
      </Box>
    </Box>
  );
}

export default Review;
