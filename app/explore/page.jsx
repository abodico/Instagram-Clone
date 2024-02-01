/* eslint-disable @next/next/no-img-element */
import { Box, Container } from "@mui/material";
import React from "react";
import { images } from "../constants";
import {
  Favorite,
  ModeComment,
  SmartDisplay,
  PhotoLibrary,
} from "@mui/icons-material";
const im = "image";
const vid = "video";
const data = [
  {
    media: [
      {
        type: im,
        source: images.explore,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore2,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: vid,
        poster: images.exploreVid,
      },
      {
        type: im,
        source: images.explore,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore3,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore2,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore3,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore2,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: vid,
        poster: images.exploreVid2,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore3,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: vid,
        poster: images.exploreVid,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore2,
      },
    ],
    likes: 53,
    comments: 24,
  },
  {
    media: [
      {
        type: im,
        source: images.explore3,
      },
    ],
    likes: 53,
    comments: 24,
  },
];
const page = () => {
  const arrayOfArrays = [];
  for (let i = 0; i < data.length; i += 5) {
    const array = data.slice(i, i + 5);
    (i / 5) % 2 == 1 && array.reverse();
    arrayOfArrays.push(array);
  }
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          mt: { lg: "32px", xs: "64px" },
          mb: { lg: "0", xs: "56px" },
        }}
      >
        {arrayOfArrays.map((ele, ndx) => (
          <Box
            key={ndx}
            sx={{
              display: "grid",
              width: "100%",
              maxHeight: { lg: "95vh" },
              gridTemplateColumns: "repeat(3,minmax(33%,1fr))",
              gridTemplateRows: " repeat(auto-fill, minmax(50%, 1fr))",
              pl: { lg: "240px", md: "70px" },
              gap: "2px",
            }}
          >
            {ele.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    gridRow:
                      ndx % 2 == 0
                        ? index == 2 && "span 2/span 2"
                        : ndx % 2 && index == 0 && "span 2/span 2",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    p: "2px",
                    position: "relative",
                    backgroundImage: `url(${
                      item.media[0].type == im
                        ? item.media[0].source.src
                        : item.media[0].poster.src
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* icon */}
                  <Box
                    sx={{
                      color: "#fff",
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                    }}
                  >
                    {item.media.length > 1 ? (
                      <PhotoLibrary />
                    ) : item.media[0].type == vid ? (
                      <SmartDisplay />
                    ) : (
                      ""
                    )}
                  </Box>
                  {/* overlay */}
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
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                    >
                      <ModeComment />
                      {item.comments}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        ))}
      </Container>
    </>
  );
};

export default page;
