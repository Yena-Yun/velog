import styled from 'styled-components';

const Button = (props) => {
  const { style, onClick, text } = props;

  return (
    <ButtonContainer style={style} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 100%;
  height: 40px;

  padding: 0 20px;

  font-size: 16px;
  font-weight: bold;
  color: #fff;

  background-color: rgb(18, 184, 134);
  border: none;
  outline: none;

  text-decoration: none;
  cursor: pointer;
`;

export default Button;
