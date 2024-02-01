"use client";
// /* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  Box,
  Typography,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { images } from "../constants";
import {
  Settings,
  GridOn,
  VideoLibraryOutlined,
  BookmarkBorder,
  AccountBoxOutlined,
  Favorite,
  PhotoLibrary,
} from "@mui/icons-material";
const Page = () => {
  const posts = [
    { image: images.profile1, likes: 107, multiple: true },
    { image: images.profile2, likes: 148, multiple: true },
    { image: images.profile3, likes: 139, multiple: true },
    { image: images.profile4, likes: 73, multiple: false },
    { image: images.profile5, likes: 99, multiple: false },
    { image: images.profile6, likes: 126, multiple: true },
    { image: images.profile7, likes: 108, multiple: true },
    { image: images.profile8, likes: 97, multiple: true },
    { image: images.profile9, likes: 94, multiple: false },
  ];
  const gridRef = useRef();
  const [widthState, setWidthState] = useState(0);
  // observing the gird width and setting widthState
  useEffect(() => {
    const observer = new ResizeObserver(() =>
      setWidthState(gridRef.current && gridRef.current.clientWidth)
    );
    observer.observe(gridRef.current);
    setWidthState(gridRef.current && gridRef.current.clientWidth);
  }, [widthState]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        pl: { lg: "325px", sm: "90px" },
        pr: { lg: "85px", md: "20px" },
        py: { sm: "32px", xs: "80px" },
        mx: "auto",
      }}
    >
      <Box sx={{ width: "100% " }}>
        {/* bio section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { lg: "96px", md: "64px", xs: "32px" },
            justifyContent: { md: "center" },
            pb: "32px",
            width: "100%",
          }}
        >
          <Avatar
            sx={{
              width: "150px",
              height: "150px",
              position: "relative",
              cursor: "pointer",
              display: { md: "block", xs: "none" },
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
              alt="user"
              src={images.me}
            />
          </Avatar>
          {/* text content */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box sx={{ display: "flex", gap: "32px" }}>
              <Avatar
                sx={{
                  width: { sm: "100px", xs: "70px" },
                  height: { sm: "100px", xs: "70px" },
                  position: "relative",
                  cursor: "pointer",
                  display: { md: "none", xs: "block" },
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  alt="user"
                  src={images.me}
                />
              </Avatar>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { md: "center" },
                  gap: "12px",
                  flexWrap: { md: "nowrap", xs: "wrap" },
                  flexDirection: { md: "row", xs: "column" },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", display: "flex" }}
                >
                  abdalmoamn.abbara
                  <IconButton
                    sx={{ p: "0", display: { md: "none", xs: "block" } }}
                  >
                    <Settings />
                  </IconButton>
                </Typography>
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#eee",
                      color: "#000",
                      "&:hover": { backgroundColor: "#ddd" },
                    }}
                  >
                    Edit profile
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#eee",
                      color: "#000",
                      "&:hover": { backgroundColor: "#ddd" },
                    }}
                  >
                    View archive
                  </Button>
                </Box>
                <IconButton
                  sx={{ p: "0", display: { md: "block", xs: "none" } }}
                >
                  <Settings sx={{}} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                display: { md: "flex", xs: "none" },
                gap: "32px",
              }}
            >
              <Typography variant="body1" sx={{}}>
                <span style={{ fontWeight: "bolder" }}>84</span> posts
              </Typography>
              <Typography variant="body1" sx={{}}>
                <span style={{ fontWeight: "bolder" }}>769</span> followers
              </Typography>
              <Typography variant="body1" sx={{}}>
                <span style={{ fontWeight: "bolder" }}>710</span> following
              </Typography>
            </Box>
            <Box sx={{}}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                عبدالمؤمن عباره
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                IT Engineering💻💪
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                Stay strong💪
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                Sometimes LIFE is about risking everything for a DREAM no one
                can see but YOU
                <br /> 24/2🎂
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderTop: "1px solid #ccc" }}>
          <Box
            sx={{
              gap: "32px",
              display: { md: "none", xs: "flex" },
              justifyContent: "space-around",
              py: "8px",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "inherit" }}>
              84{" "}
              <span style={{ color: "#737373", display: "block" }}>posts</span>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "inherit" }}>
              769{" "}
              <span style={{ color: "#737373", display: "block" }}>
                followers
              </span>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "inherit" }}>
              710{" "}
              <span style={{ color: "#737373", display: "block" }}>
                following
              </span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "64px",
              justifyContent: "center",
              borderTop: { sm: "none", xs: "1px solid #ccc" },
            }}
          >
            {[
              {
                title: "POSTS",
                icon: (
                  <GridOn
                    sx={{
                      fontSize: { sm: "16px", xs: "24px" },
                      mx: { sm: "0", xs: "auto" },
                    }}
                  />
                ),
              },
              {
                title: "REELS",
                icon: (
                  <VideoLibraryOutlined
                    sx={{
                      fontSize: { sm: "16px", xs: "24px" },
                      mx: { sm: "0", xs: "auto" },
                    }}
                    color="inherit"
                  />
                ),
              },
              {
                title: "SAVED",
                icon: (
                  <BookmarkBorder
                    sx={{
                      fontSize: { sm: "16px", xs: "24px" },
                      mx: { sm: "0", xs: "auto" },
                    }}
                    color="inherit"
                  />
                ),
              },
              {
                title: "TAGGED",
                icon: (
                  <AccountBoxOutlined
                    sx={{
                      fontSize: { sm: "16px", xs: "24px" },
                      mx: { sm: "0", xs: "auto" },
                    }}
                    color="inherit"
                  />
                ),
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                  py: "14px",
                  color: index != 0 && "#737373",
                  borderTop: index == 0 && "1px solid #000 ",
                  width: { sm: "auto", xs: "25%" },
                }}
              >
                {item.icon}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    display: { sm: "block", xs: "none" },
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
          {/* posts grid */}
          <Box
            ref={gridRef}
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(3, ${(widthState - 8) / 3}px)`,
              gridTemplateRows: `repeat(${Math.floor((posts.length + 2) / 3)},${
                (widthState - 8) / 3
              }px)`,
              gap: "4px",
            }}
          >
            {posts.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  backgroundImage: `url(${item.image.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <PhotoLibrary
                  sx={{
                    color: "#fff",
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    display: !item.multiple && "none",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0,0.3)",
                    display: "flex",
                    opacity: "0",
                    "&:hover": { opacity: "1" },
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    gap: "16px",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    <Favorite />
                    {item.likes}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
