import relocare from '../images/relocare-banner.jpg'
import dateAdvisor from '../images/date-advisor (2).jfif'
import weather from '../images/weatherdashboard.jfif'
import techBlog from '../images/techblog.jfif'

// after all images are imported an object is created and exported for each project to be used in the projects component
export const projects = [
    {
        project_title: 'Relocare',
        repo: 'https://github.com/abhuraya/ReloCare',
        deployedUrl: 'https://relocare-628a0d030565.herokuapp.com/login',
        image: relocare,
        project_id: 1
    },
    {
        project_title: 'Note App',
        repo: 'https://github.com/abhuraya/Notes',
        deployedUrl: 'https://github.com/abhuraya/Notes',
        image: dateAdvisor,
        project_id: 2
    },
    {
        project_title: 'SVG Logo Maker',
        repo: 'https://github.com/abhuraya/SVG_Logo_Maker',
        deployedUrl: 'https://github.com/abhuraya/SVG_Logo_Maker',
        image: weather,
        project_id: 3
    },
    {
        project_title: 'Tech Blog',
        repo: 'https://github.com/abhuraya/Tech_Blog',
        deployedUrl: 'https://github.com/abhuraya/Tech_Blog',
        image: techBlog,
        project_id: 4
    },
]
