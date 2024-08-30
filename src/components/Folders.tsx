import {
  Avatar,
  AvatarGroup,
  Breadcrumbs,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { useState } from "react";
import DialogBox from "./DialogBox";
import { config } from "./config";
import MenuItems from "./MenuItems";

export default function Folders() {
  return (
    <>
      <Grid container spacing={3} p={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Folder />
        </Grid>
      </Grid>
    </>
  );
}

function Folder() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openDialog, setOpenDialog] = useState(false);

  const OpenDialog = () => {
    setOpenDialog(true);
  };

  const CloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid size={6}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#ffa000"
                  d="M40 12H22l-4-4H8c-2.2 0-4 1.8-4 4v8h40v-4c0-2.2-1.8-4-4-4"
                />
                <path
                  fill="#ffca28"
                  d="M40 12H8c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4"
                />
              </svg>
              <Typography ml={1} fontWeight="bold">
                Docs
              </Typography>
              <AvatarGroup max={3} sx={{ ml:"12ch",mt: 2 }}>
                {config.users.map((user) => (
                  <Avatar alt={user.label} src={user.avatar} />
                ))}
              </AvatarGroup>
            </Grid>
            <Grid size={6}>
              <Breadcrumbs separator="" sx={{ ml: 4 }}>
                <Rating max={1} />

                <IconButton
                  size="medium"
                  onClick={handleClick}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"
                    />
                  </svg>
                </IconButton>
              </Breadcrumbs>
            </Grid>
          </Grid>
        </CardContent>
        <MenuItems
          onClick={OpenDialog}
          anchorEl={anchorEl}
          onClose={handleClose}
          open={open}
          items={config.cardMenu}
        />

        <DialogBox open={openDialog} onClose={CloseDialog} />
      </Card>
    </>
  );
}
