import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../context/auth-context";

import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material";

export default function MenuListComposition({ children }) {
  const { logout } = useAuth();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleMyPageNavigate = () => {
    history.push("/mypage");
  };

  const handleHomeNavigate = () => {
    history.push("/");
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button ref={anchorRef} onClick={handleToggle}>
        {children}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  <MenuItem
                    onClick={() => {
                      handleMyPageNavigate();
                      handleClose();
                    }}
                  >
                    MyPage
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logout();
                      handleHomeNavigate();
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
}
