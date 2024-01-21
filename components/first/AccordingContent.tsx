"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const AccordingContent = () => {
  const theme = useTheme();
  const isMediumScreen: boolean = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Stack
        sx={{ p: 2 }}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={4}
      >
        <Typography
          fontWeight={"bold"}
          align="center"
          variant={isMediumScreen ? "h4" : "h3"}
        >
          Frequently Asked Questions
        </Typography>
        <Stack spacing={2}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              What is Netflix ?
            </AccordionSummary>
            <AccordionDetails>
              Netflix is one of the world is leading entertainment services with
              over 247 million paid memberships in over 190 countries enjoying
              TV series
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              How much does netflix cost ?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Accordion Actions
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </>
  );
};

export default AccordingContent;
