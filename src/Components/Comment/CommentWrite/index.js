import { useRef } from 'react';
import MenuApi from 'Common/api';
import { FlexCustom } from 'Styles/theme';

import * as S from './style';

const CommentInput = ({
  onTextSubmit,
  currentComment,
  CommentId,
  isOpenPatchText,
  onClosePatchTextArea,
  onChangeCurrentComment,
}) => {
  const textRef = useRef();
  const formRef = useRef();

  const onPropsTextSubmit = async (e) => {
    e.preventDefault();
    let text = textRef.current.value;
    if (isOpenPatchText) {
      const response = await MenuApi.patchComment(CommentId, text);
      onChangeCurrentComment(response.data);
      onClosePatchTextArea();
    } else {
      await onTextSubmit(text);
      textRef.current.value = '';
    }
  };

  return (
    <form onSubmit={onPropsTextSubmit} ref={formRef}>
      <S.CommentTextArea
        placeholder="댓글을 작성하세요"
        defaultValue={currentComment}
        ref={textRef}
      ></S.CommentTextArea>
      {isOpenPatchText ? (
        <FlexCustom>
          <S.CloseButton onClick={onClosePatchTextArea}>취소</S.CloseButton>
          <S.Button>댓글 수정</S.Button>
        </FlexCustom>
      ) : (
        <FlexCustom>
          <S.Button>댓글 작성</S.Button>
        </FlexCustom>
      )}
    </form>
  );
};

export default CommentInput;
