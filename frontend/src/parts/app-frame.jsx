import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../segments/head/app-header';
import AppFooter from '../segments/foot/app-footer';
import AuthContext, { ProfileProvider } from '../context/auth-context';
import './styles/app-frame.css';
import useAccount from '../hooks/useAccount';



const AppFrame = ({ display }) => {



	// and now, the context has the most updated valid token when app loads
	// token and its set method, both are value to context
	return (
		<ProfileProvider>
			<div className={'AppFrame ' + display}>
				<AppHeader display={display} />
				<Outlet />
				<AppFooter display={display} />
			</div>
		</ProfileProvider>
	);
};

export default AppFrame;




/**
 * variations of frame
 * not using because AuthContext needs to persist
 *

export const CoverFrame = () => {
	 return (
		  <>
				<AppFrame display={'cover'} />
		  </>
	 );
};


export const PlatformFrame = () => {
	 return (
		  <>
				<AppFrame display={'platform'} />
		  </>
	 );
};


export const AccountFrame = () => {
	 return (
		  <>
				<AppFrame display={'account'} />
		  </>
	 );
};

 */


