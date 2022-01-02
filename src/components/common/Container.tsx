import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    min-width: 320px;
    padding-left: 1rem;
    padding-right: 1rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    min-width: 480px;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    min-width: 769px;
    padding-left: 1.679rem;
    padding-right: 1.679rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    min-width: 992px;
    padding-left: 2rem;
    padding-right: 2rem;
  `};

  & > Main {
    grid-column: 1 / 13;
  }
`;
