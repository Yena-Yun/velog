import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexColumn } from 'Styles/theme';

export const Wrapper = styled(Link)`
  position: relative;

  width: 19rem;
  margin: 1rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;
  border-radius: 6px;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  -webkit-transition: box-shadow 0.25s ease-in 0s,
    -webkit-transform 0.25s ease-in 0s;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 0px 1rem 0px;
  }

  @media (max-width: 944px) {
    width: calc(50% - 2rem);
  }

  @media (min-width: 944px) {
    &:hover {
      transform: translateY(-10px);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
    }
  }

  @media (max-width: 944px) {
    width: 487px;
    height: 464px;
  }

  @media (max-width: 1056px) {
    width: 42vw;
  }

  @media (max-width: 767px) {
    width: 92vw;
  }

  @media (max-width: 500px) {
    width: 451px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 177px;
  padding-bottom: 55%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: block;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  object-fit: cover;
`;

export const PostInfoContainer = styled(FlexColumn)`
  padding: 1rem;
  min-height: 165px;
  flex: 1 1 0;
`;

export const PostInfo = styled.div`
  color: black;
  text-decoration: none;

  &:focus {
    color: black;
  }
`;

export const Title = styled.b`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
`;

export const Content = styled.p`
  height: 1.5rem * 3;
  margin-bottom: 2rem;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  font-size: 0.875rem;
  color: rgb(73, 80, 87);
  line-height: 1.5rem;

  word-wrap: break-word;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DateBox = styled.div`
  font-size: 13px;
  color: rgb(134, 142, 150);
`;
