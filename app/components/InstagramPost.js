/* eslint-disable @next/next/no-img-element */
import {
  Face,
  FavoriteBorder,
  ModeCommentOutlined,
  SendOutlined,
} from "@mui/icons-material";
import { extendTheme } from "@mui/joy";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  CardContent,
  CardHeader,
  CardMedia,
  Input,
  InputAdornment,
  Link,
  keyframes,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

const InstagramPost = (props) => {
  const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          gradient: {
            instagram:
              "linear-gradient(to bottom left , #5851db 0%, #833ab4 15%, #c13584 30%, #e1306c 45%, #fd1d1d 60%, #f56040 75%, #fcaf45 90%)",
          },
        },
      },
    },
  });
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const postMedia = (
    <Box
      sx={{
        maxWidth: "100%",
        mx: "auto",
      }}
    >
      <Slider {...settings}>
        {props.media.map((item, index) => (
          <Box
            key={index + 20}
            sx={{
              position: "relative",
              maxHeight: "600px",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <Image
              src={item}
              alt={item.src}
              style={{
                height: "auto",
                width: "100%",
                verticalAlign: "base-line",
                objectPosition: "center",
                objectFit: "cover",
                maxHeight: "50%",
                padding: "0 2px",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );

  const caption = props.caption;
  const [more, setMore] = React.useState(false);
  const router = useRouter();
  return (
    <Card
      variant="plain"
      sx={{
        minWidth: "240px",
        maxWidth: { lg: "70%", md: "50%", sm: "400px", xs: "90%" },
        mx: "auto",
      }}
    >
      <CardHeader
        sx={{ px: "0" }}
        avatar={
          <Avatar
            sx={{
              width: "40px",
              height: "40px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
              alt={props.user}
              src={props.image}
            />
          </Avatar>
        }
        title={
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {props.user}
              </Typography>
              {props.verified && (
                <VerifiedIcon
                  sx={{ color: theme.palette.primary[400], fontSize: "14px" }}
                />
              )}
              <FiberManualRecordIcon
                sx={{
                  fontSize: "3px",
                  mx: "2px",
                  color: "#737373",
                }}
              />
              <Typography
                variant="caption"
                sx={{ color: "#737373", fontSize: "12px" }}
              >
                {props.time}
              </Typography>
            </Box>
            <IconButton aria-label="more">
              <MoreHorizIcon sx={{ width: "fit-content" }} />
            </IconButton>
          </Box>
        }
      />
      <CardMedia sx={{ maxWidth: "100%", height: "auto" }}>
        {postMedia}
      </CardMedia>
      <CardContent sx={{ pt: "8px", px: "0" }}>
        <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
          <IconButton
            variant="plain"
            size="sm"
            sx={{ color: "black", pl: "0" }}
          >
            <FavoriteBorder />
          </IconButton>
          <IconButton variant="plain" size="sm" sx={{ color: "black" }}>
            <ModeCommentOutlined />
          </IconButton>
          <IconButton variant="plain" size="sm" sx={{ color: "black" }}>
            <SendOutlined />
          </IconButton>
        </Box>
        <Box
          sx={{
            fontSize: "14px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          {props.likes} likes
        </Box>
        <Box sx={{}}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              py: "8px",
              display: "inline",
              pr: "8px",
            }}
          >
            {props.user}
          </Typography>
          <Typography
            variant="caption"
            color="initial"
            sx={{
              display: "inline",
              fontSize: "14px",
            }}
          >
            {!more
              ? caption
                  ?.split("")
                  .map((item, index) => (index < 100 ? item : ""))
              : caption}
            {!more ? (
              <Typography
                variant="caption"
                color="initial"
                sx={{
                  color: "#737373",
                  cursor: "pointer",
                  display: caption?.split("").length < 100 && "none",
                }}
                onClick={() => setMore(true)}
              >
                more...
              </Typography>
            ) : (
              " "
            )}
          </Typography>
        </Box>
        <Box
          orientation="horizontal"
          sx={{
            display: "flex",
            gap: 1,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "16px",
          }}
        >
          <Input
            variant="plain"
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  size="sm"
                  variant="plain"
                  color="neutral"
                  sx={{ ml: -1 }}
                >
                  <Face />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                {" "}
                <Link disabled underline="none" role="button">
                  Post
                </Link>
              </InputAdornment>
            }
            size="sm"
            placeholder="Add a comment…"
            sx={{
              width: "100%",
              px: 0,
              "--Input-focusedThickness": "0px",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default InstagramPost;
