import { Comment } from "./components/comment/comment";
import { Feature } from "./components/features/feature";
import { Footer } from "./components/footer/footer";
import { Headers } from "./components/header/header";
import { Main } from "./components/mainpage/main";
import { Services } from "./components/services/services";
import { Watch } from "./components/watch/watch";

function App() {
  return (
    <>
      <Headers />
      <Main />
      <Services />
      <Watch />
      <Feature />
      <Comment />
      <Footer />
    </>
  );
}

export default App;
