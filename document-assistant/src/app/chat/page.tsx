"use client";

import { useState, useRef, useEffect } from "react";

import { Container, Typography, Paper, TextField, Button } from "@mui/material";

import { useWebsocket } from "@/hooks/useWebsocket";
import { Message } from "@/types/messages";
import MessageContainer from "@/components/chat/MessageContainer";

export default function ChatPage() {
  const { messages, sendMessage, isConnected } = useWebsocket();
  const [value, setValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }),
    [messages]
  );

  const handleSend = () => {
    if (!value.trim()) {
      return;
    }
    sendMessage(value.trim());
    setValue("");
  };

  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Chat Assistant
      </Typography>
      <Paper className="p-4 mb-4" style={{ height: 400, overflowY: "auto" }}>
        {messages.map((m: Message) => (
          <MessageContainer message={m} key={m.id} />
        ))}
        <div ref={messagesEndRef} />
      </Paper>
      <div className="flex gap-2">
        <TextField
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button
          variant="contained"
          onClick={handleSend}
          disabled={!isConnected}
        >
          Send
        </Button>
      </div>
    </Container>
  );
}
