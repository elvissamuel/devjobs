import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import './JobAd.scss'
import data from '../data.json'
import Button from './Button'
import searchIcon from '../assets/desktop/icon-search.svg'
import iconFilter from '../assets/mobile/icon-filter.svg'
import iconLocation from '../assets/desktop/icon-location.svg'
import Job from './Job';
import { JobContext } from './JobContext';
import '../sass/Variables.scss';

const JobAd = () => {
  
  const {jobValue, handleInput1, handleInput2, jobData, setJobData, filteredJobs, filteredJobList, handleSearch, isBtnClicked, searchArray, isChecked, handleChecked, clickTheme, handleClickTheme} = useContext(JobContext);

  const myData = isBtnClicked ? filteredJobs : data;
  const s_bg_dark = '#19202D';
  const p_bg_dark = '#121721';
  const p_text_dark = '#ffffff';
  const s_text_dark = '#6E8098';

  const darkTheme = {backgroundColor: p_bg_dark, color: p_text_dark};
  const darkTheme2 = {backgroundColor: s_bg_dark, color: p_text_dark};
  
  
  return (
    <div className="JobAd" style={clickTheme ? darkTheme : null}>
        <div className='searchBox' style={clickTheme ? darkTheme2 : null} >
            <div className="title" >
              <input type="text" style={clickTheme ? darkTheme2 : null}  onChange={handleInput1} placeholder='Filter by title' />
            </div>
            <div className="location">
              <input type="text" style={clickTheme ? darkTheme2 : null}  onChange={handleInput2} placeholder='Filter by location' />
            </div>
            <div className="checkBox">
              <input type="checkbox" style={clickTheme ? darkTheme2 : null}  id="myCheck"  className='myCheck' onChange={handleChecked}/>
              <label htmlFor="myCheck">Full Time Only</label>
              <button onClick={handleSearch}>Search</button>
            </div> 
            <div className="searchIcon" onClick={handleSearch}>
                <img src={searchIcon} alt="" />
            </div>
            <div className="filterIcon"><img src={iconFilter} alt="" /></div>
            <div className="locationIcon"><img src={iconLocation} alt="" /></div>
        </div>
      <div className="jobBox">
        {myData.map((job, index) => {
          // const searchValue = job.position.toLowerCase().split(' ').includes(inputValue.toLowerCase());
          return (<Job job={job} id={index}/>)
          

          
  
  
                // <Link className='myLink' to={`/${job.id}`}>
                //     <div className="jobAdContainer">
                //         <div className="jobLogo">
                //             <img src={job.logo} alt="" />
                //         </div>
                //         <div className="jobDuration">
                //             <span>{job.postedAt}. </span>
                //             <span>{` ${job.contract}`}</span>
                //         </div>
                //         <h3 className='jobPosition'>{job.position}</h3>
                //         <h6 className='jobCompany'>{job.company}</h6>
                //         <h5 className='jobLocation'>{job.location}</h5>
                //     </div>
                // </Link>
         
        })}
      </div>

      <Button text="Load More" type='primaryBtn1' />
    </div>
  )
}

export default JobAd
