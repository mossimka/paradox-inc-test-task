"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NAV_ITEMS } from "@/constants/navigation";

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Image
            src="/images/logo.webp"
            alt="Document Assistant Logo"
            width={70}
            height={70}
          />  
          Test Task
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              variant={isActive(item.href) ? "contained" : "outlined"}
              color="primary"
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
