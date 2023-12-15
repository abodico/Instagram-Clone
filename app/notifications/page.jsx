"use client";
import { Avatar, Box, Button, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const { data } = useSelector((state) => state.seen);
  const notificationsData = data.slice(0, 5);
  return (
    <Box sx={{ pl: { sm: "69px" }, py: { sm: "0", xs: "56px " } }}>
      <Box
        sx={{
          p: "12px 16px",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid #aaa",
        }}
      >
        <IconButton
          aria-label="here"
          sx={{ position: "absolute", left: "12px" }}
          onClick={() => {
            router.back();
          }}
        >
          <ArrowBackIosNewIcon sx={{ color: "#000" }} />
        </IconButton>
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Notifications
        </Typography>
      </Box>
      <Typography
        variant="h4"
        sx={{ fontSize: "16px", fontWeight: "bold", pt: "16px", mx: "16px" }}
      >
        This week
      </Typography>
      <Box
        sx={{
          px: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          py: "16px",
          borderBottom: "1px solid #aaa",
        }}
      >
        {notificationsData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: "50px",
                  height: "50px",
                  position: "relative",
                }}
              >
                <Image
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    padding: "2px",
                  }}
                  alt={item.user}
                  src={item.image}
                />
              </Avatar>
              <span style={{ fontSize: "16px", whiteSpace: "pre-wrap" }}>
                <span style={{ fontWeight: "bold" }}>{item.user}</span>, started
                following you.
                <span style={{ color: "#aaa" }}>2h</span>
              </span>
            </Box>
            <Button variant="contained" sx={{ p: "4px 8px", fontSize: "12px" }}>
              Follow
            </Button>
          </Box>
        ))}
      </Box>
      <Typography
        variant="h4"
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          mx: "16px",
          pt: "16px",
        }}
      >
        This month
      </Typography>
      <Box
        sx={{
          px: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          py: "16px",
        }}
      >
        {notificationsData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: "50px",
                  height: "50px",
                  position: "relative",
                }}
              >
                <Image
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    padding: "2px",
                  }}
                  alt={item.user}
                  src={item.image}
                />
              </Avatar>
              <span style={{ fontSize: "16px", whiteSpace: "pre-wrap" }}>
                <span style={{ fontWeight: "bold" }}>{item.user}</span>, started
                following you.
                <span style={{ color: "#aaa" }}>2h</span>
              </span>
            </Box>
            <Button variant="contained" sx={{ p: "4px 8px", fontSize: "12px" }}>
              Follow
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Page;
