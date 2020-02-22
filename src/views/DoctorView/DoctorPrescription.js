import React, { Component } from 'react';
import Link from '../common/Link';
import styled from 'styled-components';

const PopUp = styled.section`
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  min-height: 200vmax;
  position: absolute;
  left: 0px;
  top: 0px;
  display: ${p => p.displayOption};
`;

const PopUpInput = styled.section`
  background-color: #fff;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: left;
  & label {
    width: 2000px;
    display: inline-block;
    text-align:left;
  }
`;

class DoctorPrescription extends Component {
  constructor(props){
    super(props)
    this.state = {
      UserName: '',
      UserSex: '',
      UserAge: '',
      MainMedicine: '',
      MedicineNum: 0,
      isOpen: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handlePlus = () => {
    this.setState({
      MedicineNum: this.state.MedicineNum + 1
    })
  };

  handleMinus = () => {
    if (this.state.MedicineNum-1 < 0 ) {
      alert('약의 개수는 0 이상이어야 합니다.')
    }
    else {
      this.setState({
        MedicineNum: this.state.MedicineNum - 1
      })
    }
  };

  togglePopUp = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;
    
    let displayOption = 'none';
    
    if (isOpen) {
      displayOption = 'block';
    }

    return (
        <main className = "DoctorPrescription">
          <Link />
          <hr/>
          <form>
            <input
              placeholder="환자 이름"
              value={this.state.UserName}
              onChange={this.handleChange}
              name='UserName'
            />
          </form>
          <form>
            <input
              placeholder="성별"
              value={this.state.UserSex}
              onChange={this.handleChange}
              name='UserSex'
            />
          </form>
          <form>
            <input
              placeholder="나이"
              value={this.state.UserAge}
              onChange={this.handleChange}
              name='UserAge'
            />
          </form>
          <br />
          <form>
            <input
              placeholder="약 이름"
              value={this.state.MainMedicine}
              onChange={this.handleChange}
              name='MainMedicine'
            /> : {this.state.MedicineNum}
          </form>

          <button onClick={this.handlePlus}> 증가 </button>
          <button onClick={this.handleMinus}> 감소 </button>

          <button onClick={this.togglePopUp}> 처방전 확인하기</button>

          <article>
            <PopUp displayOption={displayOption}>
              <PopUpInput>
                <section>
                  <label> 환자 이름 : "{this.state.UserName}"</label>
                  <label> 성별 : "{this.state.UserSex}" </label>
                  <label> 나이 : "{this.state.UserAge}" </label>
                  </section>
                  <hr />
                 <section>
                  <label> 처방할 약 : "{this.state.MainMedicine}" : {this.state.MedicineNum} 개</label>
                  <br />
                  <button onClick={this.togglePopUp}> 끄기 </button>
                </section>
                </PopUpInput>
            </PopUp>
          </article>
        </main>
        );
  };
}

export default DoctorPrescription;