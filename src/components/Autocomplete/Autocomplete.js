import React from 'react';

import Input from './Input/';
import ResultItem from './Item/Item';

import './style.css';

const Autocomplete = ({ onChangeInput, onBlur, onSelectAutocomplite, value, wrapperClassName, itemsList, isItemsListVisible = true, children }) => {

    return (
        <div className={`autocomplete-wrapper ${wrapperClassName}`} >
            <label htmlFor="autocomp">


            <Input id='autocomp' name='autocomp' className={'autocomplete'} onChange={onChangeInput} onBlur={onBlur} value={value} />


            { itemsList.length > 0 &&

            <div className='autocomplete_result' >
                { itemsList.map((item, idx)=>(
                    <ResultItem key={idx} onClick={ onSelectAutocomplite(item) }>
                        { children(item) }
                    </ResultItem>
                )) }
            </div>
            }

            </label>

        </div>
    )
};

export default Autocomplete;