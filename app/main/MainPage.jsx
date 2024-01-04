
import Background from "@components/backgrounds/Background"
import SectionDivider from "@components/SectionDivider"
import VestComp from "@components/vest/air-canvas/VestComp"
import PantsComp from "@components/pants/PantsComp"
import ShortsComp from "@components/shorts/ShortsComp"
import ScrollToTopButton from "@components/ScrollToTopButton"
import '@styles/main-page.css'
import GoldenLeafComp from "@components/vest/golden-leaf/GoldenLeafComp"
import HandWarmerComp from "@components/hand-warmer/HandWarmerComp"
import TerrainComp from "@components/vest/urban-terrain/TerrainComp"
import MobileBackground from "@components/backgrounds/MobileBackground"
import BubbleBlackComp from "@components/vest/bubble-black/BubbleBlackComp"
import CarbonComp from "@components/vest/air-carbon/CarbonComp"
import BubbleBrownComp from "@components/vest/bubble-brown/BubbleBrownComp"


const MainPage = () => {
  return (
    <div className="main-page">
      <Background />
      <MobileBackground />
      <SectionDivider />
      <VestComp />
      <SectionDivider />
      <BubbleBrownComp />
      <SectionDivider />
      <CarbonComp />
      <SectionDivider />
      <PantsComp />
      <SectionDivider />
      <ShortsComp />
      <SectionDivider />
      <HandWarmerComp />
      <SectionDivider />
      <GoldenLeafComp />
      <SectionDivider />
      <BubbleBlackComp />
      <SectionDivider />
      <TerrainComp />
      <ScrollToTopButton /> 
    </div>
  )
}

export default MainPage
