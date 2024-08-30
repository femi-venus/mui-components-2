import { Menu, MenuItem, SvgIconProps, Typography } from "@mui/material";

interface MenuProps {
  onClick: () => void;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  open: boolean;
  items: {
    id: number;
    icon: React.ComponentType<SvgIconProps>;
    label: string;
  }[];
}

export default function MenuItems(props: MenuProps) {
  const { onClick, anchorEl, onClose, open, items } = props;
const iconColor = (text:string) => text === "Delete" || text ==="Remove"? "error": "inherit";



  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={onClose}
      onClick={onClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,

            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 4,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {items.map((item) => (
        <MenuItem onClick={onClick} >
          <item.icon color={iconColor(item.label)}/>
         <Typography color={iconColor(item.label)}>{item.label}</Typography> 
         
        </MenuItem>
      ))}
    </Menu>
  );
}
