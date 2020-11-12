import Navigation from './Navigation'
import Photo from './Photo'
import Profile from './Profile'
import Counter from './Counter'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Profile name="M Faris Gibran" age="27" gender="male"></Profile>
      <Photo></Photo>
      <Counter></Counter>
    </div>
  )
}

export default App
