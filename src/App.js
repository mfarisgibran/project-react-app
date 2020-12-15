import Layout from './Layout'
import Navigation from './Navigation'
import Photo from './Photo'
import Profile from './Profile'
import Counter from './Counter'

function App() {
  return (
    <Layout>
      <Navigation/>
      <Profile name="M Faris Gibran" age={27} gender="male"/>
      <Photo/>
      <Counter/>
    </Layout>
  )
}

export default App
