import { SafeAreaView, Text, View } from "react-native"
import styled from "styled-components/native"

const StyledButton = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 10px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #000;
`;

const App = () => {
  return(
    <SafeAreaView>
      <Text style={{color: 'red'}}>App</Text>
      <StyledButton>
        <ButtonText>TExto</ButtonText>
      </StyledButton>
    </SafeAreaView>
  )
}

export default App