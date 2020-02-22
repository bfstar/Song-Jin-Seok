import React, {Component} from 'react';
import Link from '../common/Link';
import styled from 'styled-components';
import PreDescriptionPropsName from '../common/PreDescriptionPropsName';
import PreDescriptionPropsEff from '../common/PreDescriptionPropsEff';

const TestSeeBox1 = styled.section`
    position: relative;
    border: 2px dotted black;
    width: 8%;
    margin: 1% 1% 1% 1%;
    padding: 1% 1% 1% 1%;
    float: left;
    text-align: left;
    left: -12px;
`;
const TestSeeBox2 = styled.section`
    position: relative;
    border: 2px dotted black;
    width: 70%;
    margin: 1% 1% 1% 1%;
    padding: 1% 1% 1% 1%;
    float: left;
    left: -17px;
`;

const MainBox = styled.section`
    position: absolute;
    width: 80%
    border: 4px solid black;
    padding: -10px 1% 1% 1%;
    margin: 1% 1% 1% 1%;
`;

class PrescriptionDescription extends Component {
        constructor(props){
            super(props)
            this.state={
                Organ: '넥스탑내과',
                
                UserName: '최재완',
                UserAge: '23',
                UserSex: '남',

                Pharmacist: '김제훈',

                Drug: [
                    {
                        name: "코푸",
                        eff: "콧물, 가래 개선",
                    },
                    {
                        name: "타이레놀",
                        eff: "두통 완화 및 고열 방지",
                    },
                    {
                        name: "해록신정",
                        eff: "각종 감염증 치료에 사용",
                    },
                    {
                        name: "슈다페드정",
                        eff: "코막힘을 개선시켜 주는 약",
                    },
                    {
                        name: "에이프로젠",
                        eff: "위 장관 운동 조절제",
                    },
                ],

            };
        };

    render(){

        const BlueBoldSize = {
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'cornflowerblue',
        }

        const SubHeaderSkyBlue = {
            fontSize: '22px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: 'cornflowerblue',
        }

        return(
            <main>
                <Link />
                
                <MainBox>
                <article>
                    <section>
                        <ol style = {BlueBoldSize}> 조제약 &amp; 복약 안내 </ol>
                        <ol> 처방전발행기관 : {this.state.Organ} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 조  제  약  사 : <mark>★{this.state.Pharmacist}★</mark> </ol>
                        <ol> 환  자  성  명 : &nbsp; <b>{this.state.UserName}</b> &nbsp;&nbsp;(만 {this.state.UserAge}세 / {this.state.UserSex})</ol>
                    </section>

                    <section>
                        <ol style={SubHeaderSkyBlue}> 약 품 명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 복 약 안 내 (투약량/횟수/일수) </ol>
                    </section>

                    <TestSeeBox1>    <section>
                        {this.state.Drug.map(item => <PreDescriptionPropsName
                                    PropsName={item.name}
                                />)}
                    </section> </TestSeeBox1>

                    <TestSeeBox2>    <section>
                        {this.state.Drug.map(item2 => <PreDescriptionPropsEff
                            PropsEff={item2.eff}
                        />)}
                    </section>  </TestSeeBox2>                    
                </article> </MainBox>
            
            </main>
        )
    }
}

export default PrescriptionDescription;