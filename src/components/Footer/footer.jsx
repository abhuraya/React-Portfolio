import githubSvg from '../../assets/images/github-mark.svg'
import linkedInSvg from '../../assets/images/linkedin.svg'
import codeCademy from '../../assets/images/codecademy.svg'
import './footer.css'

// imports SVG files for github linked in and codecademy to be used as link achors to my personal profiles.
export default function Footer(){
    return(
        <div className="footer d-flex justify-content-center mt-4">
            <nav class="navbar navbar-expand-lg">
                    <ul class="navbar-nav">
                        <li class="nav-item mx-5">
                            <a class="nav-link" href="https://www.linkedin.com/in/abhudaya-rayamajhi-516412118/" target='_blank'>
                                <img src={linkedInSvg}></img>
                            </a>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}