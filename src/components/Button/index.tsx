import { Buttons } from "./styled";

interface Props {
  text: string;
}

export const Button = ({ text }: Props) => {
  return <Buttons>{text}</Buttons>;
};
