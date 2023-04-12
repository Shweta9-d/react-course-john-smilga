import {
  Fa500Px,
  FaBtc,
  FaBtc,
  FaBtc,
  FaBitcoin,
  FaBtc,
  FaBtc,
  FaDocker,
  FaGithubSquare,
} from "react-icons/fa";

import { nanoid } from "nanoid";

const sub_links = [
  {
    pageId: nanoid(),
    page: "product",
    links: [
      {
        id: nanoid(),
        label: "community",
        icon: <Fa500Px />,
        url: "/product/community",
      },
      {
        id: nanoid(),
        label: "content",
        icon: <Fa500Px />,
        url: "/product/content",
      },
      {
        id: nanoid(),
        label: "roles",
        icon: <Fa500Px />,
        url: "/product/roles",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "solutions",
    links: [
      {
        id: nanoid(),
        label: "developers",
        icon: <Fa500Px />,
        url: "/solutions/developers",
      },
      {
        id: nanoid(),
        label: "content managers",
        icon: <FaBitcoin />,
        url: "/solutions/content-managers",
      },
      {
        id: nanoid(),
        label: "business teams",
        icon: <FaBtc />,
        url: "/solutions/business teams",
      },
      {
        id: nanoid(),
        label: "e-commerce",
        icon: <Fa500Px />,
        url: "/solutions/e-commerce",
      },
    ],
  },
  {
    page: "resources",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "starters",
        icon: <FaDocker />,
        url: "/resources/starters",
      },
      {
        id: nanoid(),
        label: "showcase",
        icon: <FaGithubSquare />,
        url: "/resources/showcase",
      },
    ],
  },
];

export default sub_links;
