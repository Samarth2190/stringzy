/**
 * @param {string | object} input - File name, URL, or file-like object with a name property.
 * @param {string} type - The type category to validate.
 * @returns {boolean} 
 */
export function isType(input: string | object, type: string): boolean {
  if (typeof type !== "string") return false;

  let fileName = "";
  if (typeof input === "string") {
    fileName = input;
  } else if ( typeof input === "object" && input !== null && "name" in input && typeof (input as { name: unknown }).name === "string") {
    fileName = (input as { name: string }).name;
  }

  const typeCheck = fileName.split(".").pop()?.toLowerCase().split("?")[0].split("#")[0];

  if (!typeCheck) return false;

  const typeMap: { [key: string]: string[] } = {
    image: ["png", "jpg", "jpeg", "gif", "bmp", "svg", "webp", "ico"],
    video: ["mp4", "webm", "avi", "mkv", "mov", "flv"],
    audio: ["mp3", "wav", "ogg", "flac", "aac"],
    document: ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "md"],
    archive: ["zip", "rar", "tar", "gz", "7z"],
  };

  const allowed = typeMap[type.toLowerCase()];
  return allowed ? allowed.includes(typeCheck) : false;
}
