export const windowResizeListener = (setMobileView) => {
  if (window.innerWidth <= 640) {
    setMobileView && setMobileView(true);
    return true;
  } else {
    setMobileView && setMobileView(false);
    return false;
  }
};
