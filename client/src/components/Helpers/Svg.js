export function HeartSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" className="heart-svg">
            <path
                d="M12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function FilledHeartSvg() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="filled-heart-svg"
        >
            <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"
                fill="red"
            ></path>
        </svg>
    );
}

export function CartSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" className="cart-svg">
            <path
                d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function SearchSvg() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="search-svg"
        >
            <path
                d="M20.29 18.88l-5.56-5.56c1.13-1.55 1.63-3.58.98-5.74c-.68-2.23-2.57-3.98-4.85-4.44a6.511 6.511 0 0 0-7.72 7.72c.46 2.29 2.21 4.18 4.44 4.85c2.16.65 4.19.15 5.74-.98l5.56 5.56a.996.996 0 1 0 1.41-1.41zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14S5 11.99 5 9.5z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function ProfileSvg() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="profile-svg"
        >
            <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm6.39 8.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15c2.37 0 4.29.73 5.48 1.34c.32.16.52.5.52.88V18z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function MenuSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" className="nav-menu">
            <path
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function SortSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
                d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function FilterSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
                d="M7 6h10l-5.01 6.3L7 6zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function DownSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
                d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function BackArrowSvg() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="back-arrow-svg"
        >
            <path
                d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export function CloseButton() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
            className="close-button"
        >
            <g fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0zM7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346zm2.354 3.32a.5.5 0 0 1 0 .707L8.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L7.5 8.207L5.854 9.854a.5.5 0 0 1-.708-.708L6.793 7.5L5.146 5.854a.5.5 0 0 1 .708-.708L7.5 6.793l1.646-1.647a.5.5 0 0 1 .708 0z"
                    fill="#014d3f"
                ></path>
            </g>
        </svg>
    );
}

export function LoaderSvg() {
    return (
        <svg width="100px" height="100px" viewBox="0 0 100 100">
            <circle cx="84" cy="50" r="10" fill="#4cd4cc">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="0.25s"
                    calcMode="spline"
                    keyTimes="0;1"
                    values="10;0"
                    keySplines="0 0.5 0.5 1"
                    begin="0s"
                ></animate>
                <animate
                    attributeName="fill"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="discrete"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="#4cd4cc;#4cd4cc;#10808b;#049bba;#4cd4cc"
                    begin="0s"
                ></animate>
            </circle>
            <circle cx="16" cy="50" r="10" fill="#4cd4cc">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"
                ></animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"
                ></animate>
            </circle>
            <circle cx="50" cy="50" r="10" fill="#049bba">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.25s"
                ></animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.25s"
                ></animate>
            </circle>
            <circle cx="84" cy="50" r="10" fill="#10808b">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.5s"
                ></animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.5s"
                ></animate>
            </circle>
            <circle cx="16" cy="50" r="10" fill="#4cd4cc">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.75s"
                ></animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.75s"
                ></animate>
            </circle>
        </svg>
    );
}

export function RightArrow() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
                d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4z"
                fill="currentColor"
            ></path>
        </svg>
    );
}
