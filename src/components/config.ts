import LinkIcon from "@mui/icons-material/Link";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const config = {
    
  users: [
    {
      id: 1,
      label: "Jayvion Simon",
      email: "nannie.abernaty70@gmail.com",
      avatar:
        "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp",
      function: "Can edit",
    },
    {
      id: 2,
      label: "Lucian Obrien",
      email: "ashlynn.ohara62@gmail.com",
      avatar:
        "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",
      function: "Can view",
    },
    {
      id: 3,
      label: "Deja Brady",
      email: "milo.farrell@hotmail.com",
      avatar:
        "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",
      function: "Can edit",
    },
    {
      id: 4,
      label: "Harrison Stein",
      email: "violet.ratke86@yahoo.com",
      avatar:
        "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp",
      function: "Can view",
    },
    {
      id: 5,
      label: "Reece Chung",
      email: "letha.lubowitz24@yahoo.com",
      avatar:
        "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-5.webp",
      function: "Can edit",
    },
  ],
  cardMenu: [
    {
      id: 1,
      icon: LinkIcon,
      label: "Link",
    },
    {
      id: 2,
      icon: ShareIcon,
      label: "Share",
    },
    {
      id: 3,
      icon: EditIcon,
      label: "Edit",
    },
    {
      id: 4,
      icon: DeleteIcon,
      label: "Delete",
    },
  ],
  dialogMenu: [
    {
      id: 1,
      icon: VisibilityIcon,
      label: "Can view",
    },
    {
      id: 2,
      icon: EditIcon,
      label: "Can edit",
    },
    {
      id: 3,
      icon: DeleteIcon,
      label: "Remove",
    },
  ],
};
