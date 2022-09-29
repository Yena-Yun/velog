import { FlexBox } from 'Styles/theme';

import * as S from './style';

const DetailSkeleton = () => {
  return (
    <S.Main>
      <FlexBox>
        <S.Title>
          <S.Shimmer />
        </S.Title>
        <S.Title>
          <S.Shimmer />
        </S.Title>
        <S.Title>
          <S.Shimmer />
        </S.Title>
        <S.Title>
          <S.Shimmer />
        </S.Title>
      </FlexBox>
      <S.TagList>
        <S.TagItem>
          <S.Shimmer />
        </S.TagItem>
        <TagItem>
          <Shimmer />
        </TagItem>
        <S.TagItem>
          <S.Shimmer />
        </S.TagItem>
      </S.TagList>
      <S.Content>
        <S.FirstContentItem>
          <S.Shimmer />
        </S.FirstContentItem>
        <S.SecondContentItem>
          <S.Shimmer />
        </S.SecondContentItem>
        <S.ThirdContentItem>
          <S.Shimmer />
        </S.ThirdContentItem>
      </S.Content>
      <S.UserContainer>
        <S.UserImg />
        <S.UserDescriptionWrap justify="center">
          <S.UserDescriptionTitle>
            <S.Shimmer />
          </S.UserDescriptionTitle>
          <S.UserDescriptionSubTitle>
            <S.Shimmer />
          </S.UserDescriptionSubTitle>
        </S.UserDescriptionWrap>
      </S.UserContainer>
    </S.Main>
  );
};

export default DetailSkeleton;
