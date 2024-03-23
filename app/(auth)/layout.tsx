"use client";
import { Stack } from "@mui/material";
import Image from "next/image";
import BackgroundImage from "@/public/login.jpg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack>
      {/* Background Image */}
      <Image
        src={BackgroundImage}
        fill
        priority
        style={{ objectFit: "cover" }}
        alt="BackgroundImage"
      />
      <Stack
        sx={{
          position: "fixed",
          backgroundColor: "#000",
          opacity: 0.5,
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: 1,
          backgroundColor: "#000",
          borderRadius: 4,
          opacity: 0.7,
          width: { xs: "70%", sm: "50%", md: "40%", lg: "30%" },
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
}
