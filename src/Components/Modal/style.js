import styled from 'styled-components';
import { FlexCenter, FlexColumn } from 'Styles/theme';

export const Container = styled(FlexCenter)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const Wrapper = styled(FlexColumn)`
  width: 340px;
  height: 200px;
  padding: 40px 30px 30px;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  background-color: #fff;
`;

export const Header = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Content = styled.p`
  font-size: 16px;
  color: rgb(73, 80, 87);
  white-space: pre-wrap;
`;

export const SelectButton = styled(FlexCenter)`
  width: 120px;
  height: 40px;

  font-size: 16px;
  font-weight: bold;
  color: ${({ confirm }) => (confirm ? '#fff' : 'rgb(73, 80, 87)')};

  background-color: ${({ confirm }) =>
    confirm ? 'rgb(18, 184, 134)' : 'rgb(233, 236, 239)'};
  cursor: pointer;

  border: none;
  border-radius: 4px;

  outline: none;
  text-decoration: none;
`;
