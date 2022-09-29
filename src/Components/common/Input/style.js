import styled from 'styled-components';

export const Preview = styled.img`
  width: 150px;
  height: 150px;

  background-color: #efefef;
  object-fit: cover;
`;

export const UploadButton = styled.button`
  width: 150px;
  height: 30px;

  margin-bottom: 10px;
  font-size: 14px;
  border: none;
`;

export const UploadInput = styled.input.attrs({
  type: 'file',
  name: 'imgFile',
  id: 'imgFile',
})`
  display: none;
`;
