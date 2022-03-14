import { useEffect, useState } from "react";
const useAnimatedRenderer = (
  initialValue,
  onTimeout = 0,
  offTimeout = 1000
) => {
  const [conditionalRender, setConditionalRenderer] = useState(initialValue);
  const [visibilityRenderer, setVisibilityRenderer] = useState(initialValue);
  const [timeoutRef, setTimeoutRef] = useState(null);
  useEffect(() => {
    clearTimeout(timeoutRef);
    setTimeoutRef(
      setTimeout(
        () => {
          setVisibilityRenderer(conditionalRender);
        },
        conditionalRender ? onTimeout : offTimeout
      )
    );
  }, [conditionalRender, onTimeout, offTimeout]);
  return [visibilityRenderer, setConditionalRenderer];
};
export default useAnimatedRenderer;
