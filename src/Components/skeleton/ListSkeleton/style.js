import styled from 'styled-components';
import { FlexBox, FlexColumn } from 'Styles/theme';

export const Main = styled(FlexColumn)`
  width: 100%;
  background: #f8f9fa;
`;

export const Container = styled(FlexColumn)`
  margin: 2rem auto 0;
  background: #f8f9fa;

  @media (max-width: 1919px) {
    width: 1376px;
  }

  @media (max-width: 1440px) {
    width: 1124px;
  }

  @media (max-width: 1056px) {
    width: calc(80% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 767px) {
    width: calc(100% - 2rem);
  }
`;

export const CardList = styled(FlexBox)`
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;
  background: #f8f9fa;
`;
