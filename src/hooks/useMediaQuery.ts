import { useMedia } from "react-use";

export const useMediaQuery = () => {
  const isNarrow = useMedia("(max-width: 480px)");

  return { isNarrow };
};
