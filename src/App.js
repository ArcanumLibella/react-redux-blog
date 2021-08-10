import { Header } from './layouts'
import { PostList } from './components'

function App() {
  return (
    <div className="App">
      <Header />

      <main className="container max-screen-xl mx-auto pt-8">
        <div className="flex flex-col md:flex-row justify-between px-4">
          <PostList />
        </div>
      </main>
    </div>
  );
}

export default App;
