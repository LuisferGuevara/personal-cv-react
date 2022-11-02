import '../index.scss';
import ProfileImg from './ProfileImg';

const Hero = ({ info }) => {
    // delete info.aboutMe;
    // const keys = Object.keys(info);
    // console.log(keys);

    return (
        <div>
            <ProfileImg/>
            <div className='contact--data'>
            <p>{info.phone}</p>
            <p>{info.email}</p>
            <p>{info.adress}</p>
            <p>{info.city}</p>
            </div>

            {/* {keys.map((keyName) => {
                return (
                    <h3>{keyName}: {info[keyName]}</h3>
                );
            })} */}
        </div>
    );
};

export default Hero;
