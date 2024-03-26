//asset import
import stats from "../assets/stats.png";
import emailIcon from "../assets/email.png";
import userIcon from "../assets/user.png";
import layoutGrid from "../assets/layout-grid.png";
import supportIcon from "../assets/support.png";
import folderIcon from "../assets/folder.png";

export const menuData = [
  {
    section_title: "DASHBOARD",
    section_items: [
      {
        link_logo: stats,
        link_title: "Dashboard",
        sub_links: ["Analytics", "Finance", "Job Board"],
      },
      {
        link_logo: emailIcon,
        link_title: "Messages",
        sub_links: ["Analytics", "Finance", "Job Board"],
      },
      {
        link_logo: userIcon,
        link_title: "Friends",
        sub_links: ["Analytics", "Finance", "Job Board"],
      },
      {
        link_logo: layoutGrid,
        link_title: "Apps",
        sub_links: ["Analytics", "Finance", "Job Board"],
      },
    ],
  },
  {
    section_title: "PAGES",
    section_items: [
      {
        link_logo: supportIcon,
        link_title: "Help Center",
        sub_links: ["Analytics", "Finance", "Job Board"],
      },
      {
        link_logo: folderIcon,
        link_title: "File Manager",
        sub_links: ["Analytics", "Finance", "Job Board"],
      },
    ],
  },
];
