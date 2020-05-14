import React from 'react';
import './App.css';
import {Layout, Content} from "react-mdl";
import Main from "./components/main";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >
      <Layout  >
          {/* <Header className = "header-color" title="eric he">
              <Navigation>
                  <Link to="/aboutme">about</Link>
                  <Link to="/resume">resume</Link>
                  <Link to="/contact">contact</Link>
              </Navigation>
          </Header> */}
          <NavBar />

          <Content> 
            <Main />
          </Content>
      </Layout>
    </div>
  );
}

export default App;
