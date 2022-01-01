import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  & > Main {
    grid-column: 2 / 12;
  }
`;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   margin: 0 -8px 0 -8px;
//   @media (min-width: 480px) {
//   }
//   @media (min-width: 769px) {
//   }
//   @media (min-width: 1024px) {
//   }
// `;
