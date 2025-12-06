"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Menu size={24} />
      </IconButton>

      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 1,
            }}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <X size={24} />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  selected={isActive(item.href)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
