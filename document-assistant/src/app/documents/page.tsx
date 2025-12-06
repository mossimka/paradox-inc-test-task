"use client";

import { useState, useEffect } from "react";

import { Container, CircularProgress, Typography } from "@mui/material";

import { DocumentItem } from "@/types/documents";
import { fetchDocuments } from "@/services/documentsService";
import DocumentsTable from "@/components/docs/DocumentsTable";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDocuments()
      .then((docs) => setDocuments(docs))
      .catch((err) => {
        console.error("Failed to fetch documents:", err);
        setError("Failed to load documents. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          minHeight: "65vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom color="error">
          Error
        </Typography>
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Documents
      </Typography>
      <DocumentsTable documents={documents} />
    </Container>
  );
}
