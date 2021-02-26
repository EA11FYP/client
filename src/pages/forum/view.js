import React from 'react';
import { useParams } from 'react-router';

import View from '../../components/forum/view/index';

const view = () => {
    let { id } = useParams();
    return (
        <div>
            <View id={id} />
        </div>
    );
};

export default view;