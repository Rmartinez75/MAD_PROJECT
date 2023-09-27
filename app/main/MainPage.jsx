
import Background from "@components/backgrounds/Background"
import SectionDivider from "@components/SectionDivider"
import VestComp from "@components/vest/VestComp"
import PantsComp from "@components/pants/PantsComp"
import ShortsComp from "@components/shorts/ShortsComp"
import ScrollToTopButton from "@components/ScrollToTopButton"
import '@styles/main-page.css'
import GoldenLeafComp from "@components/vest/GoldenLeafComp"
import HandWarmerComp from "@components/hand-warmer/HandWarmerComp"
import TerrainComp from "@components/vest/TerrainComp"
import MobileBackground from "@components/backgrounds/MobileBackground"


const MainPage = () => {
  return (
    <div className="main-page">
      <Background />
      <MobileBackground />
      <SectionDivider />
      <GoldenLeafComp />
      <SectionDivider />
      <TerrainComp />
      <SectionDivider />
      <VestComp />
      <SectionDivider />
      <PantsComp />
      <SectionDivider />
      <ShortsComp />
      <SectionDivider />
      <HandWarmerComp />
      <ScrollToTopButton /> 
    </div>
  )
}

export default MainPage
