import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Login from './modules/login';

const StyledButton = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 10px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #000;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
