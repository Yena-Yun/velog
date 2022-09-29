import React from 'react';
import { style } from './ButtonStyle';

const Button = (props) => {
  const { style, onClick, text } = props;

  return (
    <ButtonContainer style={style} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default Button;

const { ButtonContainer } = style;
