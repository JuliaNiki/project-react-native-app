import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

const WelcomeText = styled.Text`
  font-size: 45px;
  text-align: center;
  color: black;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  font-weight: bold;
`;

const StartButton = styled.TouchableOpacity`
    background-color: orange;
    padding: 22px 30px;
    border-radius: 50px;
`
const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
`;


const Home = ({ navigation }) => {

    return (
        <Container>
            <WelcomeText>Welcome to CryptoPortfolio</WelcomeText>
            <StartButton onPress={() => navigation.navigate('Portfolio')}>
                <ButtonText>START</ButtonText>
            </StartButton>
            <LottieView
                source={require("../assets/crypto.json")}
                style={{
                    width: 400,
                    height: 400,
                }}
                autoPlay
            />
        </Container>
    )
}

export default Home