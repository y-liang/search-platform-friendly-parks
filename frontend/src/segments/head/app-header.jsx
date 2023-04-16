import BarMenu from '../../units/header/bar-menu';
import AtLogo from '../../units/header/at-logo';
import BarSearch from '../../units/header/bar-search';
import { useContext, useState } from 'react';
import Dialog from '../../parts/dialog';
import KnobMenuAccount from '../../units/header/knob-menu-account';
import AuthContext from '../../context/auth-context';


const AppHeader = ({ display }) => {
    const auth = useContext(AuthContext);

    const [scrolled, setScrolled] = useState(false);

    window.onscroll = function () { changeBarSearchMenu(); };

    function changeBarSearchMenu() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }


    const view = (() => {
        switch (display) {
            case 'cover':
                return <>
                    <AtLogo />
                    {scrolled ?
                        <BarSearch selected={{}} />
                        : <BarMenu />
                    }

                    <Dialog
                        dialog={<KnobMenuAccount alias={'account'} />}
                        alias={'account'}
                        button={{ type: 'icon', icon: auth.token ? 'pets' : 'more_horiz' }}
                    />
                </>;

            case 'platform':
                return <>
                    <AtLogo />
                    <BarSearch selected={{}} />

                    <Dialog
                        dialog={<KnobMenuAccount alias={'account'} />}
                        alias={'account'}
                        button={{ type: 'icon', icon: auth.token ? 'pets' : 'more_horiz' }}
                    />
                </>;

            case 'detail':
                return <>
                    <AtLogo />
                    <BarSearch selected={{}} />

                    <Dialog
                        dialog={<KnobMenuAccount alias={'account'} />}
                        alias={'account'}
                        button={{ type: 'icon', icon: auth.token ? 'pets' : 'more_horiz' }}
                    />
                </>;

            case 'account':
                return <>
                    <AtLogo />
                </>;


            default:
                return <>
                    <AtLogo />
                </>;
        }
    })();


    return (
        <>
            <div className={`AppHeader ${display}`}>
                {view}
            </div>
        </>

    );
};


export default AppHeader;