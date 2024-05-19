import Navbar from "./components/navbar"
import Hero from "./components/hero"
import HomeCards from "./components/homecards"
import JobListings from "./components/joblistings"
import ViewAllJobs from "./components/viewalljobs"

const App = () => {
  return (
    <>
    <Navbar />
    <Hero title='Test Title' subtitle='this is the subtitle' />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
  
    </>
  )
}

export default App