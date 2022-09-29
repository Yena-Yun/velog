import { FlexBox } from 'Styles/theme';

import * as S from './style';

const ActionBox = ({ openModal, id }) => {
  const onOpenModal = () => {
    openModal('postDelete');
  };

  return (
    <S.ActionContainer justify="between">
      <FlexBox>
        <S.EditLink to={`/edit/${id}`}>
          <S.ActionChange>수정</S.ActionChange>
        </S.EditLink>
        <ActionDelete onClick={onOpenModal}>삭제</ActionDelete>
      </FlexBox>
    </S.ActionContainer>
  );
};

export default ActionBox;
