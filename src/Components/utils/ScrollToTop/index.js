import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [scroll, setScroll] = useState(0);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleFollow = () => {
    setScroll(window.pageYOffset);

    if (scroll > 100) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setScroll(0);
    setButtonStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();

    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <TopButton onClick={handleTop} status={buttonStatus}>
      <FaArrowUp />
    </TopButton>
  );
}

const TopButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;

  display: ${({ status }) => (status ? 'block' : 'none')};

  width: 50px;
  height: 50px;

  color: #fff;

  border: none;
  background-color: rgb(18, 184, 134);
  cursor: pointer;
  z-index: 999;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export default ScrollToTop;
