
import Background from "@components/Background"
import SectionDivider from "@components/SectionDivider"
import VestComp from "@components/vest/VestComp"
import PantsComp from "@components/pants/PantsComp"
import ShortsComp from "@components/shorts/ShortsComp"
import ScrollToTopButton from "@components/ScrollToTopButton"
import '@styles/main-page.css'


const MainPage = () => {
  return (
    <div className="main-page">
      <Background />
      <SectionDivider />
      <VestComp />
      <SectionDivider />
      <PantsComp />
      <SectionDivider />
      <ShortsComp />
      <ScrollToTopButton /> 
    </div>
  )
}

export default MainPage
