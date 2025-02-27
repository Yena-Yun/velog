import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useGetListData from 'Hooks/useGetListData';
import Header from 'Components/Layout/Header';
import Card from 'Components/Utils/Card';
import ListSkeleton from 'Components/Skeleton/ListSkeleton';
import ScrollToTop from 'Components/Utils/ScrollToTop';
import MenuApi from 'Common/api';

import * as S from './style';

const ListPage = ({ history }) => {
  const [postData, setPostData] = useState([]);
  const [location, setLocation] = useState('');

  const [ref, inView] = useInView();
  const [page, setPage] = useState(2);

  // API로 전체 데이터 받아오기
  const loading = useGetListData(1, setPostData);

  useEffect(() => {
    if (inView) {
      MenuApi.getAllPosts(page).then((res) => {
        if (!res.data) {
          throw Error('더 이상 불러올 데이터가 없음');
        } else {
          setPostData((prev) => prev.concat(res.data.results));
          setPage((prev) => prev + 1);
        }
      });
    }
  }, [inView]);

  useEffect(() => {
    setLocation(history.location.pathname);
  }, []);

  return (
    <S.Wrapper>
      <Header location={location} />
      <S.Container>
        {loading ? (
          <ListSkeleton />
        ) : (
          <S.CardList>
            {postData?.map((posts) => (
              <div ref={ref} key={posts.id}>
                <Card posts={posts} />
              </div>
            ))}
          </S.CardList>
        )}
      </S.Container>

      {/* 클릭 시 최상단으로 이동하는 Top 버튼 */}
      <ScrollToTop />
    </S.Wrapper>
  );
};

export default ListPage;
