import {
  ChakraProvider,
  Heading,
  Flex,
  Container,
  Text,
  Input,
  Button,
  Wrap,
  Stack,
  Image,
  Link,
  SkeletonCircle,
  SkeletonText,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [prompt, updatePrompt] = useState("");
  const [loading, updateLoading] = useState(false);

  const generate = async (prompt) => {
    updateLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/?prompt=${prompt}`
      );
      const imageData = response.data.image;
      setImage(`data:image/png;base64,${imageData}`);
    } catch (error) {
      console.error("Error generating image:", error);
    }
    updateLoading(false);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "generated_image.png";
    link.click();
  };

  return (
    <ChakraProvider>
      <div className="App-background"></div>
      <Container width={"100%"} className="App">
        <Heading
          marginTop={"4rem"}
          marginBottom={"1rem"}
          className="heading-animate"
        >
          🎨 PixAI
        </Heading>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "1.25rem",
          }}
          marginTop={"1rem"}
          marginBottom={"1rem"}
          className="heading-animate"
        >
          🤖 Unleash Creativity, Pixel by Pixel
        </Text>

        <Wrap marginBottom={"10px"} className="input-animate">
          <Input
            value={prompt}
            onChange={(e) => updatePrompt(e.target.value)}
            width={"350px"}
            placeholder="Enter prompt"
            sx={{
              border: "2px solid",
              borderImageSlice: 1,
              borderImageSource:
                "linear-gradient(to right, blue.400, purple.500)",
            }}
          />

          <Button
            onClick={() => generate(prompt)}
            bgGradient="linear(to-r, blue.400, purple.500)"
            color="white"
            className="button-animate"
            _hover={{
              bgGradient: "linear(to-r, blue.500, purple.600)",
            }}
          >
            Generate
          </Button>
        </Wrap>
        {loading ? (
          <Stack>
            <SkeletonCircle
              startColor="rgba(21, 21, 212, 0.4)"
              endColor="rgba(110, 7, 158, 0.4)"
            />
            <SkeletonText
              startColor="rgba(21, 21, 212, 0.4)"
              endColor="rgba(110, 7, 158, 0.4)"
            />
          </Stack>
        ) : (
          image && (
            <Flex align="center" direction="row">
              <Image
                src={image}
                boxShadow="lg"
                width={"400px"}
                alt="Generated"
                borderRadius="md"
                className="fade-in"
                marginTop={"30px"}
                marginBottom={"30px"}
              />
              <Button
                onClick={downloadImage}
                bgGradient="linear(to-r, blue.300, purple.400)"
                borderColor="linear(to-r, blue.800, purple.800)"
                color="white"
                className="button-animate"
                marginLeft="10px"
                _hover={{
                  bgGradient: "linear(to-r, blue.400, purple.500)",
                }}
              >
                ⬇
              </Button>
            </Flex>
          )
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
