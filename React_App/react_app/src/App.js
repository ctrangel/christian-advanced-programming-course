
import "./App.css";
import "./TicTacToe.css";
import Greeting from "./components/Greeting";
import TicTacToe from "./components/TicTacToe";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  Box,
} from "@chakra-ui/react";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        {/* <Butter />
        <Counter />
        <AlertBtn /> */}
        <Greeting isLoggedIn={true} />
        <TicTacToe />
      </Box>
    </ChakraBaseProvider>
  );
}

export default App;
