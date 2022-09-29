import CardSkeleton from 'Components/Skeleton/CardSkeleton';

import * as S from './style';

const ListSkeleton = () => {
  return (
    <S.Main>
      <S.Container justify="center">
        <S.CardList>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </S.CardList>
      </S.Container>
    </S.Main>
  );
};

export default ListSkeleton;
