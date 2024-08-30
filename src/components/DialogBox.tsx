  import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogTitle,
    InputAdornment,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    TextField,
    Tooltip,
    Typography,
  } from "@mui/material";
  import Grid from "@mui/material/Grid2";
  import React from "react";
  import { useState } from "react";
  import { config } from "./config";
  import MenuItems from "./MenuItems";

  interface DialogBoxProps {
    open: boolean;

  onClose: () => void;
  }

  export default function DialogBox(props: DialogBoxProps) {
    const { open, onClose } = props;
    const[input, setInput] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      setInput(e.target.value);
    }

    const buttonDisabled = input.trim() === "";

    return (
      <Dialog fullWidth open={open} >
        <Box p={2} >
          <DialogTitle textAlign="left" fontWeight="bold">Invite</DialogTitle>
          
          <TextField
          placeholder="Email"
            variant="outlined"
            value= {input}
            onChange={handleChange}
            
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained"  sx={{ background:"#212121",fontWeight:"bold"}} disabled ={buttonDisabled}>
                    Send Invite
                  </Button>
                </InputAdornment>
              ),
            }}
          ></TextField>

          <UserList />

          <Grid container spacing={2} px={4} mt={2}>
            <Grid size={6}>
              <Typography fontWeight="Bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0c-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0c59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1M610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3z"
                  />
                </svg>
                Copy Link
              </Typography>
            </Grid>
            <Grid size={6} textAlign="right">
              <Button variant="outlined" onClick={onClose} sx={{ fontWeight: "bold", color: "black", borderColor:"#bdbdbd"}}>Close</Button>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    );
  }

  function UserList() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  
    return (
      <>
        <List>
          {config.users.map((user) => (
              <Grid container spacing={2}>
            <ListItem>
                  <Grid size={{xs:3, sm:3, md:3}}>
              <ListItemAvatar>
                <Avatar alt={user.label} src={user.avatar} />
              </ListItemAvatar>
              </Grid>
              <Grid size={{xs:6, sm:6, md:8}}>
              <ListItemText>
                <Typography fontWeight="bold">{user.label}</Typography>
              <Tooltip title={user.email}><Typography noWrap color="grey">{user.email}</Typography></Tooltip> 
              </ListItemText>
              </Grid>
              <Grid size={{xs:3, sm:3, md:3}}>
              <ListItemButton onClick={handleClick} sx={{ fontWeight: "bold",  fontSize:"14px"}}>
                {user.function}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M36 18L24 30L12 18"
                  />
                </svg>
              </ListItemButton>
              </Grid>
            </ListItem>
              </Grid>
          ))}
        </List>
        <MenuItems onClick={handleClose} onClose={handleClose} open={open} anchorEl={anchorEl} items={config.dialogMenu} />
      </>
    );
  }
