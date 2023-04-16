import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppFrame from '../parts/app-frame';
import PlatformPark from '../frames/platform-park';
import SignUp from '../frames/sign-up';
import LogIn from '../frames/log-in';

import NotFound from './not-found';
import ParkDetail from '../frames/park-detail';
import Cover from '../frames/cover';
import ProfileDetail from '../frames/profile-detail';
import PasswordReset from '../frames/password-reset';
import PasswordForget from '../frames/password-forget';
import AccountSetting from '../frames/account-setting';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppFrame display='cover' />}>
                    <Route path='' element={<Cover />} />
                </Route>

                <Route path='parks' element={<AppFrame display='platform' />}>
                    <Route path='p:page' element={<PlatformPark />} />
                    {/* <Route path=':locator' element={<ParkDetail />} /> */}
                    <Route path='' element={<NotFound />} />
                </Route>

                <Route path='park' element={<AppFrame display='detail' />}>
                    <Route path=':locator' element={<ParkDetail />} />
                    <Route path='' element={<NotFound />} />
                </Route>

                <Route path='profile' element={<AppFrame display='detail' />}>
                    <Route path=':locator' element={<ProfileDetail />} />
                    <Route path='' element={<ProfileDetail />} />
                </Route>

                <Route path='account' element={<AppFrame display='account' />}>
                    <Route path='signup' element={<SignUp />} />
                    <Route path='login' element={<LogIn />} />
                    <Route path='setting' element={<AccountSetting />} />
                    <Route path='password-forget' element={<PasswordForget />} />
                    <Route path='password-reset' element={<PasswordReset />} />
                    <Route path='' element={<NotFound />} />
                </Route>


                <Route path='*' element={<AppFrame display='notfound' />} />
            </Routes>
        </BrowserRouter>
    );
};




export default AppRouter;