import Image from "next/image";

import { Container, Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { FileText, MessageCircle, Search, Zap } from "lucide-react";

export default function Home() {
  return (
    <div>
      <main>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Document Assistant
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
              Test Task: Document Management & AI Chat Interface
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              A mini-interface for managing documents and interacting with a
              chat assistant. Built with Next.js, TypeScript, Material-UI, and
              WebSocket integration.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Card elevation={2}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <FileText size={32} />
                    <Typography variant="h5" component="h2" sx={{ ml: 2 }}>
                      Documents
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Browse and manage documents with detailed information
                    including file name, version, size, and upload date. Click
                    More Details to view full information and analyze documents.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Card elevation={2}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <MessageCircle size={32} />
                    <Typography variant="h5" component="h2" sx={{ ml: 2 }}>
                      Chat Assistant
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Real-time chat interface powered by WebSocket connection.
                    Send messages and receive instant responses from the echo
                    assistant. User messages appear on the right, assistant
                    responses on the left.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Card elevation={2}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Search size={32} />
                    <Typography variant="h5" component="h2" sx={{ ml: 2 }}>
                      Document Analysis
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Analyze documents with a single click. View detailed
                    metadata and trigger analysis operations through the modal
                    interface with instant feedback.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Card elevation={2}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Zap size={32} />
                    <Typography variant="h5" component="h2" sx={{ ml: 2 }}>
                      Modern Stack
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Built with Next.js 15, TypeScript, Material-UI for
                    components, WebSocket for real-time communication, and
                    follows clean code principles.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
