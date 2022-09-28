import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled(FlexCenter)`
  flex-direction: column;
`;

export const FlexCustom = styled(FlexBox)`
  justify-content: ${({ justify }) =>
    justify === 'between' ? 'space-between' : 'space-around'};
  align-items: center;
`;
