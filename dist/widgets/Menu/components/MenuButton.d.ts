/// <reference types="react" />
declare const MenuButton: import("styled-components").StyledComponent<{
    <E extends import("react").ElementType<any> = "button">(props: import("../../..").ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "bbtColor";
        scale: "md";
        disabled: boolean;
    };
}, import("styled-components").DefaultTheme, {}, never>;
export default MenuButton;
