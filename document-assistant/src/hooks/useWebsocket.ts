import { useEffect, useRef, useState } from "react";
import { Message } from "@/types/messages";
import { WS_URL } from "@/constants/config";
import { MAX_WEBSOCKET_MESSAGES } from "@/constants/app";

export const useWebsocket = (url: string = WS_URL) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connected");
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      const text =
        typeof event.data === "string" ? event.data : "[Binary message]";

      const newMessage: Message = {
        id: crypto.randomUUID(),
        text,
        from: "assistant",
        timestamp: Date.now(),
      };

      setMessages((prev) =>
        [...prev, newMessage].slice(-MAX_WEBSOCKET_MESSAGES)
      );
    };

    ws.onerror = () => {
      console.error("WebSocket connection error");
      setIsConnected(false);
    };

    ws.onclose = () => {
      console.warn("WebSocket closed");
      setIsConnected(false);
    };

    return () => {
      ws.close();
    };
  }, [url]);

  const sendMessage = (message: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(message);

      const newMessage: Message = {
        id: crypto.randomUUID(),
        text: message,
        from: "user",
        timestamp: Date.now(),
      };

      setMessages((prev) =>
        [...prev, newMessage].slice(-MAX_WEBSOCKET_MESSAGES)
      );
    } else {
      console.error("WebSocket not ready");
    }
  };

  return {
    messages,
    sendMessage,
    isConnected,
  };
};
