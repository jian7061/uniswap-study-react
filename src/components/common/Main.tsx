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
    font-size: 67.77px;
    line-height: 68px;
    color: inherit;
    margin: 12px 1rem;
  }

  h2 {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 41.89px;
    line-height: 42px;
    color: inherit;
    margin: 12px 1rem;
  }

  h3 {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.theme.size.h3};
    line-height: ${(props) => props.theme.size.h3};
    color: inherit;
    margin: 12px 1rem;
  }

  h3.subheader {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.theme.size.h3};
    line-height: ${(props) => props.theme.size.h3};
    color: inherit;
    opacity: 0.5;
    margin: 12px 1rem;
  }

  h3.subtitle {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: normal;
    font-size: ${(props) => props.theme.size.h3};
    line-height: ${(props) => props.theme.size.h3};
    color: inherit;
    margin: 12px 1rem;
  }

  p {
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: normal;
    font-size: ${(props) => props.theme.size.body};
    line-height: 22px;
    color: inherit;
    margin: 12px 1rem;

    & > strong {
      font-family: Anonymous Pro;
      font-style: normal;
      font-weight: bold;
      font-size: ${(props) => props.theme.size.body};
      line-height: 22px;
      margin: inherit;
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
      line-height: 22px;
      margin: ${(props) => props.theme.size.small} 0;
    }
  }
`;

export const Main = (props): JSX.Element => {
  return <StyledMain {...props} />;
};
