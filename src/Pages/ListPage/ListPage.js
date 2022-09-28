import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from 'Components/Header/Header';
import Card from 'Components/Card/Card';
import ListSkeleton from 'Components/ListSkeleton/ListSkeleton';
import ScrollToTop from 'Components/ScrollToTop/ScrollToTop';
import useGetListData from 'Hooks/useGetListData';
import MenuApi from 'Common/api';
import { style } from './ListPageStyle';

const ListPage = ({ history }) => {
  const [postData, setPostData] = useState([]);
  const [location, setLocation] = useState('');
  const [ref, inView] = useInView();
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  useGetListData(1, setPostData, setLoading);

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
    <Wrapper>
      <Header location={location} />
      <Container>
        {loading ? (
          <ListSkeleton />
        ) : (
          <CardList>
            {postData &&
              postData.map((posts) => {
                return (
                  <div ref={ref} key={posts.id}>
                    <Card posts={posts} />
                  </div>
                );
              })}
          </CardList>
        )}
      </Container>
      <ScrollToTop />
    </Wrapper>
  );
};

export default ListPage;

const { Wrapper, Container, CardList } = style;
