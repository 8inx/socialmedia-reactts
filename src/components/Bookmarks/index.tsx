import Pressable from "shared/Pressable";
import IconPeople from "assets/icons/people.png"
import IconMostRecent from "assets/icons/most_recent.png"
import IconMessenger from "assets/icons/messenger.png"
import IconAdActivity from "assets/icons/ad_activity.png"
import IconGroups from "assets/icons/groups.png"
import IconAdvertisement from "assets/icons/advertisement.png"
import IconBlood from "assets/icons/blood.png"
import IconHelp from "assets/icons/help.png"
import IconEvents from "assets/icons/events.png"
import IconFavorites from "assets/icons/favorites.png"
import IconJobs from "assets/icons/jobs.png"
import IconLive from "assets/icons/live.png"
import IconStore from "assets/icons/store.png"
import IconPages from "assets/icons/pages.png"
import IconPlay from "assets/icons/play.png"
import IconWatch from "assets/icons/watch.png"
import IconWeather from "assets/icons/weather.png"

const Bookmarks = () => {
  return (
      <>
        <Pressable to="/" src={IconPeople} >Friends</Pressable>
        <Pressable to="/" src={IconMostRecent}>Most Recent</Pressable>
        <Pressable to="/" src={IconMessenger}>Messenger</Pressable>
        <Pressable to="/" src={IconAdActivity}>Recent Ad Activity</Pressable>
        <Pressable to="/" src={IconGroups}>Groups</Pressable>
        <Pressable to="/" src={IconAdvertisement}>Ads</Pressable>
        <Pressable to="/" src={IconBlood}>Blood Donations</Pressable>
        <Pressable to="/" src={IconHelp}>Community Help</Pressable>
        <Pressable to="/" src={IconEvents}>Events</Pressable>
        <Pressable to="/" src={IconFavorites}>Favorites</Pressable>
        <Pressable to="/" src={IconJobs}>Jobs</Pressable>
        <Pressable to="/" src={IconLive}>Live Videos</Pressable>
        <Pressable to="/" src={IconStore}>Marketplace</Pressable>
        <Pressable to="/" src={IconPages}>Pages</Pressable>
        <Pressable to="/" src={IconPlay}>Play Games</Pressable>
        <Pressable to="/" src={IconWatch}>Watch</Pressable>
        <Pressable to="/" src={IconWeather}>Weather</Pressable>
      
      </>
  )
}

export default Bookmarks;