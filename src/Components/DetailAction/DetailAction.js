import React from 'react';
import { style } from './DetailActionStyle';

const DetailAction = ({ openModal, id }) => {
  const onOpenModal = () => {
    openModal('postDelete');
  };

  return (
    <ActionContainer>
      <ActionWrap>
        <EditLink to={`/edit/${id}`}>
          <ActionChange>수정</ActionChange>
        </EditLink>
        <ActionDelete onClick={onOpenModal}>삭제</ActionDelete>
      </ActionWrap>
    </ActionContainer>
  );
};
export default DetailAction;

const { ActionContainer, ActionWrap, ActionChange, ActionDelete, EditLink } =
  style;
