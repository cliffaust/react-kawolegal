import React from 'react'


export default function Startup(props) {
    return (
        
			<div className="row subcontent">
				<div className="col-md-1"></div>
				<div className="col-md-3 ">
					<a href="#" className="thumbnail startupimg">
				      <img src={props.img_src} alt="..."/>
				    </a>
				</div>
				<div className="col-md-7 text-left startupcontent">
					<h3>{props.startup_name}</h3>
					<p>{props.startup_info}</p>
					<button type="button" className="btn btn-primary startupbtn"><a href="#">See full details</a></button>
					<hr/>
				</div>
				<div className="col-md-1"></div>
			</div>
	
            
        
    )
}
