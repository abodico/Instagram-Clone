"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import Avatar from "@mui/material/Avatar";
import { images } from "../constants";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Divider,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ForumIcon from "@mui/icons-material/Forum";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
// import CancelIcon from "@mui/icons-material/CancelRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import DropDown from "./DropDown";
const drawerWidth = 240,
  drawerSmall = 70;
const MyDrawer = ({ sideCardsToggle, setSideCardsToggle }) => {
  const pathName = usePathname();
  const [value, setValue] = useState("recents");
  const [active, setActive] = useState(pathName);
  const [focused, setFocused] = useState(false);
  const { data } = useSelector((state) => state.seen);
  const notificationsData = data.slice(0, 5);
  const router = useRouter();
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  const iconsList = [
    {
      title: "Home",
      icon: <HomeOutlinedIcon fontSize="inherit" />,
      filledIcon: <HomeIcon fontSize="inherit" />,
      links: "/",
    },
    {
      title: "Search",
      icon: <SearchOutlinedIcon fontSize="inherit" />,
      filledIcon: <SearchIcon fontSize="inherit" />,
      links: "/search",
    },
    {
      title: "Explore",
      icon: <ExploreOutlinedIcon fontSize="inherit" />,
      filledIcon: <ExploreIcon fontSize="inherit" />,
      links: "/explore",
    },
    {
      title: "Reels",
      icon: <VideoLibraryOutlinedIcon fontSize="inherit" />,
      filledIcon: <VideoLibraryIcon fontSize="inherit" />,
      links: "/reels",
    },
    {
      title: "Messages",
      icon: <ForumOutlinedIcon fontSize="inherit" />,
      filledIcon: <ForumIcon fontSize="inherit" />,
      links: "/direct",
    },
    {
      title: "Notifications",
      icon: <FavoriteBorderOutlinedIcon fontSize="inherit" />,
      filledIcon: <FavoriteIcon fontSize="inherit" />,
      links: "/notifications",
    },
    {
      title: "Profile",
      icon: (
        <Avatar sx={[{ width: 27, height: 27 }]}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={images.me}
            alt="profile"
          />
        </Avatar>
      ),
      filledIcon: (
        <Avatar sx={[{ width: 27, height: 27 }, { border: "2px solid black" }]}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={images.me}
            alt="profile"
          />
        </Avatar>
      ),
      links: "/profile",
    },
  ];

  const navigateToPage = (item) => {
    setSideCardsToggle("");
    setActive(item.links);
    router.push(item.links);
  };
  const cardsOpening = (title) => {
    setSideCardsToggle(title[0]);
    setTimeout(() => setSideCardsToggle(title), 200);
  };
  return (
    // there is no drawer in the stories page
    <Box sx={{ display: pathName == "/stories" && "none" }}>
      {/* lg devices  */}

      {/* now the logic of this drawer */}
      {/* in the direct page it's not displayed */}
      {/* else */}
      {/* it's in the large screens */}
      <Box
        sx={{
          display:
            pathName == "/direct"
              ? "none"
              : { lg: "flex", xs: "none ", zIndex: "10" },
        }}
      >
        <CssBaseline />
        <Box sx={{ width: drawerWidth }}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                overflow: "hidden",
              },
              display:
                (sideCardsToggle == "Search" ||
                  sideCardsToggle == "Notifications") &&
                "none",
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar variant="dense" />
            <List
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <ListItem sx={{ mt: -4, ml: "20px", mb: "20px", mr: "0" }}>
                <IconButton onClick={() => navigateToPage(iconsList[0])}>
                  <svg
                    aria-label="Instagram"
                    className="_ab6-"
                    color="rgb(0, 0, 0)"
                    fill="rgb(0, 0, 0)"
                    height="29"
                    role="img"
                    viewBox="32 4 113 32"
                    width="103"
                  >
                    <path
                      clipRule="evenodd"
                      d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </IconButton>
              </ListItem>
              {iconsList.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{ paddingTop: "0", paddingBottom: "0" }}
                  onClick={() => {
                    item.title != "Notifications" && item.title != "Search"
                      ? navigateToPage(item)
                      : sideCardsToggle === item.title
                      ? setSideCardsToggle("")
                      : cardsOpening(item.title);
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon
                      sx={[
                        { color: "black", fontSize: "30px" },
                        active == item.links && {
                          fontWeight: "500",
                        },
                      ]}
                    >
                      {active == item.links && sideCardsToggle == ""
                        ? item.filledIcon
                        : sideCardsToggle == item.title
                        ? item.filledIcon
                        : item.icon}
                    </ListItemIcon>
                    <ListItemText>
                      <Box
                        sx={[
                          active == item.links && {
                            fontWeight: "500",
                          },
                        ]}
                      >
                        {item.title}
                      </Box>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {/* <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                mt: "30px",
                mx: "16px",
                maxHeight: "50px",
              }}
            >
              <ListItemIcon>
                <MenuIcon sx={{ fontSize: "30px", color: "#000" }} />
              </ListItemIcon>
              <Typography component="p" color="black">
                More
              </Typography>
            </ListItemButton> */}
            <DropDown />
          </Drawer>
        </Box>
        <Box
          sx={{
            height: "100vh",
            width: "400px",
            position: "fixed",
            left: "70px",
            borderRadius: "0 10px 10px 0",
            translate:
              !sideCardsToggle.includes("S") &&
              !sideCardsToggle.includes("N") &&
              "-400px",
            transition: "translate 0.3s ease-out",
            backgroundColor: "#fff",
            pt: "32px",
            zIndex: "20",
            overflowY: "scroll",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              mb: "32px",
              px: "16px",
            }}
          >
            {sideCardsToggle}
          </Typography>
          {sideCardsToggle.includes("S") ? (
            <>
              <Box
                sx={{ p: "0 12px 24px 12px", borderBottom: "1px solid #ccc" }}
              >
                <Input
                  fullWidth
                  size="small"
                  placeholder="Search"
                  autoFocus
                  sx={{
                    backgroundColor: "#efefef",
                    p: "6px 12px ",
                    borderRadius: "8px",
                    "&:focus": { border: "none" },
                  }}
                  endAdornment={
                    <InputAdornment
                      position="end"
                      sx={{ cursor: "pointer" }}
                      onClick={(e) =>
                        (e.currentTarget.parentElement.parentElement.childNodes[0].childNodes[0].value =
                          "")
                      }
                    >
                      {/* <CancelIcon
                        sx={{ color: "#c8c8c8", fontSize: "16px" }}
                      /> */}
                    </InputAdornment>
                  }
                />
              </Box>
              <Box sx={{ p: "24px 12px 0", flexGrow: "1" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Recent
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#aaa",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    translate: "-50%  ",
                  }}
                >
                  No recent searches.
                </Typography>
              </Box>
            </>
          ) : (
            sideCardsToggle.includes("N") && (
              <>
                <Typography
                  variant="h4"
                  sx={{ fontSize: "16px", fontWeight: "bold", mx: "16px" }}
                >
                  This week
                </Typography>
                <Box
                  sx={{
                    px: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
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
                        <span
                          style={{ fontSize: "14px", whiteSpace: "pre-wrap" }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            {item.user}
                          </span>
                          , started following you.
                          <span style={{ color: "#aaa" }}>2h</span>
                        </span>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{ p: "4px 8px", fontSize: "12px" }}
                      >
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
                        <span
                          style={{ fontSize: "14px", whiteSpace: "pre-wrap" }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            {item.user}
                          </span>
                          , started following you.
                          <span style={{ color: "#aaa" }}>2h</span>
                        </span>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{ p: "4px 8px", fontSize: "12px" }}
                      >
                        Follow
                      </Button>
                    </Box>
                  ))}
                </Box>
              </>
            )
          )}
        </Box>
      </Box>
      {/* medium devices   */}

      {/* the logic of this drawer */}
      {/* in the direct page it's displayed starting from the small screens up forwards */}
      {/* in the explore page in the large screens if a side card is opened it appears */}
      {/* and it's shown in the medium screens */}
      {/* else */}
      {/* it appears starting from small screens and appears in large ones if some card is opened also */}

      <Box
        sx={{
          zIndex: "10",
          display:
            pathName == "/direct"
              ? { sm: "flex ", xs: "none" }
              : pathName == "/explore"
              ? {
                  lg: sideCardsToggle.length < 2 && "none",
                  md: "flex ",
                  xs: "none",
                }
              : {
                  lg: sideCardsToggle.length < 2 && "none",
                  sm: "flex ",
                  xs: "none",
                },
        }}
      >
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerSmall,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerSmall,
              boxSizing: "border-box",
              overflow: "hidden",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar variant="dense" />
          <List
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <ListItem
              sx={{
                px: 0,
                mt: -4,
                mb: "20px",
                mr: "0",
                px: "5px",
              }}
            >
              <ListItemButton
                sx={{ borderRadius: "10px" }}
                onClick={() => navigateToPage(iconsList[0])}
              >
                <ListItemIcon>
                  <InstagramIcon sx={{ color: "black", fontSize: "30px" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            {iconsList.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  p: 0,
                  px: "5px",
                }}
                onClick={() => {
                  item.title != "Notifications" && item.title != "Search"
                    ? navigateToPage(item)
                    : sideCardsToggle === item.title
                    ? setSideCardsToggle("")
                    : setSideCardsToggle(item.title);
                }}
              >
                <ListItemButton sx={{ borderRadius: "10px" }}>
                  <ListItemIcon sx={{ color: "black", fontSize: "30px" }}>
                    {active == item.links && sideCardsToggle == ""
                      ? item.filledIcon
                      : sideCardsToggle == item.title
                      ? item.filledIcon
                      : item.icon}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* <ListItem sx={{ p: 0, mt: 2, px: "5px" }}>
            <ListItemButton sx={{ borderRadius: "10px" }}>
              <ListItemIcon>
                <MenuIcon sx={{ fontSize: "30px", color: "#000" }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem> */}
          <DropDown />
        </Drawer>
        <Box
          sx={{
            height: "100vh",
            width: "400px",
            position: "fixed",
            left: "70px",
            borderRadius: "0 10px 10px 0",
            translate:
              sideCardsToggle != "Search" &&
              sideCardsToggle != "Notifications" &&
              "-400px",
            transition: "translate 0.3s ease-out",
            backgroundColor: "#fff",
            pt: "32px",
            zIndex: "20",
            overflowY: "scroll",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              mb: "32px",
              px: "16px",
            }}
          >
            {sideCardsToggle}
          </Typography>
          {sideCardsToggle == "Search" ? (
            <>
              <Box
                sx={{ p: "0 12px 24px 12px", borderBottom: "1px solid #ccc" }}
              >
                <Input
                  fullWidth
                  size="small"
                  placeholder="Search"
                  autoFocus
                  sx={{
                    backgroundColor: "#efefef",
                    p: "6px 12px ",
                    borderRadius: "8px",
                    "&:focus": { border: "none" },
                  }}
                  endAdornment={
                    <InputAdornment
                      position="end"
                      sx={{ cursor: "pointer" }}
                      onClick={(e) =>
                        (e.currentTarget.parentElement.parentElement.childNodes[0].childNodes[0].value =
                          "")
                      }
                    >
                      <CancelIcon sx={{ color: "#c8c8c8", fontSize: "16px" }} />
                    </InputAdornment>
                  }
                />
              </Box>
              <Box sx={{ p: "24px 12px 0", flexGrow: "1" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Recent
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#aaa",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    translate: "-50%  ",
                  }}
                >
                  No recent searches.
                </Typography>
              </Box>
            </>
          ) : (
            sideCardsToggle === "Notifications" && (
              <>
                <Typography
                  variant="h4"
                  sx={{ fontSize: "16px", fontWeight: "bold", mx: "16px" }}
                >
                  This week
                </Typography>
                <Box
                  sx={{
                    px: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
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
                        <span
                          style={{ fontSize: "14px", whiteSpace: "pre-wrap" }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            {item.user}
                          </span>
                          , started following you.
                          <span style={{ color: "#aaa" }}>2h</span>
                        </span>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{ p: "4px 8px", fontSize: "12px" }}
                      >
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
                        <span
                          style={{ fontSize: "14px", whiteSpace: "pre-wrap" }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            {item.user}
                          </span>
                          , started following you.
                          <span style={{ color: "#aaa" }}>2h</span>
                        </span>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{ p: "4px 8px", fontSize: "12px" }}
                      >
                        Follow
                      </Button>
                    </Box>
                  ))}
                </Box>
              </>
            )
          )}
        </Box>
      </Box>
      {/* Small Devices */}

      {/* the logic of this drawer */}
      {/* in the explore page it appears in sm and xs screens */}
      {/* else */}
      {/* it just appears in sm screens */}
      <>
        <BottomNavigation
          sx={{
            width: "100%",
            display:
              pathName == "/explore"
                ? { md: "none", xs: "block" }
                : { sm: "none", xs: "block" },
            position: "fixed",
            bottom: 0,
            left: 0,
            px: "16px",
            boxSizing: "border-box",
            borderTop: "1px solid #373737",
            zIndex: "10",
          }}
          value={value}
          onChange={handleChange}
        >
          {iconsList.map(
            (item, index) =>
              item.title != "Search" &&
              item.title != "Notifications" && (
                <BottomNavigationAction
                  sx={{
                    fontSize: "25px",
                    width: "calc(100%/6)",
                    mt: "12px",
                    mx: "0",
                    "&:hover": { scale: "1.1" },
                    transition: "scale 0.1s 0s  linear",
                    padding: "0",
                    minWidth: "calc(100% /5)",
                    width: "fit-content",
                  }}
                  key={index}
                  value={item.links}
                  icon={item.icon}
                  onClick={() => {
                    item.title != "Notifications" && item.title != "Search"
                      ? navigateToPage(item)
                      : sideCardsToggle === item.title
                      ? setSideCardsToggle("")
                      : setSideCardsToggle(item.title);
                  }}
                />
              )
          )}
        </BottomNavigation>
        <Box
          sx={{
            flexGrow: 1,
            display:
              pathName == "/explore"
                ? { md: "none", xs: "block" }
                : { sm: "none", xs: "block" },
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: "24",
          }}
        >
          <AppBar position="relative" sx={{ backgroundColor: "#fff" }}>
            <Toolbar>
              <IconButton sx={{ mr: 2 }} onClick={() => router.push("/")}>
                <svg
                  aria-label="Instagram"
                  className="_ab6-"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="29"
                  role="img"
                  viewBox="32 4 113 32"
                  width="103"
                >
                  <path
                    clipRule="evenodd"
                    d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </IconButton>
              <Input
                sx={{
                  p: "2px 12px",
                  backgroundColor: "#efefef",
                  borderRadius: "6px",
                  flexGrow: "1",
                  border: "none",
                  minWidth: "150px",
                }}
                placeholder="Search"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment
                    position="end"
                    onClick={(e) => {
                      e.currentTarget.parentElement.children[1].value = "";
                      setFocused((prev) => !prev);
                    }}
                  >
                    {focused && (
                      <CancelIcon
                        sx={{
                          fontSize: "16px",
                          color: "#c8c8c8",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </InputAdornment>
                }
                onFocus={() => setFocused((prev) => !prev)}
                // onBlur={() => setFocused((prev) => !prev)}
              />
              <IconButton
                onClick={() => router.push("/notifications")}
                sx={{ ml: "4px" }}
              >
                <FavoriteBorderOutlinedIcon
                  sx={{
                    fontSize: "25px",
                    "&:hover": { scale: "1.1" },
                    transition: "scale 0.1s 0s  linear",
                  }}
                />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    </Box>
  );
};

export default MyDrawer;
