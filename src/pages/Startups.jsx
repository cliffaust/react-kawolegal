import React from 'react'

import Footer from '../component/footer'
import Navbar from '../component/navbar'
import Search from '../component/search'
// import Search from './component/search'
import Startup from "../component/startup"

function Startups() {
    return (
        <div>
            <Navbar startupactive="active" class="row main"/>
            <div className="container-fluid">
                <Search/>
               
                <Startup
                startup_name="tutahub"
                img_src="./images/tutor.jpg"
                startup_info="A website for tutorials"
                />

                <Startup
                startup_name="Anditer"
                img_src="./images/anditer.jpg"
                startup_info="Anditer is a tech blog"
                />

                <Startup
                startup_name="Think and Zoom"
                img_src="./images/think.png"
                startup_info="Providing solution for the
                 visually impaired, such as mind-controlled 
                 zooming, and waerable controlled zooming."
                />

                <Startup
                startup_name="Slatecube"
                img_src="./images/startups.png"
                startup_info="Slatecube helps job seekers develop
                 job-relevant skills, gain work experience, and 
                 land well paying jobs through world-class up-skilling 
                 courses and virtual internships."
                />

                <Startup
                startup_name="Sleekjob Acadamy"
                img_src="./images/sleekjob.png"
                startup_info="Trains world class software developers 
                in Ghana and matches them to employment opportunities."
                />
           
                
            </div>
            <Footer footer_class="startupfooter"/>
        </div>
        
    )
}

export default Startups
