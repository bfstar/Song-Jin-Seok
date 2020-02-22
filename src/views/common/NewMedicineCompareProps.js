import React, { Component } from 'react';

const NewMedicineCompareProps = (props) => {
    const { name, eff } = props;

    return (
        <article>
            <section>
                        { name } { eff }
            </section>
        </article>
    );
}

export default NewMedicineCompareProps;