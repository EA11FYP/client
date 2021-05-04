import React from 'react';
import { useParams } from 'react-router';

import View from '../../components/placement/view/index';

const view = () => {
    let { id } = useParams();
    return (
        <div>
            <View id={id} />
        </div>
    );
};

export default view;