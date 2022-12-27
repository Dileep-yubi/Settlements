import { Header } from "components/EmiPlanComponent/EmiPlanComponent";
import { FlexDiv } from "components/StyledComponents";
import React from "react";
export type EmiPlanHeaderProps = {
  title: Header;
  isSelected: boolean;
};
export const EmiPlanHeader: React.FC<EmiPlanHeaderProps> = ({
  title,
  isSelected,
}: EmiPlanHeaderProps) => {
  return (
    <FlexDiv
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <span>{`${title.currency} ${title.value} for ${title.period} @${title.interest} p.a`}</span>
      {isSelected && (
        <input type="radio" name="emi" checked={isSelected} readOnly />
      )}
    </FlexDiv>
  );
};
