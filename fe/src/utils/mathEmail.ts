export const matchEmail = (text: string | undefined) => {
  const match = text?.match(/^([^@]+)/); // lấy mọi thứ trước dấu @
  if (match) {
    return match[1];
  }
  return undefined;
};