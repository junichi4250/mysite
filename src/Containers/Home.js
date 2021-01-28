import Header from '../Components/Header';
import Cover from '../Components/Cover';
import ContentsNav from '../Components/ContentsNav.js';
import Profile from '../Components/Profile';
import Biography from '../Components/Biography';
import Sns from '../Components/Sns';

function Home() {
    return (
        <div>
            <Header />
            <Cover />
            <Profile />
            <ContentsNav />
            <Biography />
            <Sns />
        </div>
    );
}

export default Home;