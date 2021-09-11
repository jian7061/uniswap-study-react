import styled, { css } from 'styled-components';

const StyledClose = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    & > svg {
        ${props => {
            return css`
                stroke: ${props.theme.text};
            `;
        }}
        height: ${props => props.theme.size.body};
        width: ${props => props.theme.size.body};
    }
`;

export const Close = ({ onClick }): JSX.Element => {
    return <StyledClose onClick={onClick}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.5" y1="-1.5" x2="23.5" y2="-1.5" transform="matrix(0.700909 0.71325 0.71325 -0.700909 2.12897 0)" stroke-width="3" stroke-linecap="round"/>
            <line x1="1.5" y1="-1.5" x2="23.5" y2="-1.5" transform="matrix(0.700909 -0.71325 -0.71325 -0.700909 0 17.9561)" stroke-width="3" stroke-linecap="round"/>
        </svg>
    </StyledClose>
}