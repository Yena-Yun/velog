import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { debounce } from 'lodash';
import parse from 'html-react-parser';
import MenuApi from 'Common/api';
import useGetData from 'Hooks/useGetData';
import * as S from './style';
import Header from 'Components/Header/Header';
import Tag from 'Components/Tag/Tag';
import CommentView from 'Components/Comment/CommentView/CommentView';
import DetailSkeleton from 'Components/DetailSkeleton/DetailSkeleton';
import ActionBox from 'Components/DetailAction/DetailAction';
import PostShare from 'Components/PostShare/PostShare';
import CommentWrite from 'Components/Comment/CommentWrite/CommentWrite';
import Modal from 'Components/Modal/Modal';
import { formatDate } from 'Common/formatDate';
import avatar from 'Assets/images/avatar.png';
import { FlexCustom } from 'Styles/theme';

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
  const [clickComponent, setClickComponent] = useState('');
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

  const toggleModal = useCallback((click) => {
    setShowModal(false);

    if (click) {
      setClickComponent(click);
      setShowModal(true);
    }
  }, []);

  const deleteComment = useCallback(
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
      <Header />

      {loading ? (
        <DetailSkeleton />
      ) : (
        <S.Body>
          <S.Title>{title}</S.Title>

          <FlexCustom justify="between">
            <p>{formatDate(createdAt)}</p>
            <ActionBox openModal={toggleModal} id={id} />
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
            <S.UserImg src={avatar} alt="user" />
            <S.UserDescriptionWrap>
              <S.UserDescriptionTitle>User</S.UserDescriptionTitle>
              <S.UserDescriptionSubTitle>Front-end</S.UserDescriptionSubTitle>
            </S.UserDescriptionWrap>
          </S.UserContainer>
          <S.CommentContainer>
            <S.CommentCount>{`${commentData.length}개의 댓글`}</S.CommentCount>
            <CommentWrite onTextSubmit={onCreateComment} />
            <S.CommentList>
              {commentData.map((comment) => (
                <CommentView
                  key={comment.id}
                  comment={comment}
                  openModal={toggleModal}
                />
              ))}
            </S.CommentList>
          </S.CommentContainer>
        </S.Body>
      )}

      {showModal && clickComponent === 'postDelete' && (
        <Modal
          title="포스트 삭제"
          description="정말로 삭제하시겠습니까?"
          modalLink="/"
          postId={id}
          mainRef={mainRef}
          deleteComment={deleteComment}
          clickComponent={clickComponent}
          history={history}
          onToggleModal={toggleModal}
        />
      )}
      {showModal && clickComponent === 'commentDelete' && (
        <Modal
          title="댓글 삭제"
          description="댓글을 정말로 삭제하시겠습니까?"
          modalLink=""
          postId={id}
          mainRef={mainRef}
          deleteComment={deleteComment}
          clickComponent={clickComponent}
          onToggleModal={toggleModal}
        />
      )}
    </S.Main>
  );
};

export default DetailPage;
