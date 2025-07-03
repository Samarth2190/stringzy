/**
 * Checks if a file name or URL string has a valid extension for a given type.
 * 
 * @param {string} input - File name or URL.
 * @param {string} type - The type category to validate.
 * @returns {boolean}
 * @throws error when input is not string or type is not defined
 */
export function isTypeOf(input: string, type: string): boolean {
  if (typeof input !== "string" || typeof type !== "string") return false;

  // Gets the substring after the last (.), then converts to lowercase, removes (?) and (#)
  // Example: "image.png?version=2#top", returns "png"
  const extension = input.split(".").pop()?.toLowerCase().split("?")[0].split("#")[0];

  if (!extension) return false;

  const typeMap: { [key: string]: string[] } = {
    image: ["png", "jpg", "jpeg", "gif", "bmp", "svg", "webp", "ico"],
    video: ["mp4", "webm", "avi", "mkv", "mov", "flv"],
    audio: ["mp3", "wav", "ogg", "flac", "aac"],
    document: ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "md"],
    archive: ["zip", "rar", "tar", "gz", "7z"],
  };

  const allowed = typeMap[type.toLowerCase()];
  return allowed ? allowed.includes(extension) : false;
}
