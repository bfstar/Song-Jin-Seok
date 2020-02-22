import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      phone_num: '',
      id: '',
      pw: '',
      pw_check: '',
      message:'',
      message_email_wrong:'',
      message_pn_wrong:'',
      message_pw_wrong:'',
      message_id_wrong:'',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  resetState=()=>{
    this.setState({
      message:'',
      message_email_wrong:'',
      message_pn_wrong:'',
      message_pw_wrong:'',
      message_id_wrong:'',
    })
  };

  check_data=()=>{
    let test_email="abc123@gmail.com"
    let test_phone_num="01012341234"
    let test_id="gildong123"
    let ok=1

    const {name,email,phone_num,id,pw,pw_check}=this.state;
    this.resetState();

    if(name==''|| email=='' || phone_num=='' || id=='' || pw=='' || pw_check=='')
    {
      ok=0
      this.setState({
        message:"정보를 다 입력해 주세요.",
      });
    }

    if(email==test_email)
    {
      ok=0
      this.setState({
        message_email_wrong:"이미 등록된 이메일입니다.",
        email:'',
      });
    }

    if(phone_num==test_phone_num)
    {
      ok=0
      this.setState({
        message_pn_wrong:"이미 등록된 전화번호입니다.",
        phone_num:'',
      });
    }

    if(id==test_id)
    {
      ok=0
      this.setState({
        message_id_wrong:"이미 등록된 아이디입니다.",
        id:'',
      });
    }
    
    if(pw!=pw_check && pw_check!='')
    {
      ok=0
      this.setState({
        message_pw_wrong:"비밀번호를 다르게 입력하셨습니다.",
        pw_check:'',
      });
    }

    if(ok!=0)
    {
      this.setState({
        message:"회원가입 되었습니다.."
      });
    }
  };
  
  render (){
    return(
      <body>
        <center>
      
          <header>
            <h1>회원가입</h1>
            <hr></hr>
          </header>
      
        </center>
    
        <section>
    
          <article>
            <form name="signup">
              이름 :
              <input name="name" value={this.state.name} onChange={this.handleChange}></input><br></br>

              이메일 :
              <input name="email" value={this.state.email} onChange={this.handleChange}></input><br></br>
              <div>{this.state.message_email_wrong}</div>

              전화번호 :
              <input name="phone_num" value={this.state.phone_num} onChange={this.handleChange}></input><br></br>
              <div>{this.state.message_pn_wrong}</div>

              아아디 : 
              <input name="id" value={this.state.id} onChange={this.handleChange}></input><br></br>
              <div>{this.state.message_id_wrong}</div>

              비밀번호 :
              <input name="pw" value={this.state.pw} onChange={this.handleChange}></input><br></br>

              비밀번호 재입력 :
              <input name="pw_check" value={this.state.pw_check} onChange={this.handleChange}></input><br></br>
              <div>{this.state.message_pw_wrong}</div>

            </form>
            <div>{this.state.message}</div>
          </article>
  
        </section> 
    
        <footer>
            <input type="button" value="회원가입 완료" onClick={this.check_data}></input>
        </footer>  
      </body>
    );
  };
};

export default SignupForm;