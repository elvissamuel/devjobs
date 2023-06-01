import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './JobDetails.scss'
import { JobContext } from './JobContext'

const JobDetails = ({job}) => {
  const {clickTheme} = useContext(JobContext);
  const s_bg_dark = '#19202D';
  const p_bg_dark = '#121721';
  const p_text_dark = '#ffffff';
  const s_text_dark = '#6E8098';

  const darkTheme = {backgroundColor: p_bg_dark, color: p_text_dark, borderColor: p_bg_dark};
  const darkTheme2 = {backgroundColor: s_bg_dark, color: p_text_dark};
  return (
    <div className='JobDetails'>
      <div className="jobDetailContainer" style={clickTheme ? darkTheme : null} >
        <div className="jobHead" style={clickTheme ? darkTheme2 : null} >

            <div className="jobLogoSite">
              <div className="jobLogo">
                <img src={job.logo} alt="" />
              </div>
              <div className="jobWeb">
                <h3 className="jobCompany">{job.company}</h3>
                <Link>
                  <h4>{job.website}</h4>
                </Link>
              </div>
            </div>

            <Button text='Company Site' type={clickTheme ? 'secondaryBtn1' : 'primaryBtn1'} />

        </div>

        <div className="jobBody" style={clickTheme ? darkTheme2 : null} >
          <div className="jobBodyTop">
            <div className="jobTimeCon">
              <div className="jobTime">
                <span>{job.postedAt}</span>
                <span>{`.   ${job.contract}`}</span>
              </div>
              <h3 className="jobRole">{job.position}</h3>
              <h5 className="jobCountry">{job.location}</h5>
            </div>
            <Button text='Apply Now' type='primaryBtn1' />
          </div>

          <p className="jobDesc">{job.description}</p>

          <div className="requirement">
            <h3>Requirements</h3>
            <p className="jobRequirements">{job.requirements.content}</p>
            <ul>
              {job.requirements.items.map((item) => {
                return(
                <li>{item}</li>
                )
              })}
            </ul>
          </div>

          <div className="task">
            <h3>What You Will Do</h3>
            <p className="jobTask">{job.role.content}</p>
            <ul>
              {job.role.items.map((item) => {
                return(
                <li>{item}</li>
                )
              })}
            </ul>
          </div>

        </div>

        <div className="jobBottom" style={clickTheme ? darkTheme2 : null}>
          <div className="applyButton" style={clickTheme ? darkTheme2 : null}>
            <div className="jobDetailBottom">
                <h3 className="jobRole">{job.position}</h3>
                <h4 className="jobCompany">{job.company}</h4>
            </div>
            <Button text='Apply Now' type='primaryBtn1' />
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default JobDetails
