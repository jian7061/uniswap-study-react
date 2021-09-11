import styled, { css } from 'styled-components';

const StyledLogo = styled.div`
    & > svg {
        ${props => {
            return css`
                fill: ${props.theme.text};
            `;
        }}
        height: 100%;
        width: 100%;
    }
`;

export const Logo = (): JSX.Element => {
    return <StyledLogo>
        <svg width='65' height='65' viewBox='0 0 121 121' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M58.4957 19.0429C62.7679 19.0429 65.9339 21.6596 65.9339 21.6596C77.5392 28.4819 83.4994 40.5533 86.4614 53.3613C89.0793 64.6816 89.4017 79.1003 84.3133 89.6539C80.465 97.6318 73.668 102.447 65.6997 102.447C63.3137 102.447 60.8238 102.016 58.2772 101.109C50.4755 98.331 47.1247 90.7648 48.8285 83.2433C49.6448 79.6401 51.0624 76.9727 52.6973 73.5821C54.2321 70.4003 56.6881 67.8138 57.6952 64.3254C59.5438 57.9256 58.1456 50.1058 54.2115 44.6479C51.9656 41.5302 48.5121 39.0922 47.2237 35.349C46.2167 32.422 45.91 28.3129 46.9726 25.439C48.0605 22.4976 50.7376 20.3325 53.8589 19.6418C55.3152 19.3194 56.9839 19.0441 58.4885 19.0429C58.4909 19.0429 58.4933 19.0429 58.4957 19.0429ZM58.4957 15.4204H58.4885C56.9417 15.4216 55.122 15.6523 53.0753 16.1051C48.6993 17.0735 45.0587 20.1683 43.5747 24.182C42.0363 28.3431 42.7342 33.4327 43.798 36.5275C44.8812 39.6767 47.0052 41.9637 48.8792 43.9826C49.7703 44.9426 50.612 45.8482 51.2713 46.7647C54.5702 51.3411 55.7523 57.9932 54.2139 63.3183C53.7478 64.9339 52.7686 66.459 51.7313 68.0722C50.944 69.2979 50.1302 70.5633 49.4335 72.0075L48.8973 73.1136C47.4652 76.0562 46.1128 78.8347 45.2954 82.4427C43.0856 92.1884 47.9253 101.269 57.0612 104.522C59.9472 105.549 62.8524 106.07 65.6997 106.07C74.9165 106.07 83.0937 100.521 87.576 91.2273C92.383 81.2569 93.2862 66.7971 89.991 52.5462C86.2936 36.5625 78.8904 25.1637 67.9794 18.6613C66.9446 17.8753 63.3233 15.4204 58.4957 15.4204Z'/>
            <path d='M111.265 42.2402C111.281 42.0663 111.26 41.8152 111.093 41.5423C110.712 40.918 109.781 40.5316 108.169 40.3227C106.977 40.1682 96.3097 38.8182 89.0719 38.9317C84.807 38.9993 77.0633 40.1054 71.4086 40.912C70.6648 41.0182 69.9463 41.1209 69.2725 41.2151C69.2629 41.0822 60.3515 40.9422 60.3431 41.0931C59.5944 40.9675 58.7938 40.8311 57.9643 40.691C52.1598 39.7045 44.2097 38.3521 40.3312 38.4137C34.2925 38.509 21.47 39.3495 21.3408 39.3579L21.3203 39.3603C20.5282 39.434 19.3581 40.0945 19.3835 41.6171L19.4426 45.4172L19.4475 45.4534C19.5102 45.998 19.9655 47.0304 21.2708 47.4421C21.8806 47.6353 22.1873 49.3657 22.3901 50.5092C22.4324 50.7483 22.4735 50.9813 22.5169 51.2047C22.5568 51.416 22.6159 51.7396 22.6884 52.1514C23.5747 57.107 24.6421 62.3644 25.8448 63.7772C25.9897 63.9487 26.1346 64.1346 26.2879 64.3326C27.6126 66.0376 29.425 68.3729 37.5092 69.2085C38.6684 69.3293 39.8301 69.38 40.9615 69.3619C48.0398 69.2496 54.1389 66.4011 56.88 61.9261C59.7429 57.2531 61.4769 51.8652 61.5494 51.6382L61.5602 51.5971C61.5868 51.4993 61.7353 51.0127 62.1773 50.5514C62.2425 50.6287 67.2017 50.6915 67.2367 50.6541C67.2814 50.7132 67.3055 50.7603 67.3164 50.7797C67.5832 51.538 71.3772 62.1893 75.4839 65.6573C79.3117 68.891 83.806 70.4196 89.2228 70.3339C89.4438 70.3315 89.6612 70.3255 89.8797 70.3158C94.2654 70.1516 97.7526 69.5913 101.578 67.3103C103.232 66.3238 104.661 63.741 105.828 59.6331C106.67 56.6674 107.061 54.0097 107.077 53.8986L107.081 53.8757L107.083 53.8527C107.205 52.4037 107.642 49.8282 108.303 49.0843C108.933 48.3743 109.391 48.1533 109.835 47.9408C110.075 47.8249 110.324 47.7054 110.58 47.523C110.843 47.3347 111.542 46.8348 111.265 42.2402Z'/>
            <path d='M53.2562 34.9916C52.5993 34.9916 51.9654 34.633 51.6442 34.0099C49.5057 29.8597 46.8553 27.5099 43.7641 27.0233C38.061 26.1286 32.5512 31.5406 32.4957 31.5961C31.7869 32.3013 30.6409 32.3001 29.9333 31.5913C29.2282 30.8825 29.2294 29.7354 29.9382 29.029C30.2159 28.7525 36.8246 22.2646 44.3243 23.4455C48.6218 24.1205 52.167 27.1163 54.8634 32.3508C55.321 33.2395 54.9721 34.3323 54.0833 34.7912C53.8189 34.9276 53.5351 34.9916 53.2562 34.9916Z'/>
            <path d='M95.6673 32.7276C95.2435 32.7276 94.8184 32.5791 94.4743 32.2784C92.9782 31.0854 80.8622 28.8648 77.0622 31.5949C76.2519 32.1794 75.1205 31.9946 74.5349 31.1808C73.9516 30.3693 74.1364 29.2367 74.949 28.6535C80.3272 24.7907 94.3234 27.3276 96.8627 29.5555C97.6138 30.2148 97.6899 31.3595 97.0306 32.1118C96.672 32.5187 96.1708 32.7276 95.6673 32.7276Z'/>
        </svg>
    </StyledLogo>
}
