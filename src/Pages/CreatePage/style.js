import styled from 'styled-components';
import { FlexBox, FlexColumn, FlexCustom } from 'Styles/theme';

export const Container = styled(FlexBox)`
  height: 100vh;
`;

export const WriteContainer = styled(FlexColumn)`
  max-width: 630px;
  width: 50vw;
  padding: 30px 50px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
`;

export const WriteHeader = styled(FlexCustom)``;

export const WriteTitle = styled.input`
  width: 100%;
  height: 66px;
  font-size: 30px;
  font-weight: 700;
  color: rgb(33, 37, 41);
  border: none;
`;

export const WriteLine = styled.div`
  width: 64px;
  height: 6px;
  background: rgb(33, 37, 41);
  margin: 24px 0 16px;
`;

export const WriteTagContainer = styled(FlexBox)`
  flex-wrap: wrap;
`;

export const WriteTagContent = styled(FlexBox)`
  margin-bottom: 10px;

  div {
    height: 32px;
    line-height: 36px;
    border-radius: 16px;
    background: rgb(241, 243, 245);
    padding: 5px 10px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const WriteTag = styled.input`
  width: 100%;
  height: 30px;
  font-size: 20px;
  border: none;
  padding-left: 0;
  margin-bottom: 12px;
`;

export const EditorContainer = styled(FlexBox)`
  flex: 1;
  width: 100%;
  margin-bottom: 50px;

  .ck.ck-editor {
    max-width: 700px;
  }
  .ck-editor__editable {
    min-height: 400px;
  }
`;

export const WriteFooter = styled(FlexCustom)`
  width: 100%;
  margin: 0 auto;
`;

export const PreviewContainer = styled(FlexBox)`
  padding: 100px 50px;

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
`;
