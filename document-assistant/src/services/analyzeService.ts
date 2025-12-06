export async function analyzeDocument(documentId: number): Promise<{ status: string; message: string }> {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ documentId }),
  });

  if (!response.ok) {
    throw new Error('Failed to analyze document');
  }

  return response.json();
}