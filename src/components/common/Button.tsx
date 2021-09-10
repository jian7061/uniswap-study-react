import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme[color];
        return css`
            color: ${theme.white};
            background: ${selected};
            &:hover {
                background: ${lighten(0.05, selected)};
            }
            &:active {
                background: ${darken(0.02, selected)};
            }
            ${props =>
                props.outline &&
                css`
                    color: ${selected};
                    background: none;
                    border: 2px solid ${selected};
                    &:hover {
                        background: ${selected};
                        color: white;
                    }
                `}
        `;
    }}
`;

const sizeStyles = css`
    ${props =>
        props.size === 'large' &&
        css`
            line-height: 26px;
            font-size: 25.92px;
            padding: 16px 25.26px;
    `}

    ${props =>
        props.size === 'medium' &&
        css`
            line-height: 1rem;
            font-size: 1rem;
            padding: 0.8rem 1rem;
    `}

    ${props =>
        props.size === 'small' &&
        css`
            height: 1.75rem;
            font-size: 0.875rem;
    `}
`;

const StyledButton = styled.button`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: auto;
    border-radius: 30px;
    border: none;
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: bold;
    
    /* 크기 */
    ${sizeStyles}
    
    /* 색상 */
    ${colorStyles}

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;

export const Button = ({
  children,
  size = 'medium',
  color = 'primary',
  outline = false,
  ...rest
}): JSX.Element => {
  return <StyledButton
          color={color}
          size={size}
          outline={outline}
          {...rest}>
          {children}
          </StyledButton>;
};
