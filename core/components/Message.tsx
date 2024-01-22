import FullPageLayout from "@/layouts/FullPageLayout";
import LaodingSvg from "./svgs/LoadingSvg";
import CenterLayout from "@/layouts/CenterLayout";
import React from "react";
interface Props {
  text: React.ReactNode;
  actions?: React.ReactNode;
}

const Message = ({ text, actions }: Props) => {
  return (
    <FullPageLayout sx={{ p: 1 }}>
      <CenterLayout spacing={3}>
        <LaodingSvg width={100} height={100} />
        {text}
        {actions}
      </CenterLayout>
    </FullPageLayout>
  );
};

export default Message;
