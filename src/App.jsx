import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home, NoPage, Projects } from "./pages";

//TODO: FIX THE ROUTING ISSUES. 
//FROM PROJECTS PAGE, SERVICES, ABOUT, AND CONTACT-US LINKS SHOULD LINK BACK TO THE HOME BEFORE LINKING TO THE SECTION WITH THE ID
export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </main>
  )
}