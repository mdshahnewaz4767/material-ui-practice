import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import "./Check.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';


const CheckboxExample = () => {
    const [checked, setChecked] = React.useState(true);
    return (
        <div>
            <FormControlLabel
                control = {
                    <Checkbox 
                        checked={checked} 
                        onChange={(e) => setChecked(e.target.checked)} 
                        inputProps = {{
                        'aria-label': 'secondary checkbox'
                        }} 
                        icon={<DeleteIcon />}
                        checkedIcon={<SaveIcon />}
                    />
                }
                label = "Testing Checkbox"
            />
        </div>
    )
}

const Check = () => {
    return (
        <div style={{marginTop: '1rem'}}>
           <CheckboxExample />
        </div>
    );
};

export default Check;