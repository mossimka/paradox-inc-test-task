import { useState } from "react"; 

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

import { DocumentItem } from "@/types/documents";
import DocumentModal from "@/components/docs/DocumentModal";

interface DocumentsTableProps {
  documents: DocumentItem[];
}

const DocumentsTable = ({ documents }: DocumentsTableProps) => {
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);

  return (
    <>
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
                <TableCell>
                  <Button variant="outlined" onClick={() => setSelectedDocument(doc)}>More Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        {selectedDocument && (
          <DocumentModal document={selectedDocument} onClose={() => setSelectedDocument(null)} /> 
        )}
    </>
  )
}

export default DocumentsTable