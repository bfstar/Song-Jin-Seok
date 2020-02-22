//복약지도

import React, {Component} from 'react';
import Link from '../common/Link';
import styled from 'styled-components';
import Jinseok from '../TestView/Jinseok';

const Input = styled.input`

vertical-align:text-top; width:200px; height:270px; 
`;

class MedicineGuide extends Component{

    constructor(props){
        super(props)
        this.state={
          notice: '',

          MedicineName : [
              {
              name: '타이레놀',
              comment: '해열제',
              },
              {
                name: '이가탄',
              comment: '잇몸약',
              },
              {
                name: '게보린',
              comment: '두통약',
              },
              {
                name: '늘어났는지 테스트해보자',
                comment: '으엉앜',
             },
              ]
        }
    }  
    handleChange = (e) => {

        this.setState({
    
          [e.target.name]: e.target.value
    
        })
    
      }
// REACT = 반응형

    render(){

        return(
              <div>
<section>
              <p> 약 이름</p>
              { this.state.MedicineName.map(item => <Jinseok
                yak={item.name} 
              />
              )
            }  
</section>
<section>
              <p> 약 코멘트</p>
              { this.state.MedicineName.map(item => <Jinseok
                jong={item.comment} 
              />
              )
            }  
</section>
<section>
              <p> 약 공지사항</p>
               <input
                  placeholder="알림사항 달아주세요"
                  value={this.state.notice}
                  onChange={this.handleChange}
                  name='notice'
                />

                {this.state.notice}
</section>
              </div>
        )
    }
}

export default MedicineGuide;    