import React from "react";

const Responsive = () => {
  const isMobile = useMediaQuery("(max-width: 400px)");

  const isTablet = useMediaQuery("(min-width: 401px) and (max-width: 640px)");

  const isDesktop = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  const isLargeDesktop = useMediaQuery("(min-width: 1025px)");

  return (
    <div>
            {isMobile && <MyMobileOnlyComponent />}
            {isLargeDesktop && <MyLargeDesktopComponent />}
          
    </div>
  );
};
export default Responsive;
