import React, { useEffect, useState } from "react";
import RealisedProject from "../../molecules/RealisedProject/RealisedProject";
import {
  StyledWrapper,
  StyledSectionHeadline,
} from "./RealisedProjectsSection.styles";

const RealisedProjectsSection = () => {
  const [showCursor, setShowCursor] = useState<boolean>(true);

  const handleRealisedProjectMouseEnter = () => setShowCursor(false);

  useEffect(() => {
    if (window.innerWidth < 1025) {
      setShowCursor(false);
    }
  }, []);

  return (
    <StyledWrapper id="portfolio">
      <StyledSectionHeadline
        headline="Zrealizowane projekty"
        subHeadline="Portfolio"
      />

      <RealisedProject
        name="Strona firmowa - RendPro"
        description="Strona internetowa dla firmy w której obecnie pracuję. W tym projekcie zająłem się wszystkim - począwszy od projektu graficznego, modelu 3D rakiety oraz jej animacji i kończąc na zaprogramowaniu samej strony internetowej."
        properties={[
          {
            name: "Graphic Designer, Full-Stack Developer",
            icon: "magic-trick-dynamic-gradient.png",
          },
          {
            name: "Typescript, Gatsby, Three.js",
            icon: "flag-dynamic-gradient.png",
          },
          {
            name: "RendPro Limited, United Kingdom",
            icon: "travel-dynamic-gradient.png",
          },
        ]}
        texture="test_video.mov"
        mobileImage={require("../../../assets/images/rendpro.png")}
        showCursor={showCursor}
        onMouseEnter={handleRealisedProjectMouseEnter}
      />

      <RealisedProject
        name="Osiedle Mława"
        description="Strona internetowa dla inwestycji deweloperskiej. Wyróżniają ją przyjemne dla oka animacje oraz interaktywny podgląd dostępności mieszkań na osiedlu. Nie zabrakło oczywiście systemu CMS."
        properties={[
          {
            name: "Front-End Developer",
            icon: "magic-trick-dynamic-gradient.png",
          },
          {
            name: "Typescript, Gatsby",
            icon: "flag-dynamic-gradient.png",
          },
          {
            name: "RendPro Limited, United Kingdom",
            icon: "travel-dynamic-gradient.png",
          },
        ]}
        texture="osiedlemlawa.mp4"
        mobileImage={require("../../../assets/images/osiedlemlawa.png")}
        showCursor={showCursor}
        onMouseEnter={handleRealisedProjectMouseEnter}
      />

      <RealisedProject
        name="Marys Deweloper"
        description="Strona internetowa dla firmy deweloperskiej. Animacje dopasowane do strony sprawiają, że jest ona na swój sposób wyjątkowa. Podpięty system CMS pozwala na elastyczne zmiany na stronie."
        properties={[
          {
            name: "Front-End Developer",
            icon: "magic-trick-dynamic-gradient.png",
          },
          {
            name: "Typescript, Gatsby",
            icon: "flag-dynamic-gradient.png",
          },
          {
            name: "RendPro Limited, United Kingdom",
            icon: "travel-dynamic-gradient.png",
          },
        ]}
        texture="marysdeweloper.mp4"
        showCursor={showCursor}
        mobileImage={require("../../../assets/images/marydeweloper.png")}
        onMouseEnter={handleRealisedProjectMouseEnter}
      />
    </StyledWrapper>
  );
};

export default RealisedProjectsSection;
