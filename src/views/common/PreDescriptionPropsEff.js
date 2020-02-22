import React, { Component } from 'react';

const PreDescriptionPropsEff = (props) => {
    const { PropsEff } = props;

    return (
        <article>
            <section>
                    <ol> { PropsEff } </ol>
                    <br/>
            </section>
        </article>
    );
}

export default PreDescriptionPropsEff;