import React, {Component} from 'react';
import Link from '../common/Link';
import styled from 'styled-components';
import NewMedicineCompareProps from '../common/NewMedicineCompareProps';
import OverMedicineCompareProps from '../common/OverMedicineCompareProps';
import OverItemMedicine from '../common/OverItemMedicine';

const CompareBox = styled.section`
    position: absolute;
    width: 60%;
    margin: 7%;
    border: 5px solid black;
    padding: 0% 0% 1% 0%;
    
`;

const CompareBoxNew = styled.section`
    position: relative;
    float: left;
    width: 47%;
    border-right-width: 3px;
    border-right-style: solid;
    border-right-color: black;
    padding: 1%;
    text-align: center;
`;

const CompareBoxOld = styled.section`
    position: relative;
    float right;
    width: 47%;
    padding: 1%;
    text-align: center;
`;

const CompareBoxBottom = styled.section`
    position: relative;
    width: 98%;
    float left;
    border-top-style: double;
    border-top-width: 5px;
    border-top-color: black;
    padding: 1%;
`;

const CompareHead = styled.section`
    font-size: 20px;
    font-weight: bold;
    color: violet;
`;

const CompareOverHead = styled.section`
    font-size: 20px;
    font-weight: bold;
    color: red;
    text-align: center;
`;

class MedicineCompare extends Component {
    constructor(props){
        super(props)
            this.state={
            MainMedicine: [
                {
                    name: "코푸 : ",
                    eff: "콧물, 가래 개선",
                    MedicineNum: 1,
                },
                {
                    name: "타이레놀 : ",
                    eff: "두통 완화 및 고열 방지",
                    MedicineNum: 2,
                },
                {
                    name: "해록신정 : ",
                    eff: "각종 감염증 치료에 사용",
                    MedicineNum: 3,
                },
                {
                    name: "슈다페드정 : ",
                    eff: "코막힘을 개선시켜 주는 약",
                    MedicineNum: 4,
                },
                {
                    name: "★ : ", 
                    eff: "Test",
                    MedicineNum: 5,
                },
            ],

            OverMedicine: [
                {
                    name: "코푸 : ",
                    eff: "콧물, 가래 개선",
                    MedicineNum: 1,
                },
                {
                    name: "타이레놀 : ",
                    eff: "두통 완화 및 고열 방지",
                    MedicineNum: 2,
                },
                {
                    name: "해록신정 : ",
                    eff: "각종 감염증 치료에 사용",
                    MedicineNum: 3,
                },
                {
                    name: "에이프로젠 : ",
                    eff: "위장관 운동 조절제",
                    MedicineNum: 4,
                },
                {
                    name: "☎ : ",
                    eff: "■ Test ■",
                    MedicineNum: 6,
                },
            ], 
            MainItems: [],
            OverItems: [],
            };
        }

    render(){
        const {
            MainItems,
            OverItems,
            MainMedicine,
            OverMedicine,
                            } = this.state;

        for (let i = 0 ; i<this.state.MainMedicine.length ; i++) {
            for (let j = 0 ; j<this.state.OverMedicine.length ; j ++) {
                if (this.state.MainMedicine[i].MedicineNum == this.state.OverMedicine[j].MedicineNum) {
                    OverItems.push(this.state.MainMedicine[j]);
                }
            }
        }

        return(
            <main className = "MedicineCompare">
                <Link />

                <CompareBox>    <article>
                    
                    <CompareBoxNew> <section>
                        <CompareHead>   <p> 신규 처방 약</p>   </CompareHead>
                    {this.state.MainMedicine.map(item => <NewMedicineCompareProps
                        name={item.name} 
                        eff={item.eff}
                        />)}
                    </section>  </CompareBoxNew>

                    <CompareBoxOld>    <section>
                        <CompareHead>   <p> 기존 처방 약 </p>   </CompareHead>
                        {this.state.OverMedicine.map(item => <OverMedicineCompareProps
                        name={item.name} 
                        eff={item.eff}
                        />)}
                    </section>      </CompareBoxOld>
                            <br/>
                    <CompareBoxBottom>   <section>
                        
                        <CompareOverHead>   <p> 중복 처방 약</p>    </CompareOverHead>
                        {this.state.OverItems.map(item => <OverItemMedicine
                            name={item.name}
                            eff={item.eff}
                            MedicineNum={item.MedicineNum}
                            />)}
                    </section>  </CompareBoxBottom>

                            </article>  </CompareBox>


                </main>
            );
        };
    }

export default MedicineCompare;