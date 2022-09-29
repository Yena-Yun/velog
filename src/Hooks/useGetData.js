import { useEffect, useState } from 'react';
import MenuApi from 'Common/api';

const useGetData = (setDetailData, setCommentData, id) => {
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (id) => {
    try {
      setIsLoading(true);

      const postResponse = await MenuApi.getPostDetail(id);
      const commentResponse = await MenuApi.getCommentData(id);

      setDetailData(postResponse.data);
      setCommentData(commentResponse.data.results);

      setIsLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  };

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, []);

  return isLoading;
};

export default useGetData;
