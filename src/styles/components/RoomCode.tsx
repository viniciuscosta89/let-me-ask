import styled from 'styled-components';

export const RoomCodeStyle = styled.div`
  border-radius: 8px;

  border: 1px solid var(--primary);
  cursor: pointer;

  display: flex;

  @media (min-width: 1280px) {
    height: 40px;
  }

  div {
    background-color: var(--primary);
    border-radius: 8px 0 0 8px;
    padding: 10px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0.75rem 1rem 0.75rem 0.75rem;
    width: auto;
    font-size: 0.95rem;
    font-weight: 500;
    word-break: break-all;
  }
`;
