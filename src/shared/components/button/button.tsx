import { Text, TouchableOpacityProps } from 'react-native';
import { ContainerButton } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <ContainerButton {...props}>
      <Text>{title}</Text>
    </ContainerButton>
  );
};

export default Button;
