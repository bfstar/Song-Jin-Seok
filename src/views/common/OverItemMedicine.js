import React, { Comonent } from 'react';

const OverItemMedicine = (props) => {
    const { name, eff, MedicineNum } = props;

    const Red = {
        color: 'red',
    }

    return (
        <article>
            <section>
                { name }
                <tag style={Red}>
                    { eff }
                </tag>
                <mark><b> *  {MedicineNum} * </b></mark>
            </section>
        </article>
    );
}

export default OverItemMedicine;