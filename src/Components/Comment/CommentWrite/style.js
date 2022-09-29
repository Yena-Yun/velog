import styled from 'styled-components';

export const CommentTextArea = styled.textarea`
  width: 100%;
  height: 70px;
  min-height: 3.5rem;

  margin-bottom: 1.5rem;
  padding: 1rem 1rem 1.5rem;

  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;

  outline: none;
  border: 1px solid rgb(233, 236, 239);
  border-radius: 4px;
  resize: none;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 2rem;

  padding: 0px 1.25rem;

  font-size: 1rem;
  color: white;
  font-weight: bold;

  outline: none;
  border: none;
  border-radius: 4px;
  background: rgb(18, 184, 134);

  cursor: pointer;

  &:hover {
    background-color: #20c997;
  }
`;

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 2rem;

  margin-right: 8px;
  padding: 0px 1.25rem;

  font-size: 1rem;
  color: white;
  font-weight: bold;

  outline: none;
  border: none;
  border-radius: 4px;
  background: rgb(134, 142, 150);

  cursor: pointer;
`;
