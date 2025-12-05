export type DocumentItem = {
  id: string;
  file_name: string;
  version: string;
  size_in_bytes: number;
  uploaded_at: string;
  description: string;
}

export type PostAPI = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


export const mapDocuments = ((posts: PostAPI[]): DocumentItem[] => 
  posts.slice(0, 10).map((post, index) => ({
    id: post.id.toString(),
    file_name: `Document_${post.title}.pdf`,
    version: `v${(index % 2) + 1}.0`,
    size_in_bytes: Math.floor(Math.random() * 1_000_000) + 100_000,
    uploaded_at: new Date(
      Date.now() - Math.floor(Math.random() * 1_000_000_000)
    ).toISOString(),
    description: post.body,
  }))
);
