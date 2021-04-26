import React from 'react';
import { useParams } from 'react-router';

import MentorProfile from '../../components/mentor/profile/Profile';

const profile = () => {
    let { id } = useParams();
    return (
        <div>
            <MentorProfile mentorId={id} />
        </div>
    );
};

export default profile;