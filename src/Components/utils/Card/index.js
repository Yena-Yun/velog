import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getCardAction } from 'Modules/getCard';
import { formatDate } from 'Common/formatDate';
import defaultImg from 'Assets/images/default.png';

import * as S from './style';

const Card = ({ posts }) => {
  const dispatch = useDispatch();
  const { getCard } = getCardAction;
  const { title, body, createdAt, thumbnail } = posts;

  const dispatchCard = () => {
    dispatch(getCard(posts));
  };

  if (!posts) {
    return (
      <S.Wrapper>
        <Skeleton height={400} />;
      </S.Wrapper>
    );
  } else {
    return (
      <S.Wrapper onClick={dispatchCard} to={`/detail/${posts.id}`}>
        <S.ImageContainer>
          {thumbnail ? (
            <S.Image src={thumbnail} alt="thumbnail" />
          ) : (
            <S.Image src={defaultImg} alt="default-thumbnail" />
          )}
        </S.ImageContainer>

        <S.PostInfoContainer justify="between">
          <S.PostInfo>
            <S.Title>{title}</S.Title>
            <S.Content
              dangerouslySetInnerHTML={{ __html: parse(body) }}
            ></S.Content>
          </S.PostInfo>
          <S.DateBox>{formatDate(createdAt)}</S.DateBox>
        </S.PostInfoContainer>
      </S.Wrapper>
    );
  }
};

export default React.memo(Card);
