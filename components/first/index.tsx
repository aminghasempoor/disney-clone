import { Divider, Stack } from "@mui/material";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
import AccordingContent from "./AccordingContent";

const FirstComponent = () => {
  return (
    <Stack spacing={4}>
      <FirstContent />
      <SecondContent
        title="Enjoy on your TV"
        description="Watch on smart TVs, playstation, Xbox and more."
        imageURL="/images/feature-4.png"
        reverseLayout={false}
      />
      <Divider variant="middle" component="li" />
      <SecondContent
        title="Download your shows to watch offline"
        description="Save your favorites easily and always have it."
        imageURL="/images/feature-2.png"
        reverseLayout={true}
      />
      <Divider variant="middle" component="li" />
      <SecondContent
        title="Watch everywhere"
        description="Stream unlimitedmovies and TV shows"
        imageURL="/images/feature-3.png"
        reverseLayout={false}
      />
      <Divider variant="middle" component="li" />
      <AccordingContent />
    </Stack>
  );
};
export default FirstComponent;
