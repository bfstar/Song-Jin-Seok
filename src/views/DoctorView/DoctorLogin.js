// 로그인 후 IDPermission에 따른 의사, 약사, 환자 판단하는 페이지.

import React, { Component } from 'react';
import Link from '../common/Link';
import styled from 'styled-components';

const LoginBox = styled.section`
    position: relative;
    width: 15%;
    margin: 7%;
    border: 5px solid black;
    padding: 3% 1% 3% 1%;
`;



class DoctorLogin extends Component {
    state={
          UserName: '',
          UserPassword: '',
          UserPermission: 0,
          DoctorPermission: 1,
          DrugStorePermission: 2,
          PatientPermission: 3,

          DataBase: [
            {
              DBID: 'doctor',
              DBPassword: 'doctor123',
              IDPermission: 1,
            },
            {
              DBID: 'drugstore',
              DBPassword: 'drugstore123',
              IDPermission: 2,
            },
            {
              DBID: 'patient',
              DBPassword: 'patient123',
              IDPermission: 3,
            },
            {
              DBID: 'jaewan',
              DBPassword: 'jaewan123',
              IDPermission: 1,
            },
          ]
      };

    handleChange = (e) => {
      const { UserPermission } = this.state;
      if ( this.state.UserName == 'doctor' || this.state.DataBase[3].IDPermission == 1) {
        this.setState({
          UserPermission: 1,
          [e.target.name]: e.target.value
        });
      }
      if ( this.state.UserName == 'drugstore' || this.state.DataBase[3].IDPermission == 2) {
        this.setState({
          UserPermission: 2,
          [e.target.name]: e.target.value
        });
      }
      if ( this.state.UserName == 'patient' || this.state.DataBase[3].IDPermission == 3) {
        this.setState({
          UserPermission: 3,
          [e.target.name]: e.target.value
        });
      }


    }

    LoginButton = () => {

      const { DataBase, IDPermission } = this.state;
          if( this.state.UserPermission === 1) {
            alert('의사로 로그인 합니다.');
            }
          if( this.state.UserPermission === 2) {
            alert('약사로 로그인 합니다.');
          }
          if( this.state.UserPermission === 3){
            alert('환자로 로그인 합니다.');
            }
          if( this.state.UserPermission === 0) {
            if( this.state.UserName == '' && this.state.UserPassword == ''){
              alert(' ID 또는 Password를 입력하세요.')
              return
            }
            alert('아직 지정되지 않음.');
          }
        }


  render() {

    const btnStyle2 = {
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
      background: "skyblue",
      padding: "3px 3px",
      border: "1px solid skyblue",
      borderRadius: "8px",
      lineHeight: 1.7
    };

    return (
        <main className="DoctorLogin">
          <Link />
          <hr/>

          <article>
            <LoginBox>    <section>
              <form>
                <input
                  placeholder="UserName"
                  value={this.state.UserName}
                  onChange={this.handleChange}
                  name='UserName'
                />
                <input
                  placeholder="UserPassword"
                  value={this.state.UserPassword}
                  onChange={this.handleChange}
                  name='UserPassword'
                />
              </form> <br/>

              <button style={btnStyle2} onClick={this.LoginButton}> 로그인 </button>
                      </section>  </LoginBox>
              <b />     <hr/>
              <section>
              <p>
                * Test Input Value Checking : <mark> {this.state.UserName} {this.state.UserPassword}
                                                  <br/> User_Permission : <b>{this.state.UserPermission}</b> </mark>                                                   
              </p>
              <p>
                * ID_Permission : 1 : Doctor / 2 : DrugStore / 3 : Patient
              </p>

            </section>

          </article>
          
          
        </main>
        );
  };
}

export default DoctorLogin;