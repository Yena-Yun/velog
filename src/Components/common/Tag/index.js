import styled from 'styled-components';

const Tag = ({ tagContent }) => {
  return <TagItem>{tagContent}</TagItem>;
};

const TagItem = styled.li`
  height: 2rem;

  margin: 0.875rem;
  padding: 0 1rem;

  display: inline-flex;
  align-items: center;

  font-size: 1rem;
  color: rgb(12, 166, 120);
  font-weight: 500;

  border-radius: 1rem;
  background: rgb(241, 243, 245);
  text-decoration: none;

  cursor: pointer;
`;

export default Tag;
