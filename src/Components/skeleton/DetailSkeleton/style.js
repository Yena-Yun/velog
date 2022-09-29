import styled from 'styled-components';
import { FlexColumn } from 'Styles/theme';

export const Main = styled.main`
  margin: 5.5rem auto 0;
  width: 768px;
`;

export const Title = styled.div`
  width: 100px;
  height: 60px;

  line-height: 1.5;
  color: rgb(52, 58, 64);
  letter-spacing: -0.004em;

  margin-top: 0 1rem 2rem 0;

  background-color: #eeeeee;
  word-break: keep-all;
  overflow: hidden;
`;

export const TagList = styled.ul`
  min-height: 0.875rem;
  margin-top: 0.875rem 0 -0.875rem;
`;

export const TagItem = styled.ul`
  width: 60px;
  height: 32px;

  margin: 0.875rem;

  display: inline-flex;
  align-items: center;

  font-size: 1rem;
  color: rgb(12, 166, 120);
  font-weight: 500;

  background: rgb(241, 243, 245);
  border-radius: 1rem;

  text-decoration: none;
  overflow: hidden;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const FirstContentItem = styled.div`
  width: 400px;
  height: 30px;
  background-color: #eeeeee;
  margin-top: 1rem;
  overflow: hidden;
`;

export const SecondContentItem = styled.div`
  width: 200px;
  height: 30px;
  background-color: #eeeeee;
  margin-top: 1rem;
  overflow: hidden;
`;

export const ThirdContentItem = styled.div`
  width: 300px;
  height: 30px;
  background-color: #eeeeee;
  margin-top: 1rem;
  overflow: hidden;
`;

export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 30px 30px #e0e0e0;
  animation: loading 2s infinite;

  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translate(200%);
    }
  }
`;

export const UserContainer = styled.footer`
  display: flex;
  align-items: center;

  margin: 7rem 0 6rem;
  padding-bottom: 2rem;

  border-bottom: 1px solid rgb(233, 236, 239);
`;

export const UserImg = styled.div`
  width: 7rem;
  height: 7rem;

  background-color: #eeeeee;
  border-radius: 50%;
  cursor: pointer;
`;

export const UserDescriptionWrap = styled(FlexColumn)`
  margin-left: 1rem;
`;

export const UserDescriptionTitle = styled.div`
  width: 65px;
  height: 30px;
  background-color: #eeeeee;
  overflow: hidden;
`;

export const UserDescriptionSubTitle = styled.div`
  width: 76px;
  height: 25px;
  margin-top: 0.25rem;
  background-color: #eeeeee;
  overflow: hidden;
`;
