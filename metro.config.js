const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// Obtén la configuración predeterminada de Metro
const config = getDefaultConfig(__dirname);

// Configura Nativewind y react-native-svg-transformer
module.exports = withNativeWind(
  {
    ...config,
    transformer: {
      ...config.transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer"), // Añadir el transformer de SVG
    },
    resolver: {
      ...config.resolver,
      assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"), // Excluir .svg de los assets normales
      sourceExts: [...config.resolver.sourceExts, "svg"], // Añadir .svg como fuente procesable
    },
  },
  { input: "./global.css" }
);
