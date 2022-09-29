import styled from 'styled-components';
import { FlexCustom } from 'Styles/theme';

export const CommentItem = styled.li`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

export const CommentUserWrap = styled(FlexCustom)`
  margin-bottom: 1.5rem;
`;

export const CommentUser = styled.img`
  width: 3.375rem;
  height: 3.375rem;
  display: block;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const CommentTextWrap = styled.div`
  font-size: 1.125rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const CommentAction = styled.div`
  font-size: 0.875rem;
  color: rgb(134, 142, 150);
`;

export const ChangeComment = styled.span`
  cursor: pointer;
`;

export const RemoveComment = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
`;
