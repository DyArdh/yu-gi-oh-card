import { Box, Heading, Image, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <Link
      to={"/card/" + String(card.id)}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Box className="yugioh-card">
        <Center>
          <Image src={card.card_images[0].image_url} />
        </Center>
        <Heading as="h2" fontSize="xl" style={{ textAlign: "center" }}>
          {card.name}
        </Heading>
      </Box>
    </Link>
  );
}

export default Card;
