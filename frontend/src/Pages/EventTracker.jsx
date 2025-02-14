import SearchFilter from "@/Components/SearchFilter"
import UpcomingContests from "@/Components/UpcomingContests"

function EventTracker() {
  return (
    <div className='pt-20'>
      <SearchFilter/>
      <UpcomingContests/>
    </div>
  )
}

export default EventTracker
