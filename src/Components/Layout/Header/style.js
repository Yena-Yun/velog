import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexCenter, FlexCustom } from 'Styles/theme';

export const HeaderWrap = styled.header`
  width: 100%;
  height: 4rem;
`;

export const HeaderContent = styled(FlexCustom)`
  width: 1728px;
  margin: auto;
  height: 100%;

  @media (max-width: 1919px) {
    width: 1376px;
  }
  @media (max-width: 1440px) {
    width: 1024px;
  }

  @media (max-width: 1056px) {
    width: calc(100% - 2rem);
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const SearchIconWrap = styled(FlexCenter)`
  width: 2.5rem;
  height: 2.5rem;

  margin-right: 0.75rem;

  background: transparent;
  border: none;
  border-radius: 50%;

  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #0000000b;
  }
`;

export const MoveToWrite = styled(Link)`
  display: flex;
  align-items: center;

  height: 2rem;

  margin-right: 1.25rem;
  padding: 0 1rem;

  font-size: 1rem;
  color: rgb(52, 58, 64);
  font-weight: bold;

  border: 1px solid rgb(52, 58, 64);
  border-radius: 1rem;

  outline: none;
  background: white;

  word-break: keep-all;
  transition: all 0.125s ease-in 0s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #343a40;
    color: #ffffff;
  }
`;

export const Profile = styled(FlexCenter)`
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  display: block;
  height: 2.5rem;
  width: 2.5rem;

  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.125s ease-in 0s;
`;

export const Dropdown = styled.svg`
  margin-left: 0.25rem;
  margin-right: -0.4375 rem;

  font-size: 1.5rem;
  color: rgb(134, 142, 150);

  transition: all 0.125s ease-in 0s;

  &:hover {
    color: rgb(52, 58, 64);
  }
`;
