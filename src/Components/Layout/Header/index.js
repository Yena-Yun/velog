import avatar from 'Assets/image/avatar.png';
import { ReactComponent as HomeLogo } from 'Assets/svg/HomeLogo.svg';
import { ReactComponent as RestLogo } from 'Assets/svg/RestLogo.svg';
import { ReactComponent as SearchIcon } from 'Assets/svg/Search.svg';
import { FlexCenter, FlexCustom } from 'Styles/theme';

import * as S from './style';

const Header = ({ location }) => {
  return (
    <S.HeaderWrap>
      <S.HeaderContent justify="between">
        <FlexCenter>
          <S.LogoLink to="/">
            {location === '/' ? <HomeLogo /> : <RestLogo />}
          </S.LogoLink>
        </FlexCenter>
        <FlexCustom justify="between">
          <S.SearchIconWrap>
            <SearchIcon />
          </S.SearchIconWrap>
          <S.MoveToWrite to="/write">새 글 작성</S.MoveToWrite>
          <S.Profile>
            <S.ProfileImage src={avatar} alt="profile" />
            <S.Dropdown
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 10l5 5 5-5z"></path>
            </S.Dropdown>
          </S.Profile>
        </FlexCustom>
      </S.HeaderContent>
    </S.HeaderWrap>
  );
};

export default Header;
