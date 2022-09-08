import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {HomePage} from "./pages/HomePage";

import {NotFoundPage} from "./pages/NotFoundPage";
import {MyMenu} from "./components/Navbar";

import {NftDrive} from "./pages/NftDrive"

export default function App(){
	return(
	<BrowserRouter>	
	
	
	<MyMenu />
	<Routes>
	<Route path='/' element={<HomePage />} />
	
	<Route path ='/nftdrive' element={<NftDrive />} />
	
	
	<Route path='*' element={<NotFoundPage />} />
	</Routes>
		
	</BrowserRouter>
	);
}