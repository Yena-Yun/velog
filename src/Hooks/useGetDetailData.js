import { getPostData } from 'Common/get-post-data';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useGetDetailData = (setData, id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [postId, setPostId] = useState();
  const Id = useSelector((state) => state.getCardReducer.cardId);

  useEffect(() => {
    Id && setPostId(Id);
  }, [Id]);

  const getData = async () => {
    try {
      setIsLoading(false);
      const response = await getPostData(postId);
      setData(response);
      setIsLoading(true);
    } catch (error) {
      throw new Error('data load 실패');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading;
};

export default useGetDetailData;
