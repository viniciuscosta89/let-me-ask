import styled from 'styled-components';

export const RoomCodeStyle = styled.div`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  border: 1px solid var(--primary);
  cursor: pointer;

  display: flex;

  div {
    background-color: var(--primary);
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 12px;
    width: 240px;
    font-size: 14px;
    font-weight: 500;
  }
`;
