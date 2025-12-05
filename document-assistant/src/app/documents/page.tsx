"use client";

import {
  Container,
  CircularProgress,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { useState, useEffect } from "react";
import { DocumentItem } from "@/types/documents";
import { fetchDocuments } from "@/services/documentsService";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDocuments()
      .then((docs) => setDocuments(docs))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Documents
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="documents table">
          <TableHead sx={{ bgcolor: "grey.200" }}>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>Version</TableCell>
              <TableCell>Size (bytes)</TableCell>
              <TableCell>Uploaded At</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>{doc.fileName}</TableCell>
                <TableCell>{doc.version}</TableCell>
                <TableCell>{doc.sizeInBytes}</TableCell>
                <TableCell>{doc.uploadedAt}</TableCell>
                <TableCell>{doc.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
