import React from 'react';
import styled, { css } from 'styled-components';

// const StyledContainer = styled.div`
//   width: 100%;
//   display: inline-flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   margin: 0 1rem;
//   position: relative;

/* & + & > input {
    border-radius: 0.5rem;
  } */
// `;

// const Logo = styled.img`
//   ${(props) =>
//       props.size === 'large' &&
//       css`
//         margin-left: 2.3rem;
//         width: 1.5rem;
//         height: 1.5rem;
//   `}

//   ${(props) =>
//       props.size === 'medium' &&
//       css`
//         width: 1rem;
//         height: 1rem;
//   `}

//   ${(props) =>
//       props.size === 'small' &&
//       css`
//         width: 0.8rem;
//         height: 0.8rem;
//   `}

//   & > img {
//     width: 100%;
//     height: 100%;
//   }
// `;

// const Label = styled.label`
//   color: #757575;
//   position: absolute;
//   transition: all 0.2s ease;
//   z-index: 500;
//   font-weight: 400;

//   ${props =>
//     props.size === 'large' &&
//     css`
//       margin-left: 1.62rem;
//       font-size: ${props.theme.size.h3};
//       ${props.focused === true &&
//         css`
//           transform: translateY(-34px) translateX(0px);
//           font-size: ${props.theme.size.small};
//           padding: 0 6px;
//           z-index: 501;
//           background-color: ${props.theme.background};
//         `}
//     `}

//   ${props =>
//     props.size === 'medium' &&
//     css`
//       margin-left: 1rem;
//       font-size: ${props.theme.size.body};
//       ${props.focused === true &&
//         css`
//           transform: translateY(-23px) translateX(0px);
//           font-size: ${props.theme.size.small};
//           padding: 0 4px;
//           z-index: 501;
//           background-color: ${props.theme.background};
//         `}
//     `}

//   ${props =>
//     props.size === 'small' &&
//     css`
//       margin-left: 0.875rem;
//       font-size: ${props.theme.size.small};

//       ${props.focused === true &&
//         css`
//           transform: translateY(-20px) translateX(2px);
//           font-size: ${props.theme.size.small};
//           padding: 0 4px;
//           z-index: 501;
//           background-color: ${props.theme.background};
//         `}
//     `}
// `;

const colorStyles = css`
  ${({ theme }) => {
    const textColor = theme.text;
    return css`
      color: ${textColor};
    `;
  }}
`;

const sizeStyles = css`
  ${(props) =>
    props.size === 'large' &&
    css`
      line-height: ${props.theme.size.h3};
      font-size: ${props.theme.size.h3};
      padding: ${props.theme.size.small} ${props.theme.size.body};
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      line-height: ${props.theme.size.body};
      font-size: ${props.theme.size.body};
      padding: ${props.theme.size.pretitle} ${props.theme.size.small};
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      line-height: ${props.theme.size.small};
      font-size: ${props.theme.size.small};
      padding: ${props.theme.size.pretitle} ${props.theme.size.pretitle};
    `}
`;

const StyledInput = styled.input`
  display: inline-flex;
  position: relative;
  width: 100%;
  background-color: transparent;
  border-radius: 2rem;

  /* ?????? */
  ${colorStyles}

  /* ?????? */
    ${sizeStyles}
`;

type BasicInputProps = {
  uniqueKey: string;

  type?: string;
  // Input Field??? ????????? ????????? ?????????
  value?: string;
  // Input Field??? ?????? ?????? ????????? ?????? ?????? Right Label??? ????????? ?????? ?????? ???????????? ??????.
  // Only Possibly Numeric Type Value
  maxValue?: string;
  // Input Field??? ?????? 'large', 'medium', 'small'
  size?: string;
  // Input Field ????????? ????????? ???????????? Label Text
  labelRight?: string;
  // Input Field??? ???????????? Placeholder Text
  placeholder?: string;
  // Input Field??? Blur ????????? ???, Label??? ???????????? ??????,
  fixed?: boolean;
  // Input Field??? ???????????? ????????? ??? ???????????? ?????? Callback
  onChange?: (value: string) => void;
  // // Input Field??? Validation??? ?????? ?????? ?????? ?????? Text??? Callback
  // onMessages?: (value: string[]) => void;
  // // Input Field??? ????????? ????????? ????????? ??? ???????????? Callback
  // onClickRightLabel?: (value: string) => void;
  // // Input Field??? Validation ????????? ???????????? ??????
  // validations?: Validation[];
};

export const BasicInput = ({
  uniqueKey,
  type = 'text',
  value = '',
  maxValue = '',
  size = 'medium',
  placeholder = '',
  onChange = () => undefined,
  ...rest
}: BasicInputProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <StyledInput
      id={uniqueKey}
      type={type}
      value={value}
      size={size}
      placeholder={placeholder}
      onChange={handleChange}
      {...rest}
    />
  );
};
// placeholder={isFocused || label === "" ? placeholder : ""}
// {/* // <StyledContainer> */}
// {/* <Label htmlFor={uniqueKey} size={size} focused={isFocused}>{label}</Label> */}
// {/* { children } </StyledContainer> */}
