import styled from 'styled-components';

const StyledMain = styled.main`
  color: ${(props) => props.theme.text};
  white-space: pre-wrap;
  word-break: keep-all;

  article {
    margin: 50px 0;
  }

  h1 {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.theme.size.h1};
    line-height: ${(props) => props.theme.size.h1};
    color: inherit;
    margin: 0.75rem 1rem;
  }

  h2 {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.theme.size.h2};
    line-height: ${(props) => props.theme.size.h2};
    color: inherit;
    margin: 0.75rem 1rem;
  }

  h3 {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.theme.size.h3};
    line-height: ${(props) => props.theme.size.h3};
    color: inherit;
    margin: 0.75rem 1rem;
  }

  h3.subheader {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.theme.size.h3};
    line-height: ${(props) => props.theme.size.h3};
    color: inherit;
    opacity: 0.5;
    margin: 0.75rem 1rem;
  }

  h3.subtitle {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: normal;
    font-size: ${(props) => props.theme.size.h3};
    line-height: ${(props) => props.theme.size.h3};
    color: inherit;
    margin: 0.75rem 1rem;
  }

  p {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: normal;
    font-size: ${(props) => props.theme.size.body};
    line-height: 1.375rem;
    color: inherit;
    margin: 0.75rem 1rem;

    & > strong {
      font-family: Anonymous Pro;
      font-style: normal;
      font-weight: bold;
      font-size: ${(props) => props.theme.size.body};
      line-height: 1.375rem;
      margin: 0.75rem 1rem;
    }

    & > small {
      font-family: Anonymous Pro;
      font-style: normal;
      font-weight: normal;
      font-size: ${(props) => props.theme.size.small};
      line-height: ${(props) => props.theme.size.small};
      margin: inherit;
    }
  }

  ul {
    font-size: ${(props) => props.theme.size.body};
    padding-left: ${(props) => props.theme.size.h3};
    & > li {
      word-wrap: break-word;
      line-height: 1.375rem;
      margin: ${(props) => props.theme.size.small} 0;
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Main = (props): JSX.Element => {
  return <StyledMain {...props} />;
};
