export type DocumentItem = {
  id: string;
  fileName: string;
  version: string;
  sizeInBytes: number;
  uploadedAt: string;
  description: string;
}

export type PostAPI = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
