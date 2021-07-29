import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  @media (min-width: 720px) {
    height: 100vh;
    max-width: 992px;
  }

  section {
    flex: 1;


    @media (min-width: 720px) {
      display: grid;
      align-content: center;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
    }
  }
`
