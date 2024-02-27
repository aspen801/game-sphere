const transliterateToURL = (input) => {
    const cyrillicToLatinMap = {
      а: "a",
      б: "b",
      в: "v",
      г: "h",
      ґ: "g",
      д: "d",
      е: "e",
      є: "ye",
      ж: "zh",
      з: "z",
      и: "y",
      і: "i",
      ї: "yi",
      й: "y",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "kh",
      ц: "ts",
      ч: "ch",
      ш: "sh",
      щ: "shch",
      ь: "",
      ю: "yu",
      я: "ya",
      " ": "-",
    };
    
    return (input
      .toLowerCase()
      .split("")
      .map((char) => cyrillicToLatinMap[char] || char)
      .join("")
      .replace(/[^a-z0-9-]/g, ""))
};
export default transliterateToURL