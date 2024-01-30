"use client";
import useUser from "@/lib/app/hooks/useUser";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

function RightContent() {
  const { user } = useUser();
  return (
    <Stack spacing={5}>
      <Stack sx={{ px: 5 }} direction={"row"} spacing={3}>
        <Stack>
          <Avatar
            alt="Remy Sharp"
            src="/images/header-image.png"
            sx={{ width: 90, height: 90 }}
          />
        </Stack>
        <Stack spacing={2}>
          <Typography fontWeight={"bold"} variant="h5">
            Amin Ghasempoor
          </Typography>
          <Typography fontWeight={"bold"} variant="body1">
            user email
          </Typography>
        </Stack>
      </Stack>
      <Stack
        spacing={4}
        sx={{
          px: 5,
          pb: 2,
        }}
      >
        {/* {user.favorite_movies.length === 0 ? (<Stack></Stack>) : ()} */}
        <Stack spacing={5} direction={"row"} alignItems={"start"}>
          <img
            src="/images/header-image.png"
            alt="picture"
            style={{ maxHeight: 400, maxWidth: 350, borderRadius: 5 }}
          />
          <Stack sx={{ pr: 4, maxWidth: 700 }} spacing={3}>
            <Typography fontWeight={"bold"} variant="h5">
              Amin Ghasempoor
            </Typography>
            <Typography textAlign={"justify"} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              rerum, dolorem dignissimos nobis voluptas amet iusto officia
              deleniti quod quasi quas magni quisquam vero tempore fuga
            </Typography>
            <Typography variant="caption">2024-12-25</Typography>
          </Stack>
        </Stack>
        <Stack spacing={5} direction={"row"} alignItems={"start"}>
          <img
            src="/images/header-image.png"
            alt="picture"
            style={{ maxHeight: 400, maxWidth: 350, borderRadius: 5 }}
          />
          <Stack sx={{ pr: 4, maxWidth: 700 }} spacing={3}>
            <Typography fontWeight={"bold"} variant="h5">
              Amin Ghasempoor
            </Typography>
            <Typography textAlign={"justify"} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              rerum, dolorem dignissimos nobis voluptas amet iusto officia
              deleniti quod quasi quas magni quisquam vero tempore fuga
            </Typography>
            <Typography variant="caption">2024-12-25</Typography>
          </Stack>
        </Stack>
        <Stack spacing={5} direction={"row"} alignItems={"start"}>
          <img
            src="/images/header-image.png"
            alt="picture"
            style={{ maxHeight: 400, maxWidth: 350, borderRadius: 5 }}
          />
          <Stack sx={{ pr: 4, maxWidth: 700 }} spacing={3}>
            <Typography fontWeight={"bold"} variant="h5">
              Amin Ghasempoor
            </Typography>
            <Typography textAlign={"justify"} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              rerum, dolorem dignissimos nobis voluptas amet iusto officia
              deleniti quod quasi quas magni quisquam vero tempore fuga
            </Typography>
            <Typography variant="caption">2024-12-25</Typography>
          </Stack>
        </Stack>
        <Stack spacing={5} direction={"row"} alignItems={"start"}>
          <img
            src="/images/header-image.png"
            alt="picture"
            style={{ maxHeight: 400, maxWidth: 350, borderRadius: 5 }}
          />
          <Stack sx={{ pr: 4, maxWidth: 700 }} spacing={3}>
            <Typography fontWeight={"bold"} variant="h5">
              Amin Ghasempoor
            </Typography>
            <Typography textAlign={"justify"} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              rerum, dolorem dignissimos nobis voluptas amet iusto officia
              deleniti quod quasi quas magni quisquam vero tempore fuga
            </Typography>
            <Typography variant="caption">2024-12-25</Typography>
          </Stack>
        </Stack>
        <Stack spacing={5} direction={"row"} alignItems={"start"}>
          <img
            src="/images/header-image.png"
            alt="picture"
            style={{ maxHeight: 400, maxWidth: 350, borderRadius: 5 }}
          />
          <Stack sx={{ pr: 4, maxWidth: 700 }} spacing={3}>
            <Typography fontWeight={"bold"} variant="h5">
              Amin Ghasempoor
            </Typography>
            <Typography textAlign={"justify"} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              rerum, dolorem dignissimos nobis voluptas amet iusto officia
              deleniti quod quasi quas magni quisquam vero tempore fuga
            </Typography>
            <Typography variant="caption">2024-12-25</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default RightContent;
