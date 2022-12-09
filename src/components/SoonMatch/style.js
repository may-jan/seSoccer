import styled from 'styled-components'

export const SoonMatchContainer = styled.div`
  padding: 0 100px 0 20px;
  height: 65vh;

  @media (max-width: 1200px) {
    display: flex;
    /* flex-direction: column; */
    align-items: flex-start;
    margin-left: 10rem;
  }

  @media (max-width: 1024px) {
    padding: 0 20px;
    flex-direction: column;
    margin-left: 15rem;
  }
`
