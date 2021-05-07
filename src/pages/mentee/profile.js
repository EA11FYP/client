import React from 'react';
import { useParams } from 'react-router';

import MenteeProfile from '../../components/mentee/profile/Profile';

const profile = () => {
    let { id } = useParams();
    return (
        <div>
            <MenteeProfile menteeId={id} />
        </div>
    );
};

export default profile;