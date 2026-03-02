import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-zinc-900">
            <Header />
            <main>
                {/* Child routes will render here */}
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
