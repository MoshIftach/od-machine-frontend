import './App.css';
import {
    BrowserRouter as
    Router,
    Route,
    Routes
} from "react-router-dom";
import {MainPage} from "./components/mainPage";
import {EditEmployeePage} from "./components/UpdateEmployeeDetailes/editEmployeePage";


function App() {
    let today = new Date()

  return (

          <div className="main-container">
              <header className='main-header'>
                  <a href="/">
                      <img width="100" height="42" src="https://www.odmachine.com/wp-content/uploads/2020/10/ODM_logo.png"
                           className="attachment-large size-large" alt="Odm Logo"
                           srcSet="https://www.odmachine.com/wp-content/uploads/2020/10/ODM_logo.png 883w, https://www.odmachine.com/wp-content/uploads/2020/10/ODM_logo-300x128.png 300w, https://www.odmachine.com/wp-content/uploads/2020/10/ODM_logo-768x328.png 768w"
                      />
                  </a>
                  <div className='date-wrapper'>
                      {`${today.toString().substring(0,15)}`}
                  </div>
              </header>

              <Router>
                  <Routes>
                      <Route path="/" element={<MainPage />}/>
                      <Route path="/edit" element={<EditEmployeePage />}/>
                  </Routes>
              </Router>

              <footer className='main-footer'>
                  All Rights Reserved
              </footer>
          </div>
  );
}

export default App;
