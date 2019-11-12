import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledCell = styled.div`
  width: auto;
  background: rgba(${(props) => props.color}, 1);
  border: ${(props) => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(0, 0, 0, 0.6);
  border-right-color: rgba(0, 0, 0, 0.3);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.6);
`;

// export default StyledCell;
