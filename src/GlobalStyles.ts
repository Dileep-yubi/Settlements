import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Black";
        src: local("SofiaPro-Black"),
        url("/fonts/SofiaPro-Black.otf") format("opentype");
    }
    @font-face {
        font-family: "Blackitalic";
        src: local("SofiaPro-Blackitalic"),
        url("/fonts/SofiaPro-Blackitalic.otf") format("opentype");
    } 
    @font-face {
        font-family: "Bold";
        src: local("SofiaPro-Bold"),
        url("/fonts/SofiaPro-Bold.otf") format("opentype");
    }
    @font-face {
        font-family: "Bolditalic";
        src: local("SofiaPro-Bolditalic"),
        url("/fonts/SofiaPro-Bolditalic.otf") format("opentype");
    }
    @font-face {
        font-family: "ExtraLight";
        src: local("SofiaPro-ExtraLight"),
        url("/fonts/SofiaPro-ExtraLight.otf") format("opentype");
    }
    @font-face {
        font-family: "ExtraLightItalic";
        src: local("SofiaPro-ExtraLightItalic"),
        url("/fonts/SofiaPro-ExtraLightItalic.otf") format("opentype");
    }
    @font-face {
        font-family: "Light";
        src: local("SofiaPro-Light"),
        url("/fonts/SofiaPro-Light.otf") format("opentype");
    }
    @font-face {
        font-family: "Lightitalic";
        src: local("SofiaPro-Lightitalic"),
        url("fonts/SofiaPro-Lightitalic.otf") format("opentype");
    }
    @font-face {
        font-family: "Medium";
        src: local("SofiaPro-Medium"),
        url("/fonts/SofiaPro-Medium.otf") format("opentype");
    }
    @font-face {
        font-family: "Mediumitalic";
        src: local("SofiaPro-Mediumitalic"),
        url("/fonts/SofiaPro-Mediumitalic.otf") format("opentype");
    }
    @font-face {
        font-family: "Regular";
        src: local("SofiaPro-Regular"),
        url("/fonts/SofiaPro-Regular.otf") format("opentype");
    }
    @font-face {
        font-family: "Regularitalic";
        src: local("SofiaPro-Regularitalic"),
        url("/fonts/SofiaPro-Regularitalic.otf") format("opentype");
    }
    @font-face {
        font-family: "SemiBold";
        src: local("SofiaPro-SemiBold"),
        url("/fonts/SofiaPro-SemiBold.otf") format("opentype");
    }
    @font-face {
        font-family: "SemiBolditalic";
        src: local("SofiaPro-SemiBolditalic"),
        url("/fonts/SofiaPro-SemiBolditalic.otf") format("opentype");
    }
    @font-face {
        font-family: "UltraLighht";
        src: local("SofiaPro-UltraLighht"),
        url("/fonts/SofiaPro-UltraLighht.otf") format("opentype");
    }
    @font-face {
        font-family: "UltraLightitalic";
        src: local("SofiaPro-UltraLightitalic"),
        url("/fonts/SofiaPro-UltraLightitalic.otf") format("opentype");
    }
    body{
        margin: 0;
        background-color: #F5F5F5;
    }
    div {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
