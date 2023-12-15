"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fade,
  List,
  ListItem,
  Typography,
  keyframes,
} from "@mui/material";
import Image from "next/image";
import { extendTheme } from "@mui/joy/styles";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setStoryIndex } from "../redux/slices/storySlice";
import { sortData } from "../redux/slices/seenSlice";
const AppBar = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.seen);
  useEffect(() => {
    dispatch(sortData());
  }, [dispatch]);

  const scrollRef = useRef();
  const [scrolled, setScrolled] = useState({
    curr: 0,
    scroll: null,
  });
  const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          gradient: {
            instagram:
              "linear-gradient(to bottom left , #5851db 0%, #833ab4 15%, #c13584 30%, #e1306c 45%, #fd1d1d 60%, #f56040 75%, #fcaf45 90%)",
            saw: "linear-gradient(to bottom left ,#737373)",
          },
        },
      },
    },
  });
  const rotateKyes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;
  useEffect(() => handleScroll(), []);
  const [story, setStory] = useState(-1);
  const handleScroll = () => {
    setScrolled({
      curr: scrollRef.current.scrollLeft,
      scroll: scrollRef.current.scrollWidth - scrollRef.current.clientWidth,
    });
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func();
      }, delay);
    };
  };
  const handleLeftClick = () => {
    scrollRef.current.scrollBy({
      top: 0,
      left: 80 - (scrolled.curr % 80) + 160,
      behavior: "smooth",
    });
    debounce(handleScroll, 100);
  };
  const handleRightClick = () => {
    scrollRef.current.scrollBy({
      top: 0,
      left: -(80 - (scrolled.curr % 80) + 160),
      behavior: "smooth",
    });
    debounce(handleScroll, 100);
  };
  const router = useRouter();
  const handleClick = (index) => {
    dispatch(setStoryIndex(index));
    setStory(index);
    setTimeout(() => {
      router.push("/stories");
      setStory(-1);
    }, 4500);
  };
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "650px",
        height: "fit-content",
        mx: "auto",
        px: { lg: "8px", xs: "0" },
      }}
    >
      <Fade in={scrolled.curr > 0} timeout={500}>
        <ArrowCircleLeftRounded
          onClick={() => handleRightClick()}
          sx={{
            color: "white",
            boxShadow: 3,
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "0",
            translate: "100% calc(-100% + 5px)",
            zIndex: "5",
          }}
        />
      </Fade>
      <List
        sx={{
          padding: "0px ",
          overflowX: "scroll",
          whiteSpace: "nowrap",
          display: "flex",
          margin: "0",
          maxWidth: "100%",
          gap: "15px",
        }}
        id="scroller"
        ref={scrollRef}
        onScroll={debounce(handleScroll, 100)}
      >
        {data.map((item, index) => (
          <ListItem
            sx={{
              width: "66px",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
            key={index}
            onClick={() => handleClick(index)}
          >
            <Avatar
              sx={{
                width: "57px",
                height: "57px",
                padding: "4px",
                backgroundImage: !item.stories[item.stories.length - 1].seen
                  ? theme.vars.palette.gradient.instagram
                  : theme.vars.palette.gradient.saw,
                position: "relative",
              }}
            >
              {story === index && (
                <Box
                  sx={{
                    boxSizing: "border-box",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    animation: `${rotateKyes} 1.5s infinite`,
                  }}
                >
                  <svg
                    className="svg"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="49"
                      fill="transparent"
                      stroke="rgba(255, 255, 255, 0.8)"
                      strokeWidth="5"
                    ></circle>
                  </svg>
                </Box>
              )}
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
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "66px",
                textAlign: "center",
              }}
            >
              {item.user}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Fade in={scrolled.curr < scrolled.scroll} timeout={500}>
        <ArrowCircleRightRounded
          onClick={() => handleLeftClick()}
          sx={{
            color: "white",
            boxShadow: "100px ",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            right: "0",
            translate: "-100% calc(-100% + 5px)",
            zIndex: "10",
            boxShadow: 3,
          }}
        />
      </Fade>
    </Box>
  );
};

export default AppBar;
