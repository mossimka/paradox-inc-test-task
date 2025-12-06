import { Box, Paper, Typography } from "@mui/material";
import { Message } from "@/types/messages";

interface MessageContainerProps {
  message: Message;
}

const MessageContainer = ({ message }: MessageContainerProps) => {
  const isUser = message.from === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 2,
          maxWidth: "70%",
          bgcolor: isUser ? "primary.main" : "grey.200",
          color: isUser ? "white" : "text.primary",
          borderRadius: 2,
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 0.5,
            opacity: 0.7,
          }}
        >
          {new Date(message.timestamp).toLocaleTimeString()}
        </Typography>
      </Paper>
    </Box>
  );
};

export default MessageContainer;
