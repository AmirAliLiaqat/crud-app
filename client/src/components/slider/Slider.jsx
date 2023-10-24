import { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Component = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled(Box)`
  width: 800px;
  height: 200px;
  background: beige;
  border-radius: 5px;
  position: relative;
  padding: 5px;
`;

const InnerBoxContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px;
`;

const InnerBox = styled(Box)`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  height: 120px;
`;

const PrevButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: -5%;
  background: white !important;
  transform: translateY(-50%) rotate(-90deg);
`;

const NextButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: -5%;
  background: white !important;
  transform: translateY(-50%) rotate(90deg);
`;

const slideAnimation = {
  transition: "transform 0.5s ease-in-out",
};

const deckList = [
  "Deck 1 😊",
  "Deck 2 😂",
  "Deck 3 🤣",
  "Deck 4 😍",
  "Deck 5 😒",
  "Deck 6 👍",
  "Deck 7 🌍",
  "Deck 8 ❤️",
  "Deck 9 🏁",
  "Deck 10 💕",
];

const Slider = () => {
  const [deck, setDeck] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handlePrevious = () => {
    if (deck > 0) {
      setDeck(deck - 1);
      setTranslateX(translateX + 200);
    }
  };

  const handleNext = () => {
    if (deck < deckList.length - 3) {
      setDeck(deck + 1);
      setTranslateX(translateX - 200);
    }
  };

  return (
    <Component>
      <Container>
        {deck > 0 && (
          <PrevButton variant="contained" onClick={handlePrevious}>
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </PrevButton>
        )}
        <InnerBoxContainer>
          {deckList.slice(deck, deck + 3).map((item, index) => (
            <InnerBox
              key={index}
              sx={slideAnimation}
               style={{ transform: `translateX(${translateX}px)` }}
            >
              <img
                src="https://img.freepik.com/free-vector/linear-flat-industrial-manufacture-conveyor-machine-illustration-business-product-production-process-concept_126523-2663.jpg"
                alt="img"
                style={{ width: "110px", height: "120px" }}
              />
              &nbsp;
              {item}
            </InnerBox>
          ))}
        </InnerBoxContainer>
        {deck < deckList.length - 3 && (
          <NextButton variant="contained" onClick={handleNext}>
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </NextButton>
        )}
      </Container>
    </Component>
  );
};

export default Slider;
