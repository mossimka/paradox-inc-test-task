import { DocumentItem, PostAPI } from "@/types/documents";

export const mapDocuments = ((posts: PostAPI[]): DocumentItem[] => 
  posts.slice(0, 10).map((post, index) => ({
    id: post.id.toString(),
    fileName: `Document_${post.title}.pdf`,
    version: `v${(index % 5) + 1}.0`,
    sizeInBytes: Math.floor(Math.random() * 1_000_000) + 100_000,
    uploadedAt: new Date(
      Date.now() - Math.floor(Math.random() * 1_000_000_000)
    ).toISOString(),
    description: post.body,
  }))
);
