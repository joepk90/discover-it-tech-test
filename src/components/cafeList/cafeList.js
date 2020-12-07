import React, { Component } from 'react';

import CafeItem from "src/classes/cafeItem"
import { getCafeItems } from 'src/services/konticoService';
import Table from 'src/components/common/table';
import _ from 'lodash';

class CafeList extends Component {

    state = {
        cafeItems: [],
        sortColumn: { path: 'title', order: 'asc' },
    }

    handleSort = sortColumn => {

        this.setState({ sortColumn });
    }

    mutateCafeItems(items) {

        return items.map((item) => {

            const cafeItem = new CafeItem(item);

            return cafeItem.prepareCafeItemObject();

        })

    }

    getSortedData = () => {

        const { sortColumn, cafeItems: filtered } = this.state;

        return _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

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

        const { sortColumn } = this.state;

        const columns = [
            { path: 'name', label: 'Name' },
            { path: 'email', label: 'Email' },
            { path: 'phone_number', label: 'Phone Number' },
            { path: 'city', label: 'City' },
            { path: 'street', label: 'Street' },
            { path: 'zip_code', label: 'Zip Code' },
        ];

        return (
            <div className="cafe-list">
                <Table
                    columns={columns}
                    sortColumn={sortColumn}
                    data={this.getSortedData()}
                    onSort={this.handleSort}
                />
            </div>
        );
    }
}

export default CafeList;