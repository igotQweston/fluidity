import catppuccin1544x1544_circle from "./pictures/catppuccin-1544x1544_circle.png"
import pic_2 from "./pictures/pic_2.jpg"
import pic_3 from "./pictures/pic_3.jpg"
import pic_4 from "./pictures/pic_4.jpg"
import pic_5 from "./pictures/pic_5.jpg"
import pic_6 from "./pictures/pic_6.jpg"
import pic_7 from "./pictures/pic_7.jpg"
import pic_8 from "./pictures/pic_8.png"
import { queryToken } from "../Startpage/Searchbar/Searchbar"

export interface dataElem {
  label: string
  value: string
}

export interface linkGroup {
  title: string
  links: dataElem[]
}

/* eslint-disable */
/*
──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀▀▀▌
───▄▄██▌█ BEEP BEEP
▄▄▄▌▐██▌█ GAY PORN DELIVERY
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄​▄▄▄▄▄▄▌
▀(@)▀▀▀▀▀▀▀(@)(@)▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀(@)▀
*/
/* eslint-enable */

export const links: linkGroup[] = [
  {
    title: "Programming",
    links: [
      {
        label: "GitHub",
        value: "https://www.github.com/",
      },
      {
        label: "MIT OCW",
        value: 
          "https://ocw.mit.edu/search/?d=Electrical%20Engineering%20and%20Computer%20Science&f=Programming%20Assignments&f=Projects&f=Projects%20with%20Examples&f=Programming%20Assignments%20with%20Examples&f=Activity%20Assignments&f=Course%20Introduction&f=Activity%20Assignments%20with%20Examples&f=Instructor%20Insights&f=Multiple%20Assignment%20Types",
      },
    ],
  },
  {
    title: "Music",
    links: [
      {
        label: "Nobody Kanna Cross It",
        value: "https://www.youtube.com/watch?v=2wqTnwJGvtc",
      },
    ],
  },
  {
    title: "Reddit",
    links: [
      {
        label: "r/unixporn",
        value: "https://www.reddit.com/r/unixporn/",
      },
      {
        label: "r/ProgrammerHumor",
        value: "https://www.reddit.com/r/ProgrammerHumor/",
      },
      {
        label: "r/startpages",
        value: "https://www.reddit.com/r/startpages/",
      },
      {
        label: "r/japanesepeopletwitter",
        value: "https://www.reddit.com/r/japanesepeopletwitter/",
      },
    ],
  },
  {
    title: "4chan",
    links: [
      {
        label: "/wg/",
        value: "https://boards.4chan.org/wg/",
      },
      {
        label: "/w/",
        value: "https://boards.4chan.org/w/",
      },
      {
        label: "/vt/",
        value: "https://boards.4chan.org/vt/",
      },
      {
        label: "/k/",
        value: "https://boards.4chan.org/k/",
      },
      {
        label: "/g/",
        value: "https://boards.4chan.org/g/",
      },
      {
        label: "/pol/",
        value: "https://boards.4chan.org/pol/",
      },
      {
        label: "/r9k/",
        value: "https://boards.4chan.org/r9k/",
      },
      {
        label: "/b/",
        value: "https://boards.4chan.org/b/",
      },
    ],
  },
  {
    title: "Sauces & Shitposts",
    links: [
      {
        label: "Nobody Kanna Cross It",
        value: "https://www.youtube.com/watch?v=2wqTnwJGvtc",
      },
    ],
  },
]

export const images: dataElem[] = [
  { label: "Catppuccin", value: catppuccin1544x1544_circle },
  { label: "pic_2", value: pic_2 },
  { label: "pic_3", value: pic_3 },
  { label: "pic_4", value: pic_4 },
  { label: "pic_5", value: pic_5 },
  { label: "pic_6", value: pic_6 },
  { label: "pic_7", value: pic_7 },
  { label: "pic_8", value: pic_8 },
]

export const searchEngines: dataElem[] = [
  {
    label: "Google",
    value: `https://www.google.com/search?q=${queryToken}`,
  },
  {
    label: "DuckDuckGo",
    value: `https://duckduckgo.com/?q=${queryToken}`,
  },
  {
    label: "Qwant",
    value: `https://qwant.com/?q=${queryToken}`,
  },
  {
    label: "Ecosia",
    value: `https://ecosia.org/search/?q=${queryToken}`,
  },
]

export type FastForwards = Record<string, string>

export interface Search {
  engine: string
  fastForward: FastForwards
}

export const searchSettings: Search = {
  engine: searchEngines[0].value,
  fastForward: {
    deepl: "https://deepl.com/",
    maps: "https://google.com/maps/",
    reddit: "https://reddit.com/",
    github: "https://github.com/",
    gitlab: "https://gitlab.com/",
    youtube: "https://youtube.com/",
    google: "https://google.com/",
  },
}

export interface colorsType {
  [key: string]: string
  "--bg-color": string
  "--default-color": string
  "--accent-color": string
  "--accent-color2": string
}

export interface Theme {
  name: string
  colors: colorsType
  image: string
}

export const themes: Theme[] = [
  {
    name: "Catppuccin",
    image: catppuccin1544x1544_circle,
    colors: {
      "--bg-color": "#181825",
      "--default-color": "#CDD6F4",
      "--accent-color": "#89B4FA",
      "--accent-color2": "#B4BEFE",
    },
  },
]
