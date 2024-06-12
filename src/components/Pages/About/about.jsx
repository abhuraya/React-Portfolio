import me from '../../../assets/images/self.jpg'
import './about.css'

// renders an image of myself and a short paragraph
export default function About() {
    return(
        <div className="row d-flex flex-column">
            <div className="col-sm-4">
                <h1>
                    About Me
                    <img src={me} className='custom-img mt-2 border border-dark border-round'></img>
                </h1>
            </div>
            <div className="col-sm-7 m-1">
                    <p>
                        My name is Abhudaya Rayamajhi, I was born in Nepal and imigrated to America. 

                    </p>

            </div>
        </div>
    )
};