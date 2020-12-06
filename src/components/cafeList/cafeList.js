import React, { Component } from 'react';

import { getCafeItems } from 'src/services/konticoService';

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
                invoiceList: cafeListResponse.items
            });


        } catch (err) {

            console.log(err);

        }

    }

    async componentDidMount() {

        this.updateCafeItems();

    }

    render() {

        const { cafeItems } = this.state;

        return (
            <div className="cafe-list">

            </div>
        );
    }
}

export default CafeList;