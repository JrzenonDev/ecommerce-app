import { Text, View } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/button';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Teste</Text>
        <Input />
        <Button title="Entrar" />
      </ContainerLogin>
    </View>
  );
};

export default Login;
