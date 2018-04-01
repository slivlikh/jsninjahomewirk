import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/Autocomplete/index.js');
    require('../stories/Widget/index.js');
}

configure(loadStories, module);