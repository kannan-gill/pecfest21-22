import React, { useEffect, useState } from "react";
const useAnimatedRenderer = (initialValue, timeout = 1000) => {
  const [conditionalRender, setConditionalRenderer] = useState(initialValue);
  const [visibilityRenderer, setVisibilityRenderer] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => {
      setVisibilityRenderer(conditionalRender);
    }, timeout);
  }, [conditionalRender, timeout]);
  return [visibilityRenderer, setConditionalRenderer];
};
export default useAnimatedRenderer;
