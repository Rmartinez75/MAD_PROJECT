
import Background from "@components/Background"
import PantsComp from "@components/PantsComp"
import SectionDivider from "@components/SectionDivider"
import VestComp from "@components/VestComp"
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
      <ScrollToTopButton /> 
    </div>
  )
}

export default MainPage
