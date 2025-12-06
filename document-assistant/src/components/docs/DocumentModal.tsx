import { useState } from "react";

import { X } from "lucide-react";
import { Container, IconButton, Button } from "@mui/material";
import { toast } from "react-toastify";

import { DocumentItem } from "@/types/documents";
import Styles from "@/styles/DocumentModal.module.css";
import { analyzeDocument } from "@/services/analyzeService";

interface DocumentModalProps {
  document: DocumentItem;
  onClose: () => void;
}

const DocumentModal = ({ document, onClose }: DocumentModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const result = await analyzeDocument(document.id);
      toast.success(result.message);
    } catch (error) {
      toast.error("Failed to analyze document");
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className={`${Styles.overlay} ${isClosing ? Styles.fadeOut : ""}`}>
      <Container
        sx={{
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          mt: 8,
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          <X />
        </IconButton>
        <h2>Document Details</h2>
        <p>
          <strong>File Name:</strong> {document.fileName}
        </p>
        <p>
          <strong>Version:</strong> {document.version}
        </p>
        <p>
          <strong>Size (bytes):</strong> {document.sizeInBytes}
        </p>
        <p>
          <strong>Uploaded At:</strong> {document.uploadedAt}
        </p>
        <p>
          <strong>Description:</strong> {document.description}
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            await handleAnalyze();
          }}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? "Analyzing..." : "Analyze Document"}
        </Button>
      </Container>
    </div>
  );
};

export default DocumentModal;
