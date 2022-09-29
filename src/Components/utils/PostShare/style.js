import styled from 'styled-components';
import { FlexCenter } from 'Styles/theme';

export const ShareContainer = styled.div`
  position: relative;
  left: -7rem;

  width: 3.5rem;
  height: 3.5rem;
`;

export const ShareWrap = styled(FlexCenter)`
  position: ${(props) => props.position};

  width: 3.5rem;
  height: 3.5rem;

  padding: 0.5rem;

  background: rgb(248, 249, 250);
  border: 1px solid rgb(241, 243, 245);
  border-radius: 50%;
`;

export const ShareBtn = styled.button`
  width: 3rem;
  height: 3rem;

  color: rgb(134, 142, 150);

  background: white;
  border: 1px solid rgb(173, 181, 189);
  border-radius: 1.5rem;

  cursor: pointer;
  z-index: 5;

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;

export const ShareImg = styled.svg`
  width: 25px;
  height: 25px;
`;
