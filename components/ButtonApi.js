import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const QuoteText = styled.Text`
  color: palevioletred;
  font-weight: 700;
  width: 50%;
`;

const ApiButton = styled.TouchableOpacity`
  width: 50%;
  background-color: slateblue;
`;

const ButtonApi = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    setLoading(true);
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => setQuote(quote))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>Click button to generate quote!</Text>
      <ApiButton onPress={generateQuote}>
        <Text>Click!</Text>
      </ApiButton>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <Text>Author: {quote.author}</Text>
    </View>
  );
};
export default ButtonApi;
