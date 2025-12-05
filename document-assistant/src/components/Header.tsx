"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Image
            src="/images/logo.webp"
            alt="Test task Logo"
            width={100}
            height={100}
          />  
          Cool Header
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            href="/"
            variant={isActive("/") ? "contained" : "outlined"}
            color="primary"
          >
            Home
          </Button>
          <Button
            component={Link}
            href="/documents"
            variant={isActive("/documents") ? "contained" : "outlined"}
            color="primary"
          >
            Documents
          </Button>
          <Button
            component={Link}
            href="/chat"
            variant={isActive("/chat") ? "contained" : "outlined"}
            color="primary"
          >
            Chat
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
