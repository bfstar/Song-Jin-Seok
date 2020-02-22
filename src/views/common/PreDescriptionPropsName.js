import React, { Component } from 'react';

const PreDescriptionPropsName = (props) => {
    const { PropsName } = props;

    return (
        <article>
            <section>
                    <ol> { PropsName } </ol>
                    <br/>
            </section>
        </article>
    );
}

export default PreDescriptionPropsName;