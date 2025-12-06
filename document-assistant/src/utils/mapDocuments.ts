import { DocumentItem, PostAPI } from "@/types/documents";

const MAX_DOCUMENTS = 10;
const MAX_VERSION_VARIANTS = 5;

const MIN_FILE_SIZE_BYTES = 100_000;      // 100 KB
const MAX_FILE_SIZE_BYTES = 1_100_000;    // ~1.1 MB

const MAX_UPLOAD_AGE_MS = 1_000_000_000;  // ~11 days

export const mapDocuments = (posts: PostAPI[]): DocumentItem[] =>
  posts.slice(0, MAX_DOCUMENTS).map((post, index) => ({
    id: post.id,
    fileName: `Document_${post.title}.pdf`,
    version: `v${(index % MAX_VERSION_VARIANTS) + 1}.0`,
    sizeInBytes:
      Math.floor(Math.random() * (MAX_FILE_SIZE_BYTES - MIN_FILE_SIZE_BYTES)) +
      MIN_FILE_SIZE_BYTES,
    uploadedAt: new Date(
      Date.now() - Math.floor(Math.random() * MAX_UPLOAD_AGE_MS)
    ).toISOString(),
    description: post.body,
  }));
