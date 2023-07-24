import React, { useEffect, useState } from "react";
import RealisedProject from "../../molecules/RealisedProject/RealisedProject";
import {
  StyledWrapper,
  StyledSectionHeadline,
} from "./RealisedProjectsSection.styles";
import magicTrickDynamicGradient from "../../../assets/images/magic-trick-dynamic-gradient.png";
import flagDynamicGradient from "../../../assets/images/flag-dynamic-gradient.png";
import travelDynamicGradient from "../../../assets/images/travel-dynamic-gradient.png";
import rendproImage from "../../../assets/images/rendpro.png";
import osiedlemlawaImage from "../../../assets/images/osiedlemlawa.png";
import marysdeweloperImage from "../../../assets/images/marydeweloper.png";

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
        link="https://rend.pro"
        description="Strona internetowa dla firmy w której obecnie pracuję. W tym projekcie zająłem się wszystkim - począwszy od projektu graficznego, modelu 3D rakiety oraz jej animacji i kończąc na zaprogramowaniu samej strony internetowej."
        properties={[
          {
            name: "Graphic Designer, Full-Stack Developer",
            icon: magicTrickDynamicGradient,
          },
          {
            name: "Typescript, Gatsby, Three.js",
            icon: flagDynamicGradient,
          },
          {
            name: "RendPro Limited, Wielka Brytania",
            icon: travelDynamicGradient,
          },
        ]}
        texture="rendpro.mp4"
        mobileImage={rendproImage}
        showCursor={showCursor}
        onMouseEnter={handleRealisedProjectMouseEnter}
      />

      <RealisedProject
        name="Osiedle Mława"
        link="https://osiedlemlawa.pl"
        description="Strona internetowa dla inwestycji deweloperskiej. Wyróżniają ją przyjemne dla oka animacje oraz interaktywny podgląd dostępności mieszkań na osiedlu. Nie zabrakło oczywiście systemu CMS."
        properties={[
          {
            name: "Front-End Developer",
            icon: magicTrickDynamicGradient,
          },
          {
            name: "Typescript, Gatsby",
            icon: flagDynamicGradient,
          },
          {
            name: "RendPro Limited, Wielka Brytania",
            icon: travelDynamicGradient,
          },
        ]}
        texture="osiedlemlawa.mp4"
        mobileImage={osiedlemlawaImage}
        showCursor={showCursor}
        onMouseEnter={handleRealisedProjectMouseEnter}
      />

      <RealisedProject
        name="Marys Deweloper"
        link="https://marysdeweloper.pl"
        description="Strona internetowa dla firmy deweloperskiej. Animacje dopasowane do strony sprawiają, że jest ona na swój sposób wyjątkowa. Podpięty system CMS pozwala na elastyczne zmiany na stronie."
        properties={[
          {
            name: "Front-End Developer",
            icon: magicTrickDynamicGradient,
          },
          {
            name: "Typescript, Gatsby",
            icon: flagDynamicGradient,
          },
          {
            name: "RendPro Limited, Wielka Brytania",
            icon: travelDynamicGradient,
          },
        ]}
        texture="marysdeweloper.mp4"
        showCursor={showCursor}
        mobileImage={marysdeweloperImage}
        onMouseEnter={handleRealisedProjectMouseEnter}
      />
    </StyledWrapper>
  );
};

export default RealisedProjectsSection;
