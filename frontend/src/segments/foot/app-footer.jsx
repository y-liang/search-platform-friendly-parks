import BarLegal from '../../units/footer/bar-legal';
import BarDirectory from '../../units/footer/bar-directory';
import ToggleTheme from '../../units/footer/toggle-theme';

const AppFooter = ({ display }) => {

    const view = (() => {
        switch (display) {
            case 'cover':
                return <>
                    <BarLegal />
                    <BarDirectory />
                    <ToggleTheme />
                </>;

            case 'platform':
                return <>
                    <BarLegal />
                    <BarDirectory />
                    <ToggleTheme />
                </>;

            case 'detail':
                return <>
                    <BarLegal />
                    <BarDirectory />
                    <ToggleTheme />
                </>;

            case 'account':
                return <>
                    <BarLegal />
                    <BarDirectory />
                    <ToggleTheme />
                </>;


            default:
                return <>
                    <BarLegal />
                    <BarDirectory />
                    <ToggleTheme />
                </>;
        }
    })();

    return (
        <div className={`AppFooter ${display}`}>
            {view}
        </div>
    );
};

export default AppFooter;