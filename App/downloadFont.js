// For InternetExplorer
const getScriptIECase = () => {
  const scripts = document.getElementsByTagName("script");
  return scripts[scripts.length - 1];
};

const loadFontScript = document.currentScript || getScriptIECase();

const fontFamilyParam = loadFontScript.getAttribute("fontFamily");

const fontFamilyFormated = fontFamilyParam.replace(" ", "");

const createUrl = (family, style) => {
  return `./fonts/${family}/${family}-${style}.ttf`;
};

const loadAndAddFonts = async (fontFamily) => {
  if ("fonts" in document) {
    const fontRegular = new FontFace(
      fontFamily,
      `url(${createUrl(fontFamilyFormated, "Regular")}) format('woff2')`
    );
    const fontBold = new FontFace(
      fontFamily,
      `url(${createUrl(fontFamilyFormated, "Bold")}) format('woff2')`,
      {
        weight: "700",
      }
    );
    const fontItalic = new FontFace(
      fontFamily,
      `url(${createUrl(fontFamilyFormated, "Italic")}) format('woff2')`,
      {
        style: "italic",
      }
    );
    const fontBoldItalic = new FontFace(
      fontFamily,
      `url(${createUrl(fontFamilyFormated, "BoldItalic")}) format('woff2')`,
      {
        weight: "700",
        style: "italic",
      }
    );

    const loadedFonts = await Promise.all([
      fontRegular.load(),
      fontBold.load(),
      fontItalic.load(),
      fontBoldItalic.load(),
    ]);

    loadedFonts.forEach((font) => {
      document.fonts.add(font);
    });
  }
};

loadAndAddFonts(fontFamilyParam);
