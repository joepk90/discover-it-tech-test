import React, { Component } from 'react';

import { getCafeItems } from 'src/services/konticoService';
import Table from 'src/components/common/table';

class CafeList extends Component {

    state = {
        cafeItems: []
    }


    async updateCafeItems() {

        try {
            const cafeListResponse = await getCafeItems();

            if (!cafeListResponse.items) {
                return;
            }

            this.setState({
                cafeItems: cafeListResponse.items
            });


        } catch (err) {

            console.log(err);

        }

    }

    async componentDidMount() {

        this.updateCafeItems();

    }

    render() {


        const columns = [
            { path: 'name', label: 'Name' },
            { path: 'email', label: 'Email' },
            { path: 'phone_number', label: 'Phone Number' },
            { path: 'city', label: 'City' },
            { path: 'street', label: 'Street' },
            { path: 'zip_code', label: 'Zip Code' },
        ];

        const { cafeItems } = this.state;

        return (
            <div className="cafe-list">
                <Table
                    columns={columns}
                    data={cafeItems}
                />
            </div>
        );
    }
}

export default CafeList;