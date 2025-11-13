import SectionAboutus1 from "../Components/section-1-aboutus";
import SectionAboutus2 from "../Components/Section-2-About-us";
import SectionAbout3 from "../Components/Section-3-About";
import SectionAbout4 from "../Components/Section-About-4";
import NewFooter from "../Components/new-footer";
import "../CSS/section-1-aboutus.css";
function AboutPage() {
    return (
        <div className="about-page-departament" style={{ marginTop: "110px" }}>
            <SectionAboutus1 />
            <SectionAboutus2 />
            <SectionAbout3 />
            <SectionAbout4 />
            <NewFooter />
        </div>
    );
}
export default AboutPage;