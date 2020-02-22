import React, {Component} from 'react';


const Jinseok = (props) => {
    const { yak,jong,bok   } = props;
    
    return (
        <article>
            <section>
                {yak}{jong}{bok}
            </section>
        </article>
    )
}
export default Jinseok;