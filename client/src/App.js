import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Menu } from './menu';
import { LibraryLogin } from './Component/LibraryLogin';
import { LibraryAddMember } from './Component/LibraryAddMember';
import { Homepage } from './Component/Homepage';
import { LibraryHomePage } from './Component/LibraryHomePage';
import { LibraryAddBook } from './Component/LibraryAddBook';
import { LibraryViewMember } from './Component/LibraryViewMember';
import { LibraryViewBook } from './Component/LibraryViewBook';
import { LibraryUpdateMember } from './Component/LibraryUpdateMember';
import { LibraryUpdateBook } from './Component/LibraryUpdateBook';
import { LibraryIssuePage } from './Component/LibraryIssuePage';
import { LibraryTransactionList } from './Component/LibraryTransactionList';

function App() {
  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Menu/>,<Homepage/>]} ></Route>
      <Route path='/login' element={[<LibraryLogin/>]} ></Route>
      <Route path='/LibraryAddMember' element={[<LibraryAddMember/>]} ></Route>
      <Route path='/LibraryHomePage' element={[<LibraryHomePage/>]} ></Route>
      <Route path='/LibraryAddPage' element={[<LibraryAddBook/>]} ></Route>
      <Route path='/LibraryViewMember' element={[<LibraryViewMember/>]} ></Route>
      <Route path='/LibraryViewBook' element={[<LibraryViewBook/>]} ></Route>
      <Route path='/LibraryUpdateMember/:memberId' element={[<LibraryUpdateMember/>]} ></Route>
      <Route path='/LibraryUpdateBook/:bookId' element={[<LibraryUpdateBook/>]} ></Route>
      <Route path='/LibraryIssuePage' element={[<LibraryIssuePage/>]} ></Route>
      <Route path='/LibraryTransactionList' element={[<LibraryTransactionList/>]} ></Route>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
