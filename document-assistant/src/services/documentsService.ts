import axios from "axios";

import { DocumentItem, mapDocuments, PostAPI } from "@/utils/mapDocuments";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchDocuments = async (): Promise<DocumentItem[]> => {
  try {
    const response = await axios.get<PostAPI[]>(API_URL);
    const documents = mapDocuments(response.data);
    return documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};
