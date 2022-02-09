import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

let Selector = ({options})=>{
    return(
        <Dropdown className='cdrop' options={options} value={options[0]} />
    )
}
export default Selector