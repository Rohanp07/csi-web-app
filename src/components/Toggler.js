import { func, string } from 'prop-types';
import '../styles/tgl.scss';

const Toggle = ({theme,  toggleTheme }) => {
    return (
        <>
          <input className="tgl tgl-skewed" id="cb3" type="checkbox" onClick={toggleTheme} />
          <label className="tgl-btn" data-tg-off="Prefer Dark?!" data-tg-on="Switch Back!" for="cb3"></label>
        </>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
