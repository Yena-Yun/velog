import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { currentCommentAction } from 'Modules/currentComment';
import CommentWrite from 'Components/Comment/CommentWrite';
import avatar from 'Assets/image/avatar.png';

import * as S from './style';

const CommentView = ({ comment, openModal }) => {
  const [isOpenPatchText, setIsOpenPatch] = useState(false);
  const [current, setCurrent] = useState(comment);
  const { getCurrentComment } = currentCommentAction;
  const dispatch = useDispatch();

  const onOpenModal = () => {
    openModal('commentDelete');
    current && dispatch(getCurrentComment(current));
  };

  useEffect(() => {
    setCurrent(comment);
  }, [comment]);

  const onOpenPatchTextArea = () => {
    setIsOpenPatch(true);
  };

  const onClosePatchTextArea = () => {
    setIsOpenPatch(false);
  };

  const onChangeCurrentComment = useCallback((text) => {
    setCurrent(text);
  }, []);

  return (
    <S.CommentItem>
      <S.CommentUserWrap justify="between">
        <S.CommentUser src={avatar} />
        {isOpenPatchText === false && (
          <CommentAction>
            <ChangeComment onClick={onOpenPatchTextArea}>수정</ChangeComment>
            <RemoveComment onClick={onOpenModal}>삭제</RemoveComment>
          </CommentAction>
        )}
      </S.CommentUserWrap>
      {isOpenPatchText === true ? (
        <CommentWrite
          currentComment={current.body}
          CommentId={current.id}
          isOpenPatchText={isOpenPatchText}
          onClosePatchTextArea={onClosePatchTextArea}
          onChangeCurrentComment={onChangeCurrentComment}
        />
      ) : (
        <S.CommentTextWrap>{current.body}</S.CommentTextWrap>
      )}
    </S.CommentItem>
  );
};

export default CommentView;
