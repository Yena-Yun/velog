import * as S from './style';

const CardSkeleton = () => {
  return (
    <S.CardBox>
      <S.ImageWrap>
        <S.Shimmer />
      </S.ImageWrap>
      <S.ContentWrap>
        <S.ContentLineFirst>
          <S.Shimmer />
        </S.ContentLineFirst>
        <S.ContentLine>
          <S.Shimmer />
        </S.ContentLine>
      </S.ContentWrap>
    </S.CardBox>
  );
};

export default CardSkeleton;
