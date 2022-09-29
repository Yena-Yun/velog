import { useSelector } from 'react-redux';
import MenuApi from 'Common/api';
import * as S from './style';
import { FlexCustom } from 'Styles/theme';

const Modal = ({
  title,
  description,
  modalLink,
  postId,
  mainRef,
  deleteComment,
  condition,
  history,
  onToggleModal,
} = {}) => {
  const { id } = useSelector((state) => state.currentCommentReducer.comment);

  const closeModal = (e) => {
    if (e.target.innerText === '확인') {
      condition === 'postDelete' && onDeletePost();
      condition === 'commentDelete' && onDeleteComment();
      condition === 'goToBack' && history.push('/');
    } else {
      onToggleModal();
    }
  };

  const onDeletePost = async () => {
    await MenuApi.deleteDetail(postId);
    modalLink && history.push(modalLink);
    onToggleModal();
  };

  const onDeleteComment = async () => {
    const response = await MenuApi.deleteComment(id);
    onToggleModal();

    if (response) {
      deleteComment(id);

      mainRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  };

  return (
    <S.Container onClick={closeModal}>
      <S.Wrapper>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Content>{description}</S.Content>
        </S.Header>
        <FlexCustom>
          <S.SelectButton onClick={closeModal}>취소</S.SelectButton>
          <S.SelectButton confirm onClick={closeModal}>
            확인
          </S.SelectButton>
        </FlexCustom>
      </S.Wrapper>
    </S.Container>
  );
};

export default Modal;
