import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { debounce } from 'lodash';
import parse from 'html-react-parser';
import MenuApi from 'Common/api';
import useGetData from 'Hooks/useGetData';
import Header from 'Components/Layout/Header';
import Tag from 'Components/Common/Tag';
import CommentView from 'Components/Comment/CommentView';
import DetailSkeleton from 'Components/Skeleton/DetailSkeleton';
import ActionBox from 'Components/Utils/ActionBox';
import PostShare from 'Components/Utils/PostShare';
import CommentInput from 'Components/Comment/CommentWrite';
import Modal from 'Components/Utils/Modal';
import { formatDate } from 'Common/formatDate';
import { FlexCustom } from 'Styles/theme';
import avatar from 'Assets/image/avatar.png';

import * as S from './style';

const DetailPage = ({ history }) => {
  const [detailData, setDetailData] = useState({
    tags: [],
    title: '',
    body: '',
    createdAt: '',
    updatedAt: '',
    id: '',
  });
  const [commentData, setCommentData] = useState([]);
  const [tagArr, setTagArr] = useState([]);
  const [isFixed, setIsFixed] = useState(true);
  const [condition, setCondition] = useState('');
  const [showModal, setShowModal] = useState(false);
  const mainRef = useRef();

  const { id } = useSelector((state) => state.getCardReducer.card);

  const loading = useGetData(setDetailData, setCommentData, id);

  const onCreateComment = useCallback(async (text) => {
    const response = await MenuApi.createComment(id, text);

    if (response) {
      const commentResponse = await MenuApi.getCommentData(id);
      setCommentData(commentResponse.data.results);

      mainRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, []);

  const onToggleModal = useCallback((condition) => {
    setShowModal(false);

    if (condition) {
      setCondition(condition);
      setShowModal(true);
    }
  }, []);

  const onDeleteComment = useCallback(
    (selectedId) => {
      setCommentData(commentData.filter(({ id }) => id !== selectedId));
    },
    [commentData],
  );

  useEffect(() => {
    // 수정 페이지 들어올 때마다 스크롤 맨 위로
    window.scrollTo(0, 0);

    // 스크롤 시 왼쪽 카카오톡 공유 버튼 고정 여부 최적화
    window.addEventListener(
      'scroll',
      debounce(() => {
        if (window.pageYOffset > 220) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }, 10),
    );
  }, []);

  useEffect(() => {
    setTagArr(detailData?.tags);
  }, [detailData]);

  const { title, createdAt, thumbnail, body } = detailData;

  return (
    <S.Main ref={mainRef}>
      {showModal && condition === 'postDelete' && (
        <Modal
          title="포스트 삭제"
          description="정말로 삭제하시겠습니까?"
          modalLink="/"
          postId={id}
          mainRef={mainRef}
          deleteComment={onDeleteComment}
          condition={condition}
          history={history}
          onToggleModal={onToggleModal}
        />
      )}
      {showModal && condition === 'commentDelete' && (
        <Modal
          title="댓글 삭제"
          description="댓글을 정말로 삭제하시겠습니까?"
          postId={id}
          mainRef={mainRef}
          deleteComment={onDeleteComment}
          condition={condition}
          onToggleModal={onToggleModal}
        />
      )}

      <Header />

      {loading ? (
        <DetailSkeleton />
      ) : (
        <S.Body>
          <S.Title>{title}</S.Title>

          <FlexCustom justify="between">
            <p>{formatDate(createdAt)}</p>
            <ActionBox openModal={onToggleModal} id={id} />
          </FlexCustom>

          <S.TagList>
            {tagArr?.map((tagContent, index) => (
              <Tag key={`${index}_${tagContent}`} tagContent={tagContent} />
            ))}

            {/* 카카오톡 공유 버튼 */}
            {!loading && (
              <PostShare isFixedShare={isFixed} detailData={detailData} />
            )}
          </S.TagList>

          <S.ThumbnailWrap>
            {thumbnail && <S.Thumbnail src={thumbnail} alt="thumbnail" />}
          </S.ThumbnailWrap>

          <S.Content
            dangerouslySetInnerHTML={{ __html: parse(body) }}
          ></S.Content>

          <S.UserContainer>
            <S.UserImage src={avatar} alt="user" />
            <S.UserInfo align="start">
              <S.UserName>User</S.UserName>
              <S.UserDescription>Front-end</S.UserDescription>
            </S.UserInfo>
          </S.UserContainer>

          <S.CommentContainer>
            <S.CommentCount>{`${commentData.length}개의 댓글`}</S.CommentCount>
            <CommentInput onTextSubmit={onCreateComment} />
            <S.CommentList>
              {commentData?.map((comment) => (
                <CommentView
                  key={comment.id}
                  comment={comment}
                  openModal={onToggleModal}
                />
              ))}
            </S.CommentList>
          </S.CommentContainer>
        </S.Body>
      )}
    </S.Main>
  );
};

export default DetailPage;
