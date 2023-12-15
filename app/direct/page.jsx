"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  TextField,
  InputBase,
  Input,
  InputAdornment,
  Button,
} from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { images } from "../constants";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { init, getEmojiDataFromNative } from "emoji-mart";
init({ data });
const chats = [
  {
    name: "Zakaria",
    image: images.altayeb,

    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Mohammad",
    image: images.ahmad,

    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Radwan",
    image: images.ammar,

    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Obaida",
    image: images.antika,
    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Dina",
    image: images.dina,
    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Ehsan",
    image: images.ehsan,
    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Mohannad",
    image: images.hussam,
    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Kamal",
    image: images.kamal,
    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Tarek",
    image: images.tarek,
    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Kinan",
    image: images.kinan,
    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Jamal",
    image: images.mahmoud,
    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "Rami",
    image: images.rami,
    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
  {
    name: "solaiman",
    image: images.solaiman,
    seen: true,
    messages: [
      {
        message: "Hey!",
        sender: 1,
        time: "12h",
      },
      {
        message: "Hi",
        sender: 2,
        time: "10h",
      },
      {
        message: "How are you",
        sender: 1,
        time: "12h",
      },
      {
        message: "I`m fine, thanks!",
        sender: 2,
        time: "10h",
      },
    ],
  },
];
const Page = () => {
  const [chat, setChat] = useState(-1);
  const [inputValue, setInputValue] = useState("");
  const [emojiToggle, setEmojiToggle] = useState(false);
  const [time, setTime] = useState(0);
  const handleEmojiSelect = (emoji) => {
    const sym = emoji.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji2 = String.fromCodePoint(...codeArray);
    setInputValue(inputValue + emoji2);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  const calc = (when) => {
    const secondsAgo = time - when;
    // console.log(time, when);
    let result;
    if (secondsAgo < 60) {
      result = secondsAgo + " s";
    } else if (secondsAgo < 3600) {
      const minutesAgo = Math.floor(secondsAgo / 60);
      result = minutesAgo + " m";
    } else if (secondsAgo < 86400) {
      const hoursAgo = Math.floor(secondsAgo / 3600);
      result = hoursAgo + " h";
    }
    return result;
  };
  return (
    <Box
      sx={{
        maxHeight: "100vh",
        display: "flex",
        ml: { sm: "69px" },
        boxSizing: "border-box",
        pb: { xs: "33px", sm: "0px" },
        pt: { xs: "56px", sm: "0px" },
      }}
    >
      {/* Chats sidebar */}
      <Box
        sx={{
          py: { sm: "32px " },
          width: { sm: "400px", xs: "125px" },
          borderRight: "1px solid #aaa",
          boxSizing: "border-box",
          maxHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { sm: "space-between", xs: "center" },
            alignItems: "center",
            px: "16px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              display: { sm: "block", xs: "none" },
            }}
          >
            abdalmoamn.abbara
          </Typography>
          <IconButton>
            <EmailIcon sx={{ fontSize: "20px", color: "#000" }} />
          </IconButton>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            px: "16px",
            pt: "16px",
            display: { sm: "block", xs: "none" },
          }}
        >
          Messages
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            height: { sm: "80vh", xs: "90vh" },
            pb: { xs: "56px", sm: "0" },
          }}
        >
          {chats.map((item, index) => (
            <Box
              key={index}
              sx={{
                p: "8px 16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: index == chat && "#efefef",
                cursor: "pointer",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
              onClick={() => setChat(index)}
            >
              <Avatar
                sx={{
                  width: "57px",
                  height: "57px",
                  position: "relative",
                }}
              >
                <Image
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  alt={item.name}
                  src={item.image}
                />
              </Avatar>
              <Box
                sx={{
                  display: { sm: "flex", xs: "none" },
                  flexDirection: "column",
                }}
              >
                <Typography variant="body1" sx={{ color: "#000" }}>
                  {item.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "12px",
                    color: item.seen ? "#737373" : "#000",
                  }}
                >
                  {item.messages[item.messages.length - 1].message
                    .split("")
                    .map((ch, i) => i < 40 && ch)}
                  {item.messages[item.messages.length - 1].message.split("")
                    .length >= 40 && "..."}{" "}
                  <FiberManualRecordIcon
                    sx={{ fontSize: "3px", color: "inherit", mb: "2px" }}
                  />{" "}
                  {calc(item.messages[item.messages.length - 1].time)
                    ? calc(item.messages[item.messages.length - 1].time)
                    : item.messages[item.messages.length - 1].time}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {/* chat */}
      {chat != -1 && (
        <Box
          sx={{
            position: "relative",
            flexGrow: "1",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* chat Header */}
          <Box
            sx={{
              maxWidth: "100%",
              maxHeight: "10vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexGrow: "1",
              borderBottom: "1px solid #aaa",
              p: { sm: "16px" },
              backgroundColor: "#fff",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
                  width={100}
                  height={100}
                  src={chats[chat].image.src}
                  alt={chats[chat].name}
                />
              </Avatar>
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  whiteSpace: "nowrap",
                  fontWeight: "500",
                }}
              >
                {chats[chat].name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <IconButton>
                <CallOutlinedIcon sx={{ color: "#000" }} />
              </IconButton>
              <IconButton>
                <VideocamOutlinedIcon sx={{ color: "#000" }} />
              </IconButton>
              <IconButton>
                <InfoOutlinedIcon sx={{ color: "#000" }} />
              </IconButton>
            </Box>
          </Box>
          {/* chat content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              flexGrow: "1",
              overflowY: "scroll",
              px: "12px",
              pt: "8px",
              gap: "1px",
            }}
          >
            {chats[chat].messages.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                  flexDirection: item.sender == 2 && "row-reverse",
                }}
              >
                {item.sender == 1 &&
                  (index == chats[chat].messages.length - 1 ||
                    chats[chat].messages[index + 1].sender == 2) && (
                    <Avatar
                      sx={{
                        width: "40px",
                        height: "40px",
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
                        width={100}
                        height={100}
                        alt={chats[chat].name}
                        src={chats[chat].image.src}
                      />
                    </Avatar>
                  )}
                <Typography
                  sx={{
                    borderRadius:
                      item.sender == 1
                        ? "3px 15px 15px 15px"
                        : "15px 3px 15px 15px",
                    float: item.sender == 1 ? "left" : "right",
                    p: "8px 12px",
                    backgroundColor: item.sender == 1 ? "#efefef" : "#3797f0",
                    color: item.sender == 1 ? "#000" : "#fff",
                    maxWidth: { md: "400px", sm: "300px", xs: "200px" },
                    wordBreak: "break-word",
                  }}
                >
                  {item.message}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: item.sender == 2 && "row-reverse",
                    "&:hover": { opacity: "1" },
                    opacity: "0",
                    flexGrow: "1",
                  }}
                >
                  <IconButton>
                    <SentimentSatisfiedAltIcon
                      sx={{ color: "#aaa", fontSize: "20px" }}
                    />
                  </IconButton>
                  <IconButton>
                    <ReplyIcon sx={{ color: "#aaa", fontSize: "20px" }} />
                  </IconButton>
                  <IconButton>
                    <MoreHorizIcon sx={{ color: "#aaa", fontSize: "20px" }} />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
          {/* Input */}
          <Box
            sx={{
              px: "16px",
              mb: { sm: "0px", xs: "28px" },
              // maxHeight: "100px",
              // overflowY: "scroll",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: "65px",
                zIndex: "10",
                boxShadow: "5px 3px 10px 5px rgba(0,0,0,0.250)",
                "&::before": {
                  content: '""',
                  width: "0px",
                  height: "0px",
                  display: "block",
                  position: "absolute",
                  bottom: "-20px",
                  zIndex: "20",
                  left: "16px",
                  borderWidth: "10px",
                  borderStyle: "solid",
                  borderColor: "#fff transparent transparent ",
                  boxSizing: "unset",
                },
                display: !emojiToggle ? "none" : "block",
              }}
            >
              <Picker
                data={data}
                onEmojiSelect={(e) => handleEmojiSelect(e)}
                searchPosition="none"
                previewPosition="none"
                skinTonePosition="none"
                navPosition="none"
                perLine="7"
                onClickOutside={() => emojiToggle && setEmojiToggle(false)}
              />
            </Box>

            <Input
              placeholder="Message..."
              fullWidth
              multiline
              sx={{
                border: "1px solid #aaa",
                borderRadius: "20px",
                p: "8px 4px",
                mb: "8px",
              }}
              startAdornment={
                <InputAdornment
                  position="start"
                  onClick={() => {
                    setEmojiToggle((prev) => !prev);
                  }}
                >
                  <IconButton sx={{ position: "relative" }}>
                    <SentimentSatisfiedAltIcon
                      sx={{ color: "#000", fontSize: "25px" }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  {!inputValue ? (
                    <Box sx={{ display: "flex" }}>
                      <IconButton>
                        <MicNoneOutlinedIcon
                          sx={{ color: "#000", fontSize: "25px" }}
                        />
                      </IconButton>
                      <IconButton>
                        <InsertPhotoOutlinedIcon
                          sx={{ color: "#000", fontSize: "25px" }}
                        />
                      </IconButton>
                      <IconButton>
                        <FavoriteBorderOutlinedIcon
                          sx={{ color: "#000", fontSize: "25px" }}
                        />
                      </IconButton>
                    </Box>
                  ) : (
                    <Button
                      variant="text"
                      sx={{ fontWeight: "bold", borderRadius: "15px" }}
                      color="primary"
                      onClick={() => {
                        const result = time;
                        chats[chat].messages.push({
                          message: inputValue,
                          sender: 2,
                          time: result,
                        });
                        // console.log(
                        //   chats[chat].messages[chats[chat].messages.length - 1]
                        //     .time
                        // );
                        setInputValue("");
                      }}
                    >
                      Send
                    </Button>
                  )}
                </InputAdornment>
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Page;
