export default function extractIdFromUrl(url: string): string {
  const urlParts = url.split('/');
  const extractedId = urlParts[urlParts.length - 1];
  return extractedId;
}