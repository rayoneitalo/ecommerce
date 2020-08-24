import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  > svg {
    height: 70px;
    width: 25px;
  }
`;

export const RightSide = styled.div`
  height: 100%;
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: flex end;
  text-transform: uppercase;

  a {
    &:not(:last-child) {
      margin-right: 1rem;
    }
    padding: 10px 15px;
    cursor: pointer;
  }

  a:hover {
    border-bottom: 1px solid #333;
  }
`;
