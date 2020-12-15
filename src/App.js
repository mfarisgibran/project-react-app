import Navigation from './Navigation'
import Photo from './Photo'
import Profile from './Profile'
import Counter from './Counter'

function App() {
  return (
    <div>
      <Navigation/>
      <Profile name="M Faris Gibran" age={27} gender="male"/>
      <Photo/>
      <Counter/>
    </div>
  )
}

export default App
