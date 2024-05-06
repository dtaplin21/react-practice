import Navbar from "./components/navbar"
import Hero from "./components/hero"
import HomeCards from "./components/homecards"
import JobListings from "./components/joblistings"

const App = () => {
  return (
    <>
    <Navbar />
    <Hero title='Test Title' subtitle='this is the subtitle' />
    <HomeCards />
    <JobListings />
  

  {/* <!-- Developers and Employers --> */}
  

  {/* <!-- Browse Jobs --> */}
 
  <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  )
}

export default App