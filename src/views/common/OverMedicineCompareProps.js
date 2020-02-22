import React, { Component } from 'react';


const OverMedicineCompareProps = (props) => {
    const { name, eff } = props;

    return (
        <article>
            <section>
                        { name } { eff }
            </section>
    </article>
    );
}

export default OverMedicineCompareProps;