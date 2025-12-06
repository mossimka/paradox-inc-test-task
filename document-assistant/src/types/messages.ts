export type Message = {
  id: string;
  text: string;
  from: "user" | "assistant";
  timestamp: number;
}