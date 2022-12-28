import { Button as ButtonAs } from "native-base";
import React from "react";

function ButtonComp({ mt, bg, color, children, onPress }) {
  return (
    <ButtonAs
      _text={{
        color: color,
        fontWeight: "bold",
      }}
      _pressed={{
        bg: bg,
      }}
      onPress={onPress}
      bg={bg}
      w="full"
      h={55}
      mt={mt}
      rounded="full"
    >
      {children}
    </ButtonAs>
  );
}

export default ButtonComp;
