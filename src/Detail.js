import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const [CardData, setCardData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();

  const FetchCard = async (id) => {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`;

    const response = await fetch(url);
    const data = await response.json();
    setCardData(data);
    setLoading(false);
  };

  useEffect(() => {
    FetchCard(id);
  }, [id]);

  return (
    <Container maxW="4xl" mt={5}>
      <Box>
        <Button onClick={() => navigate("/")}>Back</Button>
      </Box>
      {isLoading ? (
        <Center>
          <Heading as="h1">Loading...</Heading>
        </Center>
      ) : (
        <Box borderWidth="2px" borderRadius="lg" mt={5} p={3}>
          {CardData.data.map((card) => (
            <Box key={card.id}>
              <Flex>
                <Image src={card.card_images[0].image_url} width="200px" />
                <Box ml={3}>
                  <Heading as="h2" fontSize="2xl">
                    {card.name}
                  </Heading>
                  <Text as="b">Level: {card.level}</Text>
                  <br />
                  <Text as="b">{card.attribute}</Text>
                  <br />
                  <Text as="b">
                    ATK/{card.atk} DEF/{card.def}
                  </Text>
                  <Text>
                    [ {card.type} / {card.race} ]
                  </Text>
                  <Text>Description: {card.desc}</Text>
                </Box>
              </Flex>
              <Box mt={5}>
                <Heading as="h2" fontSize="xl" style={{ textAlign: "center" }}>
                  Card Set
                </Heading>
                <SimpleGrid columns={4} spacing={3} mt={2}>
                  {CardData.data[0].card_sets.map((set, i) => (
                    <Box key={i} p={2} borderWidth="1px" borderRadius="lg">
                      <Text fontSize="sm">Name: {set.set_name}</Text>
                      <Text fontSize="sm">Code: {set.set_code}</Text>
                      <Text fontSize="sm">Rarity: {set.set_rarity}</Text>
                      <Text fontSize="sm">Price: {set.set_price}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default Detail;
