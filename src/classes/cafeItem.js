import _ from 'lodash';

class CafeItem {

    constructor(cafeData) {
        this.cafe = cafeData;
    }

    getSystem() {
        return _.get(this.cafe, 'system', null);
    }

    getElements() {

        const { elements } = this.cafe;

        if (!elements) return null

        return elements;

    }

    getId() {

        const system = this.getSystem()

        if (!system || !system.id) return null;

        return system.id;
    }

    getName() {

        const system = this.getSystem()

        if (!system) return null;

        return _.get(system, 'name', null);
    }

    getElementItem(property) {

        const elements = this.getElements();

        const item = _.get(elements, property);

        if (!item) return null;

        return _.get(item, 'value', null);

    }

    prepareCafeItemObject() {
        return {
            "id": this.getId(),
            "name": this.getName(),
            "email": this.getElementItem('email'),
            "phone_number": this.getElementItem('phone'),
            "city": this.getElementItem('city'),
            "street": this.getElementItem('street'),
            "zip_code": this.getElementItem('zip_code'),
        }
    }



}

export default CafeItem;