import React from 'react';
import UserLayout from '../../../hoc/user';
import ManageBrands from './manage_brands';
import ManageWoods from './manage_woods';

const ManageCategories = () => {
    return (
        <UserLayout>
            <div>
                <ManageBrands/>
                <ManageWoods/>
            </div>
        </UserLayout>

    );
};

export default ManageCategories;
