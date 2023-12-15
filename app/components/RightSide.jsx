import React from "react";
import { images } from "../constants";
import Image from "next/image";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const RightSide = () => {
  const people = [
    {
      image: images.dina,
      name: "dina",
      follow: ["abdalmoamn.abbara", "abdalmoamn.abbara"],
    },
    {
      image: images.ammar,
      name: "ammar",
      follow: ["abdalmoamn.abbara", "abdalmoamn.abbara", "abdalmoamn.abbara"],
    },
    {
      image: images.ehsan,
      name: "ehsan",
      follow: [
        "abdalmoamn.abbara",
        "abdalmoamn.abbara",
        "abdalmoamn.abbara",
        "abdalmoamn.abbara",
      ],
    },
    {
      image: images.rami,
      name: "rami",
      follow: ["abdalmoamn.abbara", "abdalmoamn.abbara", "abdalmoamn.abbara"],
    },
    {
      image: images.tarek,
      name: "tarek",
      follow: ["abdalmoamn.abbara", "abdalmoamn.abbara"],
    },
  ];
  return (
    <Box
      sx={{
        display: { lg: "flex", xs: "none" },
        flexDirection: "column",
        width: "304px",
        boxSizing: "border-box",
        ml: "16px",
        float: "right",
      }}
    >
      <List>
        <ListItem sx={{ display: "flex", gap: "10px", px: 0, flexGrow: "1" }}>
          <Avatar sx={{ width: "49px", height: "49px" }}>
            <Image
              src={images.me}
              alt="abode"
              style={{ width: "100%", height: "100%" }}
            />
          </Avatar>
          <Box sx={{ display: "flex", flexGrow: "1" }}>
            <Box sx={{ maxWidth: "200px", flexGrow: "1" }}>
              <Typography
                component="h6"
                color="initial"
                sx={{ fontSize: "14px" }}
              >
                abdalmoamn.abbara
              </Typography>
              <Typography
                component="p"
                color="initial"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  color: "#737373",
                  fontSize: "16px",
                  maxWidth: "100%",
                }}
              >
                عبدالمؤمن عباره
              </Typography>
            </Box>
            <Button sx={{ fontSize: "10px" }}>Switch</Button>
          </Box>
        </ListItem>
        <ListItem
          sx={{
            px: 0,
            flexGrow: "1",
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "100%",
          }}
        >
          <Typography
            component="h6"
            color="initial"
            sx={{ fontSize: "14px", color: "#737373", fontWeight: "bold" }}
          >
            Suggested for you
          </Typography>
          <Button sx={{ fontSize: "10px", color: "#000" }}>See All</Button>
        </ListItem>
        {people.map((item, index) => (
          <ListItem
            key={index + 10}
            sx={{
              display: "flex",
              gap: "10px",
              px: 0,
              boxSizing: "border-box",
            }}
          >
            <Avatar sx={{ width: "49px", height: "49px" }}>
              <Image
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "100%" }}
              />
            </Avatar>
            <Box sx={{ display: "flex", flexGrow: "1" }}>
              <Box sx={{ flexGrow: "1", maxWidth: "184px" }}>
                <Typography
                  component="h6"
                  color="initial"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  {item.name}
                </Typography>
                <Typography
                  component="p"
                  color="initial"
                  sx={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    color: "#737373",
                    fontSize: "12px",
                    maxWidth: "100%",
                  }}
                >
                  Followed by {item.follow[0]}
                  {item.follow.length > 1 &&
                    ` + ${item.follow.length - 1} others`}
                </Typography>
              </Box>
              <Button sx={{ fontSize: "10px", boxSizing: "border-box" }}>
                Follow
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
      <Box sx={{ maxWidth: "304px", display: "flex", flexWrap: "wrap", mt: 3 }}>
        {[
          "About",
          "Help",
          "Press",
          "API",
          "Jobs",
          "Privacy",
          "Terms",
          "Locations",
          "Language",
          "Meta Verified",
        ].map((item, index) => (
          <Link
            key={index}
            sx={{
              fontSize: "12px",
              color: "#c7c7c7",
              cursor: "pointer",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
            src="#"
          >
            {item}
            {index < 9 && (
              <FiberManualRecordIcon sx={{ fontSize: "3px", mx: "2px" }} />
            )}
          </Link>
        ))}
        <Typography variant="caption" color="#c7c7c7" sx={{ mt: "16px" }}>
          © 2023 INSTAGRAM FROM META
        </Typography>
      </Box>
    </Box>
  );
};

export default RightSide;
