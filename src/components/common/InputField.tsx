import { useState } from "react";
import styled, { css } from "styled-components";
import { BasicInput } from "./BasicInput";
import { Validation, Status } from './index';
import { hexToRgbWithOpacity } from '../utils';

const colorStyles = css`
  ${({ theme, states}) => {
    const textColor = theme.text;
    const backgroundColor = states === Status.Success ? theme.success : states === Status.Error ? theme.error : theme.flipground;

    return css`
      color: ${textColor};
      border: 2px solid;
      border-color: ${hexToRgbWithOpacity(backgroundColor, 0.5)};

      &:hover {
        border-color: ${hexToRgbWithOpacity(backgroundColor, 0.8)};
      }

      &:focus {
        border-color: ${hexToRgbWithOpacity(backgroundColor, 1)};
      }
    `;
  }}
`;

const Label = styled.label`
  font-weight: 400;

  ${props => 
    props.size === 'large' && 
    css`
      font-size: ${props.theme.size.body};
      margin-left: ${props.theme.size.body};
      margin-right: ${props.theme.size.body};
      margin-top: ${props.theme.size.small};
      `
  }
  
  ${props => 
    props.size === 'medium' && 
    css`
      font-size: ${props.theme.size.small};
      margin-left: ${props.theme.size.small};
      margin-right: ${props.theme.size.small};
      margin-top: ${props.theme.size.pretitle};
      `
  }

  /* ${props => 
    props.size === 'large' && 
    css`
      margin-left: 1.62rem;
      font-size: ${props.theme.size.h3};
      ${props.focused === true &&
        css`
          transform: translateY(-34px) translateX(0px);
          font-size: ${props.theme.size.small};
          padding: 0 6px;
          z-index: 501;
          background-color: ${props.theme.background};
        `}
    `}

  ${props => 
    props.size === 'medium' && 
    css`
      margin-left: 1rem;
      font-size: ${props.theme.size.body};
      ${props.focused === true &&
        css`
          transform: translateY(-23px) translateX(0px);
          font-size: ${props.theme.size.small};
          padding: 0 4px;
          z-index: 501;
          background-color: ${props.theme.background};
        `}
    `}

  ${props => 
    props.size === 'small' && 
    css`
      margin-left: 0.875rem;
      font-size: ${props.theme.size.small};

      ${props.focused === true &&
        css`
          transform: translateY(-20px) translateX(2px);
          font-size: ${props.theme.size.small};
          padding: 0 4px;
          z-index: 501;
          background-color: ${props.theme.background};
        `}
    `} */
`;

const StyledContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  border-radius: 10px;

  ${colorStyles}
`;

type InputFieldProps = {
  // 라벨 클릭으로 입력되기 위한 for
  uniqueKey: string;

  // 메시지 validation 
  children?: JSX.Element;

  size?: string;

  // 값
  value?: string;

  label?: string;

  placeholder?: string;

  onChange?: (value: string) => void;
  onMessages?: (value: string[]) => void;
  // Input Field의 Validation을 통해 Input Field의 상태 Callback
  onStatus?: (status: Status) => void;
  validations?: Validation[];
}

export const InputField = ({
  uniqueKey,
  children,
  size='medium', 
  value='',
  label='',
  placeholder='',
  onChange = () => undefined,
  onMessages = () => undefined,
  onStatus = () => undefined,
  validations = [
    () => {
      return [false, ""];
    },
  ],
  ...rest
}: InputFieldProps): JSX.Element => {
  const [states, setStates] = useState<Status>(Status.Normal);

  const handleValidate = (value: string, logics: Validation[]): string[] => {
    const errors: string[] = new Array<string>();
    logics.forEach((logic) => {
      const [isSuccess, ErrorMessage] = logic(value);
      if (isSuccess) {
        errors.push(ErrorMessage);
      }
    });
    return errors;
  };

  const handleChange = (value: string): void => {
    const errors: string[] = handleValidate(value, validations);
    if (errors.length > 0) {
      onMessages(errors);
      setStates(Status.Error);
    } else {
      onMessages([]);
      setStates(Status.Success);
    }
    onChange(value);
  }

  return (
      <StyledContainer states={states}>
        <Label htmlFor={uniqueKey} size={size}>{label}</Label>
        <BasicInput
          uniqueKey={uniqueKey}
          value={value}
          size={size}
          placeholder={placeholder}
          onChange={handleChange}
          {...rest}/>
      </StyledContainer>
  );
}