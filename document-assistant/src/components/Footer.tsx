"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography, Button } from "@mui/material";
import { MessageCircle, Github, Home, FileText } from "lucide-react";

import { NAV_ITEMS } from "@/constants/navigation";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.200", p: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Image
            src="/images/logo.webp"
            alt={"Test Task Logo"}
            width={100}
            height={100}
          />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h5" component="h1">
              Test task
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tables, websockets, and more
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 3 }}>
          {NAV_ITEMS.map((item) => {
            const icons = { "/": Home, "/documents": FileText, "/chat": MessageCircle 
            } as const;
            const Icon = icons[item.href as keyof typeof icons];
            return (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                startIcon={Icon && <Icon size={18} />}
                variant="text"
              >
                {item.label}
              </Button>
            );
          })}
          <Button
            component={Link}
            href="https://github.com/mossimka/paradox-inc-test-task"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Github size={24} />}
            variant="text"
          >
            Github
          </Button>
        </Box>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          All rights reserved 2025
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
