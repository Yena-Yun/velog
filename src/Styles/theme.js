import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
  ${({ justify }) =>
    justify === 'start'
      ? 'justify-content: flex-start'
      : justify === 'center'
      ? 'justify-content: center'
      : justify === 'between'
      ? 'justify-content: space-between'
      : ''};
  ${({ align }) =>
    align === 'start'
      ? 'align-items: flex-start'
      : align === 'start'
      ? 'align-items: center'
      : ''};
`;

export const FlexCustom = styled(FlexBox)`
  justify-content: ${({ justify }) =>
    justify === 'between'
      ? 'space-between'
      : justify === 'end'
      ? 'flex-end'
      : 'space-around'};
  align-items: center;
`;
