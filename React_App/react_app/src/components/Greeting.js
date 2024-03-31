import React from "react";
import { Text } from "@chakra-ui/react";



const Greeting = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
          <Text
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"10em"}
          
            m={10}
            className="elegantshadow"
          >
            Welcome back!
          </Text>
        );
    }
    return <h1>Please sign up.</h1>;
}

export default Greeting;