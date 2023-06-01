import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useLocalStorageState } from 'use-local-storage-state';
import Button from './components/Button';
import JobAd from './components/JobAd';
import Navigation from './components/Navigation';
import data from './data.json'
import JobDetails from './components/JobDetails';
import { JobContext } from './components/JobContext';
import { useState } from 'react';

function App() {

  const [jobValue, setJobValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [jobData, setJobData] = useState(data);
  const [searchArray, setSearchArray] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredLocation, setFilteredLocation] = useState([]);
  const [isBtnClicked, setIsBtnClicked] = useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const [clickTheme, setClickTheme] = useState(false);

  const handleInput1 = (e) => {
    // e.preventDefault();
    setJobValue(e.target.value);
    // console.log(inputValue)
  }
  const handleClickTheme = (e) => {
    setClickTheme(e.target.checked);
  }
  const handleInput2 = (e) =>{
    setLocationValue(e.target.value);

  }
  const handleChecked = (e) =>{
    setIsChecked(e.target.checked);
  }
  const filteredJobList = (input1, input2, checked) => {
    
    const filterJob = data.filter((fil) => {
      return( 
        fil.position.toLowerCase().includes(input1.toLowerCase()) && 
        fil.location.toLowerCase().includes(input2.toLowerCase()) &&
        (checked ? fil.contract === 'Full Time' : true)
      );
    })
    setFilteredJobs(filterJob);

  }


  const handleSearch = () =>{
    setIsBtnClicked(true);
    filteredJobList(jobValue, locationValue, isChecked);
    console.log('New Array ', filteredJobs);
  };

  

  const contextValues = {jobValue, handleInput1, handleInput2, jobData, setJobData, filteredJobs, handleSearch, isBtnClicked, searchArray, isChecked, handleChecked, clickTheme, handleClickTheme} 

  // const [theme, setTheme] = useLocalStorageState();
  return (
    <div className="App">
      <JobContext.Provider value={contextValues}>
        <Router basename="/devjobs"> 
          <Navigation />
          {/* <JobAd /> */}

          <Routes>
            <Route path='/' Component={JobAd} />

            {data.map((myJob) => {
              return(
                <Route path={`/${myJob.id}`} element={<JobDetails job={myJob} />} />
              )
            })}
          </Routes>
      </Router>
      </JobContext.Provider>
     
    </div>
  );
}

export default App;
