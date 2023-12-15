import { createSlice } from "@reduxjs/toolkit";
import { images } from "@/app/constants";
const stories = [
  {
    user: "dinaibrahim",
    image: images.dina,
    stories: [
      { story: images.dinastory1, seen: true },
      { story: images.dinastory2, seen: true },
    ],
  },
  {
    user: "kamalallababidy",
    image: images.kamal,
    stories: [{ story: images.dinastory1, seen: false }],
  },
  {
    user: "am.ab",
    image: images.ammar,
    stories: [{ story: images.dinastory2, seen: false }],
  },
  {
    user: "antika.homs",
    image: images.antika,
    stories: [{ story: images.antikastory, seen: false }],
  },
  {
    user: "ehsandabdoub",
    image: images.ehsan,
    stories: [{ story: images.ehsanstory, seen: false }],
  },
  {
    user: "mahmoudharzeh",
    image: images.mahmoud,
    stories: [{ story: images.dinastory2, seen: false }],
  },
  {
    user: "ramialtaweel",
    image: images.rami,
    stories: [{ story: images.ramistory, seen: false }],
  },
  {
    user: "tarekalhajjeh",
    image: images.tarek,
    stories: [{ story: images.tarekstory, seen: false }],
  },
  {
    user: "solaimanaltush",
    image: images.solaiman,
    stories: [{ story: images.dinastory2, seen: false }],
  },
  {
    user: "altayebkakhia",
    image: images.altayeb,
    stories: [{ story: images.altayebstory, seen: false }],
  },
  {
    user: "ahmadmakawe",
    image: images.ahmad,
    stories: [{ story: images.ahmadstory, seen: false }],
  },
  {
    user: "huss7l",
    image: images.hussam,
    stories: [{ story: images.hussamstory, seen: false }],
  },
  {
    user: "kinan.basha",
    image: images.kinan,
    stories: [{ story: images.kinanstory, seen: false }],
  },
  {
    user: "ahmadmakawe",
    image: images.ahmad,
    stories: [{ story: images.ahmadstory, seen: false }],
  },
  {
    user: "dinaibrahim",
    image: images.dina,
    stories: [
      { story: images.dinastory1, seen: false },
      { story: images.dinastory2, seen: false },
    ],
  },
  {
    user: "kamalallababidy",
    image: images.kamal,
    stories: [{ story: images.dinastory1, seen: false }],
  },
  {
    user: "am.ab",
    image: images.ammar,
    stories: [{ story: images.dinastory2, seen: false }],
  },
  {
    user: "antika.homs",
    image: images.antika,
    stories: [{ story: images.antikastory, seen: false }],
  },
  {
    user: "ehsandabdoub",
    image: images.ehsan,
    stories: [{ story: images.ehsanstory, seen: false }],
  },
  {
    user: "mahmoudharzeh",
    image: images.mahmoud,
    stories: [{ story: images.dinastory2, seen: false }],
  },
  {
    user: "ramialtaweel",
    image: images.rami,
    stories: [{ story: images.ramistory, seen: false }],
  },
  {
    user: "tarekalhajjeh",
    image: images.tarek,
    stories: [{ story: images.tarekstory, seen: false }],
  },
  {
    user: "solaimanaltush",
    image: images.solaiman,
    stories: [{ story: images.dinastory1, seen: false }],
  },
  {
    user: "altayebkakhia",
    image: images.altayeb,
    stories: [{ story: images.altayebstory, seen: false }],
  },
  {
    user: "ahmadmakawe",
    image: images.ahmad,
    stories: [{ story: images.ahmadstory, seen: false }],
  },
  {
    user: "huss7l",
    image: images.hussam,
    stories: [{ story: images.hussamstory, seen: false }],
  },
  {
    user: "kinan.basha",
    image: images.kinan,
    stories: [{ story: images.kinanstory, seen: false }],
  },
  {
    user: "ahmadmakawe",
    image: images.ahmad,
    stories: [{ story: images.ahmadstory, seen: false }],
  },
];
const initialState = {
  data: stories,
};
const seenSlice = createSlice({
  initialState,
  name: "seen",
  reducers: {
    setSeen: (state, action) => {
      state.data[action.payload.personIndex].stories[
        action.payload.storyIndex
      ].seen = true;
    },
    sortData: (state, action) => {
      state.data.sort(
        (a, b) =>
          a.stories[a.stories.length - 1].seen -
          b.stories[b.stories.length - 1].seen
      );
    },
  },
});

export const { setSeen, sortData } = seenSlice.actions;
export default seenSlice.reducer;
