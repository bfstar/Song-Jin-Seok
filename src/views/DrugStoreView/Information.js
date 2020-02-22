import React, { Component } from 'react';
import Logo from "./logo.png";
import Link from '../common/Link';
import styled from 'styled-components';

const InfoBox = styled.section`
    border: 5px solid black;
    padding: 5% 2% 15% 2%;
    margin: 5%;
    width: 70%
    
`;

const H_Logo = styled.section`
    text-align: center;
`;

const Name = styled.section`
    text-align: right;
`;

const InfoDate = styled.section`
    position: relative;
    top: 21px;
    text-align: right;
`;

class Information extends Component {

    constructor(props){
        super(props);
        localStorage.setItem('itemKey', JSON.stringify({ test: 'text'}));

        this.state = {
            patient: '이유빈   |   ',
            age: '20   |   ',
            sex: '남자   |   ',
            MainMedicine: [
                {
                    name: "코푸",
                    eff: "콧물",
                },
                {
                    name: "타이레놀",
                    eff: "두통",
                }
            ],
            OverMedicine: [
                {
                    name: "코푸",
                    eff: "콧물",
                },
                {
                    name: "타이레놀",
                    eff: "두통",
                }
            ],
        };
    }

    render() {
        const item = JSON.parse(localStorage.getItem('itemKey'));
        return (
            <main className="Information">
                <article>
                        <Link />
                <hr />
                <InfoBox>
                    <H_Logo>
                        <img src={Logo}></img>
                    </H_Logo>
                    <InfoDate> <tag> 2019/12/27 </tag></InfoDate>
                        <section>
                            이름 : {this.state.patient}
                            나이 : {this.state.age}
                            성별 : {this.state.sex}
                        </section>
                <hr/>
                        <p><mark>기존처방약</mark> (2019/12/17 ~ 2019/12/20)</p>
                        <p> 
                            {this.state.MainMedicine[0].name} 
                            ( {this.state.MainMedicine[0].eff} )  x 9
                        </p>
                        <p> 
                            {this.state.MainMedicine[1].name} 
                            ( {this.state.MainMedicine[1].eff} )  x 9
                        </p>
                <hr/>
                        <p><mark>신규처방약</mark> (2019/12/27 ~ 2019/12/30)</p>
                        <p> {this.state.OverMedicine[0].name} 
                            ( {this.state.OverMedicine[0].eff} ) x 9
                        </p>
                        <p> {this.state.OverMedicine[1].name}
                            ( {this.state.OverMedicine[1].eff} ) x 9
                        </p>
                        <tag>* 약 개수는 의사의 처방전으로부터 props로 불러올 거임. *</tag>
                        <Name>
                            <p> 약사 </p>
                        </Name>
                        </InfoBox>
                </article>
            </main>
        );
    }
}

export default Information;