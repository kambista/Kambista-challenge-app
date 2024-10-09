import "react-native";

declare module "react-native" {
  interface TextProps {
    className?: string;
  }

  interface ViewProps {
    className?: string;
  }

  interface ImageProps {
    className?: string;
  }

  interface TouchableOpacityProps {
    className?: string;
  }

  interface TextInputProps {
    className?: string;
  }

  interface ImageBackgroundProps {
    className?: string;
  }
}
