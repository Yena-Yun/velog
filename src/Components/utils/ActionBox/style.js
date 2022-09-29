import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexCustom } from 'Styles/theme';

export const ActionContainer = styled(FlexCustom)`
  font-size: 1rem;
  color: rgb(73, 80, 87);
`;

export const EditLink = styled(Link)`
  text-decoration: none;
  color: rgb(134, 142, 150);
`;

export const ActionChange = styled.div`
  padding: 0px;

  font-size: inherit;
  color: rgb(134, 142, 150);

  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`;

export const ActionDelete = styled.li`
  margin-left: 8px;
  padding: 0px;

  font-size: inherit;
  color: rgb(134, 142, 150);

  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`;
