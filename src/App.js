import { Routes, Route } from "react-router-dom";
import { Box, Center, Heading } from "@chakra-ui/react";
import Home from "./Home";
import Detail from "./Detail";

const App = () => {
  const MyRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card">
          <Route path=":id" element={<Detail />} />
        </Route>
        {/* <Route path="/card/:id" element={<Detail />} /> */}
        <Route
          path="*"
          element={
            <Box marginY={200}>
              <Center>404 Page not found!</Center>
            </Box>
          }
        />
      </Routes>
    );
  };

  return (
    <div className="App">
      {/* Navbar */}
      <Box bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
