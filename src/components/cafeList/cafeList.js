import React, { Component } from 'react';

import CafeItem from "src/classes/cafeItem"
import { getCafeItems } from 'src/services/konticoService';
import Table from 'src/components/common/table';

class CafeList extends Component {

    state = {
        cafeItems: []
    }


    mutateCafeItems(items) {

        return items.map((item) => {

            const cafeItem = new CafeItem(item);

            return cafeItem.prepareCafeItemObject();

        })

    }

    async updateCafeItems() {

        try {
            const cafeListResponse = await getCafeItems();

            if (!cafeListResponse.data || !cafeListResponse.data.items) {
                return;
            }

            this.setState({
                cafeItems: this.mutateCafeItems(cafeListResponse.data.items)
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