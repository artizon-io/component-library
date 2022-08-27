export function copyToClipboard(content : string) : void {
  // See
  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  navigator.clipboard.writeText(content);
};

export type colorScheme = "purple-pink" | "blue-red" | "orange-pink" | "royal-white";

export function getColorsFromScheme(colorScheme : string, isDark : boolean) : [string, string] {
  let colorFrom, colorTo;

  switch(colorScheme) {
    case "purple-pink":
      if (isDark) {
        colorFrom = "#B5A7FA";
        colorTo = "#FFB490";
      } else {
        colorFrom = "#6C20B3";
        colorTo = "#B83A16";
      }
      break;
    case "blue-red":
      if (isDark) {
        colorFrom = "#4E81EE";
        colorTo = "#FF7979";
      } else {
        colorFrom = "#2454D1";
        colorTo = "#B9293B";
      }
      break;
    case "orange-pink":
      if (isDark) {
        colorFrom = "#D1817F";
        colorTo = "#F9D5D2";
      } else {
        colorFrom = "#AF2623";
        colorTo = "#B71B54";
      }
      break;
    case "royal-white":
      if (isDark) {
        colorFrom = "#8CB1FF";
        colorTo = "#5C8DF2";
      } else {
        colorFrom = "#0E54A0";
        colorTo = "#2B14BF";
      }
      break;
  }
  return [colorFrom, colorTo];
}