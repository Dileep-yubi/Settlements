import { H1, FlexDiv } from "../StyledComponents";
import "./Header.css";

export const Header = () => {
  return (
    <header className="headerContainer">
      <H1>SMARTBank</H1>
      <FlexDiv>
        <img
          src="https://cardinsider.com/wp-content/uploads/2021/10/slider.png.webp"
          alt="Fallback"
          height="150px"
          width="50%"
        />
        <div>Convert your outstanding amount into EMIs with ease!</div>
      </FlexDiv>
    </header>
  );
};
