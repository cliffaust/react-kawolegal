import React from 'react'

function Search() {
    return (
        <div>
            <div className="row ">
				<div className="col-md-2"></div>
				<div className="col-md-8 input-group ">
			      <input type="text" className="form-control Searchbox" placeholder="search Startup by name or industry"/>
			      <span className="input-group-btn">
			        <button className="btn btn-default searchbtn" type="button"><span className="glyphicon glyphicon-search" aria-hidden="true"></span><span> </span> Search</button>
			      </span>
			    </div>
			    <div className="col-md-2"></div>	
			</div>
        </div>
    )
}

export default Search
