
import Background from "@components/Background"
import SectionDivider from "@components/SectionDivider"
import VestComp from "@components/VestComp"
import PantsComp from "@components/PantsComp"
import ShortsComp from "@components/ShortsComp"
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
