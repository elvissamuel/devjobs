import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { JobContext } from './JobContext'

const Job = ({job, id}) => {

  const {inputValue, isChecked, clickTheme} = useContext(JobContext);
  const s_bg_dark = '#19202D';
  const p_bg_dark = '#121721';
  const p_text_dark = '#ffffff';
  const s_text_dark = '#6E8098';

  const darkTheme = {backgroundColor: p_bg_dark, color: p_text_dark};
  const darkTheme2 = {backgroundColor: s_bg_dark, color: p_text_dark, boxShadow: 'none'};
  return (
    <div key={id}>
      <Link className='myLink' to={`/${job.id}`}>
          <div className="jobAdContainer" style={clickTheme ? darkTheme2 : null} >
              <div className="jobLogo">
                  <img src={job.logo} alt="" />
              </div>
              <div className="jobDuration">
                  <span>{job.postedAt}. </span>
                  <span>{` ${job.contract}`}</span>
              </div>
              <h3 className='jobPosition'>{job.position}</h3>
              <h6 className='jobCompany'>{job.company}</h6>
              <h5 className='jobLocation'>{job.location}</h5>
          </div>
        </Link>
    </div>
  )
}

export default Job
