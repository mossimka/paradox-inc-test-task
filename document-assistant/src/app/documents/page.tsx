"use client";

import { useState, useEffect } from "react";

import {
  Container,
  CircularProgress,
  Typography,
} from "@mui/material";

import { DocumentItem } from "@/types/documents";
import { fetchDocuments } from "@/services/documentsService";
import DocumentsTable from "@/components/docs/DocumentsTable";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocuments()
      .then((docs) => setDocuments(docs))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", mt: 4, minHeight: "65vh" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 4}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Documents
      </Typography>
      <DocumentsTable documents={documents} />
    </Container>
  );
}
