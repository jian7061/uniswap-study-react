import styled, { css } from 'styled-components';
import { hexToRgbWithOpacity } from '../utils';

const StyledWalletInfo = styled.div`
    font-family: Anonymous Pro;
    font-style: normal;
    font-size: 1rem;
    font-weight: bold;
    line-height: 26px;
    border-radius: 5px;
    padding: 0.89rem 1rem;
    ${({ theme, color }) => {
        const text = theme.text;
        const selected = theme.flipground;
        return css`
            color: ${text};
            background-color: ${hexToRgbWithOpacity(selected, 0.2)};
            filter: ${theme.mute};
        `
    }}
`;

export const WalletInfo = ({ children }):JSX.Element => {
    return <StyledWalletInfo>
            {children}
            </StyledWalletInfo>;
}