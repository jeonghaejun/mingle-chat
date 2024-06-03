import React, { useState } from "react";
import { Box, Button, Container, Flex, HStack, Input, Text, VStack, Avatar } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "" && username.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: username }]);
      setInputValue("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Enter your username..." value={username} onChange={(e) => setUsername(e.target.value)} />
        </HStack>
        <Box bg="gray.100" w="100%" p={4} borderRadius="md" boxShadow="md" overflowY="auto" height="60vh">
          {messages.map((message, index) => (
            <Flex key={index} justify={message.sender === "You" ? "flex-end" : "flex-start"} mb={2}>
              <HStack>
                {message.sender !== "You" && <Avatar name={message.sender} />}
                <Box bg={message.sender === "You" ? "blue.500" : "gray.300"} color={message.sender === "You" ? "white" : "black"} px={4} py={2} borderRadius="md">
                  <Text>{message.text}</Text>
                </Box>
                {message.sender === "You" && <Avatar name={message.sender} />}
              </HStack>
            </Flex>
          ))}
        </Box>
        <HStack width="100%">
          <Input
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <Button colorScheme="blue" onClick={handleSendMessage} rightIcon={<FaPaperPlane />}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
