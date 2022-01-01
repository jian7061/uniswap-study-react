import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Validation, ERROR } from './common';
import { InputField } from './common/InputField';
import { hexToRgbWithOpacity } from './utils';

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 1rem;
`;

const StyledMessage = styled.div`
  display: inline-flex;
  position: relative;
  width: 100%;

  & > ul {
    position: absolute;
    list-style-type: none;
    padding-left: 1rem;
    margin: 0.619rem 0;

    & > li {
      position: relative;
      ${({ theme }) => {
        return css`
          color: ${hexToRgbWithOpacity(theme.error, 0.8)};
          font-size: ${theme.size.small};
        `;
      }}
    }
  }
`;

const AddressCheck: Validation = (value: string): ERROR => {
  if (/^(0x)[a-fA-F0-9]{40}$/.exec(value) === null) return [true, '이더리움 주소 형식과 다릅니다'];
  return [false, ''];
};

export const AddressInput = ({ uniqueKey, ...props }): JSX.Element => {
  const [address, setAddress] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const changeHandler = (value: string): void => {
    setAddress(value);
  };

  const onMessage = (errors: string[]): void => {
    setErrors(errors);
    console.log(errors);
  };

  return (
    <AddressContainer>
      <InputField
        uniqueKey={uniqueKey}
        value={address}
        label='Ethereum Address'
        placeholder='Etherem Address'
        onChange={changeHandler}
        onMessages={onMessage}
        validations={[AddressCheck]}
        {...props}
      />
      <StyledMessage>
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </StyledMessage>
    </AddressContainer>
  );
};
