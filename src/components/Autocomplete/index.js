import { compose, withHandlers } from 'recompose';
import Autocomplete from './Autocomplete'
import withKey from './hocs/withKey';
import withGetItems from './hocs/withGetItems';

const enhance = compose(
    withKey,
    withGetItems,
    withHandlers({
        onChangeInput: (props) => (value) => {
            props.getItems(value);
        },

        onSelectAutocomplite: (props) => (item) => (e) => {
            props.updateKey();
            props.onChange(item);
        },

        onBlur: (props) => () => {
            props.getItems('');
        },
    })
);


const EnhancedAutocomplete = enhance(Autocomplete);

export default EnhancedAutocomplete;