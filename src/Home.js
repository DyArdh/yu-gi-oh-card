import {
  Center,
  Container,
  Heading,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Cards from "./Cards";

function Home() {
  const [CardData, setCardData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const FetchCard = async () => {
    const url =
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4";

    const response = await fetch(url);
    const data = await response.json();
    setCardData(data.data);
    setLoading(false);
  };

  function sortData(type) {
    const sortType = type.target.value;
    const copyData = [...CardData];

    // copyData[0].data.sort((a, b) => {
    //   return sortType === "Name"
    //     ? a.name.localeCompare(b.name)
    //     : sortType === "Attack"
    //     ? a.atk - b.atk
    //     : a.def - b.def;
    // });

    copyData.sort((a, b) => {
      return sortType === "Name"
        ? a.name.localeCompare(b.name)
        : sortType === "Attack"
        ? a.atk - b.atk
        : sortType === "Defence"
        ? a.def - b.def
        : a.name.localeCompare(b.name);
    });
    setCardData(copyData);

    // setCardData([...copyData]);
  }

  // useEffect(() => {
  //   console.log(CardData);
  // }, [CardData]);

  useEffect(() => {
    FetchCard();
  }, []);

  // console.log(CardData);
  return (
    <Container maxW="4xl">
      {isLoading ? (
        <Center>
          <Heading as="h1">Loading...</Heading>
        </Center>
      ) : (
        <>
          <Select name="sort" placeholder="Sort by" mt={5} onChange={sortData}>
            <option value="Name">Name</option>
            <option value="Attack">Attack</option>
            <option value="Defence">Defence</option>
          </Select>
          <SimpleGrid columns={[2, 3, 4]} spacing={10} mt={10}>
            {/* {CardData[0].data.map((card) => (
              <Cards key={card.id} card={card} />
            ))} */}
            {CardData.map((card) => (
              <Cards key={card.id} card={card} />
            ))}
          </SimpleGrid>
        </>
      )}
    </Container>
  );
}

export default Home;
