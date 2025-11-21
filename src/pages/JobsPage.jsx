import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/Navbar'
import JobListings from '../Components/JobListings'

const ViewAllJobsPage = () => {
  return (
    <>
      <JobListings />
    </>
  )
}

export default ViewAllJobsPage