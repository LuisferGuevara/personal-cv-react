import '../index.scss';
import ProfileImg from './ProfileImg';

const Hero = ({ info }) => {
    return (
        <div>
            <ProfileImg/>
            <div className='contact--data'>
            <p>{info.phone}</p>
            <p>{info.email}</p>
            <p>{info.adress}</p>
            <p>{info.city}</p>
            </div>
        </div>
    );
};

export default Hero;
