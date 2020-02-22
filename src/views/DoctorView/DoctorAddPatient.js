import React, { Component } from 'react';

import styled from 'styled-components';


const Input = styled.input`

text-align:center; width:750px; height:370px; 
`;


class DoctorAddPatient extends Component {

  state ={

    name: '',

    phone: '',

    loginUserName: '송진석',

  }

  

  handleChange = (e) => {

    this.setState({

      [e.target.name]: e.target.value

    })

  }

  handleSubmit = (e) => {


    e.preventDefault();


    this.props.onCreate(this.state);


    this.setState({

      name: '',

      phone: '',

      sex: '',

      age: '', //나이는 주민등록번호로 자동 계산이가능함

      ResidentRegistrationNumber: '',


      DDisease: '',

      DState: '',

      DTreat: '',


      DMDay: ''


    })

  }

  


  render() {

    
    return (

      

      <form onSubmit={this.handleSubmit}>



      <input

      

        placeholder="이름"

        value={this.state.name}

        onChange={this.handleChange}

        name="name"

      />

       

      

      <br />

      <input

        placeholder="전화번호"

        value={this.state.phone}

        onChange={this.handleChange}

        name="phone"

      />

      <br />

      <input

        placeholder="성별"

        value={this.state.sex}

        onChange={this.handleChange}

        name="sex"

      />

      <br />

      <input

        placeholder="나이"

        value={this.state.age}

        onChange={this.handleChange}

        name="age"

      />

      <br />

      <input

        placeholder="주민등록번호"

        value={this.state.ResidentRegistrationNumber}

        onChange={this.handleChange}

        name="ResidentRegistrationNumber"

      />

      <br /><br /><br />

      <button type="submit">등록</button>

      <br /><br /><br />

      <br /><br /><br />

       

      <input

       //나중에 여기부턴 차트형태로 만들자

      

        placeholder="병명" //나중에 칸늘리자

        value={this.state.DDisease}

        onChange={this.handleChange}

        name="DDisease"

      />

      <br /><br /><br /><br /><br /><br />

      <Input

      

        placeholder="증상"  //나중에 칸늘리자

        value={this.state.DState}

        onChange={this.handleChange}

        name="DState"

      />

      <br /><br /><br /><br /><br />

      <br />

      <Input 

      

        placeholder="처방"

        value={this.state.DTreat}

        onChange={this.handleChange}

        name="DTreat"

      />

      <br /><br /><br />

      <button type="submit">등록</button>

      <br /><br /><br />


      <Input 

      

        placeholder="의약품,처방일수"

        value={this.state.DMDay}

        onChange={this.handleChange}

        name="DMDay"

      />

      <br /><br /><br />

      <button type="submit">등록</button>

      <br /><br /><br /><br />


      <p>이름: <div>{this.state.name}</div></p>
      
      <p>전화번호: <div>{this.state.phone}</div></p>

      <p>성별: <div>{this.state.sex}</div></p>

      <p>나이: <div>{this.state.age}</div></p>

      <p>주민등록번호: <div>{this.state.ResidentRegistrationNumber}</div></p>

      <p>병명: <div>{this.state.DDisease}</div></p>

      <p>증상: <div>{this.state.DState}</div></p>

      <p>처방: <div>{this.state.DTreat}</div></p>

      <p>의약품, 처방일수: <div>{this.state.DMDay}</div></p>



    </form>


  );

  }

}



export default DoctorAddPatient;