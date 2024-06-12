import { useState } from "react";
import Nav from "../Nav/nav.jsx";
import About from "../Pages/About/about.jsx";
import Contact from "../Pages/Contact/contact.jsx";
import Projects from "../Pages/Projects/projects.jsx";
import Resume from "../Pages/Resume/resume.jsx";
import Footer from "../Footer/footer.jsx";

// renders the main body and uses the renderPage function to determine which component will be loaded based on what the user has selected
export default function Body() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About'){
            return <About />
        } else if(currentPage === 'Contact'){
            return <Contact />
        } else if(currentPage === 'Projects'){
            return <Projects />
        } else if(currentPage === 'Resume'){
            return <Resume />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            <div className="container mt-2">{renderPage()}</div>
            <Footer />
        </div>
    )
}