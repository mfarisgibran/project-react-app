import Navigation from './Navigation'
import Photo from './Photo'
import Profile from './Profile'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Profile name="M Faris Gibran" age="27" gender="male"></Profile>
      <Photo></Photo>
    </div>
  )
}

export default App
