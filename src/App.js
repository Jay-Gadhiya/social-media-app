import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MobileMenu } from "./Components/mobileMenu/mobileMenu";
import { Navbar } from "./Components/Navbar/navbar";
import { Login } from "./Pages/Auth/login";
import { Signup } from "./Pages/Auth/signup";
import { BookmarkPage } from "./Pages/Bookmark/bookmarkPage";
import { CommentPostPage } from "./Pages/commentPost/commentPost";
import { ExplorePage } from "./Pages/Explore/explorePage";
import { HomePage } from "./Pages/Home/Home";
import { ProfilePage } from "./Pages/Profile/Profile";
import { RequiresAuth } from "./services/RequiresAuth";

function App() {

  const { token } = useSelector(store => store.user);
 
  return (

    <>
    <Toaster
      position="top-center"
      reverseOrder={true}
    />
      <Navbar />
      <MobileMenu />
      <Routes>
        <Route path="/" element={token ? <HomePage /> : <Login />} />

        <Route path="/home" element= {
          <RequiresAuth>
            <HomePage/>
          </RequiresAuth>
        } />

        <Route path="/signup" element= {<Signup/>} />9

        <Route path="/profile/:username" element= {
          <RequiresAuth>
            <ProfilePage/>
          </RequiresAuth>
        } />
        +
        <Route path="/comment/:postsId" element= {<CommentPostPage/>} />

        <Route path="/bookmark" element= {
          <RequiresAuth>
            <BookmarkPage/>
          </RequiresAuth>
        } />

        <Route path="/explore" element= {
          <RequiresAuth>
            <ExplorePage/>
          </RequiresAuth>
        } />
        
      </Routes>
    
    </>
  );
}

export default App;
