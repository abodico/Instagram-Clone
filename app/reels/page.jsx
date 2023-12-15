"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import {
  FavoriteBorder,
  ModeCommentOutlined,
  SendOutlined,
  BookmarkBorder,
  MoreHoriz,
  FiberManualRecord,
} from "@mui/icons-material";
import { images } from "../constants";
import Image from "next/image";
import Video from "../components/Video";

const data = [
  {
    vid: "https://assets.codepen.io/6093409/river.mp4",
    poster: "https://assets.codepen.io/6093409/river.jpg",
    likes: "1.3M",
    comments: "133k",
    user: "Zakaria Haroun",
    img: images.altayeb,
    bio: "This is a bio for a video in my Instagram clone !",
  },
  {
    vid: "https://assets.codepen.io/6093409/river.mp4",
    poster: "https://assets.codepen.io/6093409/river.jpg",
    likes: "1.3M",
    comments: "133k",
    user: "Zakaria Haroun",
    img: images.altayeb,
    bio: "This is a bio for a video in my Instagram clone !",
  },
  {
    vid: "https://assets.codepen.io/6093409/river.mp4",
    poster: "https://assets.codepen.io/6093409/river.jpg",
    likes: "1.3M",
    comments: "133k",
    user: "Zakaria Haroun",
    img: images.altayeb,
    bio: "This is a bio for a video in my Instagram clone !",
  },
  {
    vid: "https://assets.codepen.io/6093409/river.mp4",
    poster: "https://assets.codepen.io/6093409/river.jpg",
    likes: "1.3M",
    comments: "133k",
    user: "Zakaria Haroun",
    img: images.altayeb,
    bio: "This is a bio for a video in my Instagram clone !",
  },
  {
    vid: "https://assets.codepen.io/6093409/river.mp4",
    poster: "https://assets.codepen.io/6093409/river.jpg",
    likes: "1.3M",
    comments: "133k",
    user: "Zakaria Haroun",
    img: images.altayeb,
    bio: "This is a bio for a video in my Instagram clone !",
  },
];
const Page = () => {
  const scrollRef = useRef();
  const debounce = (func, delay) => {
    let timeoutId;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func();
      }, delay);
    };
  };
  const handleScroll = () => {
    if (
      scrollRef.current.scrollTop % scrollRef.current.clientHeight >=
      scrollRef.current.clientHeight / 2
    ) {
      scrollRef.current.scrollBy({
        top:
          scrollRef.current.clientHeight -
          (scrollRef.current.scrollTop % scrollRef.current.clientHeight),
        left: 0,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        top: -(scrollRef.current.scrollTop % scrollRef.current.clientHeight),
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        padding: { lg: "0px 0 16px 239px", sm: "0px 0 16px 69px" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          id="reels"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "scroll",
            width: "100%",
            height: "100vh",
          }}
          onScroll={debounce(handleScroll, 100)}
          ref={scrollRef}
        >
          {data.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-end",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100vh",
                  boxSizing: "border-box",
                  padding: "16px 0",
                }}
              >
                <Video src={item.vid} />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    p: "12px 8px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "12px",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "37px",
                        height: "37px",
                        position: "relative",
                      }}
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          backgroundColor: "white",
                        }}
                        alt={item.user}
                        src={item.img}
                      />
                    </Avatar>
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      {item.user}
                    </Typography>
                    <FiberManualRecord
                      sx={{ color: "#fff", fontSize: "5px" }}
                    />
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#Fff",
                        color: "#Fff",
                        p: "2px 7px",
                        fontSize: "12px",
                      }}
                    >
                      Follow
                    </Button>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ color: "#fff", fontSize: "14px" }}
                  >
                    {item.bio}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  color: "#262626",
                }}
              >
                {[
                  { icon: FavoriteBorder, num: item.likes },
                  { icon: ModeCommentOutlined, num: item.comments },
                ].map((it, ind) => (
                  <Box
                    key={ind}
                    sx={{
                      textAlign: "center",
                      "&:hover": { color: "#8e8e8e" },
                      cursor: "pointer",
                    }}
                  >
                    <IconButton color="inherit" sx={{ p: "4px" }}>
                      <it.icon color="inherit" />
                    </IconButton>
                    <Typography variant="body2" color="inherit">
                      {it.num}
                    </Typography>
                  </Box>
                ))}
                <IconButton
                  color="inherit"
                  sx={{ p: "4px", "&:hover": { color: "#8e8e8e" } }}
                >
                  <SendOutlined color="inherit" />
                </IconButton>
                <IconButton
                  color="inherit"
                  sx={{ p: "4px", "&:hover": { color: "#8e8e8e" } }}
                >
                  <BookmarkBorder color="inherit" />
                </IconButton>
                <IconButton
                  color="inherit"
                  sx={{ p: "4px", "&:hover": { color: "#8e8e8e" } }}
                >
                  <MoreHoriz color="inherit" />
                </IconButton>
                <Image
                  width="6"
                  height="6"
                  src={item.img.src}
                  alt={item.user}
                  style={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
