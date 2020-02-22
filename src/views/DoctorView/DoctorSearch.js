import React, { Component } from 'react';
import Link from '../common/Link';

class DoctorSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  state = { 
    name: '',
    information: [
      {
        id: 0,
        name: '이유빈',
        phone : '010-9096-6247',
        age : 20
      },
      {
        id: 1,
        name: '이유빈',
        phone : '010-1234-5687',
        age : 66
      },
      {
        id: 2,
        name: '최재완',
        phone: '010-1234-1234',
        age: 22
      }
    ]
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
    })
  }

  

  search = () => {
    const result = this.state.information.filter(info => info.name == this.state.name)
    console.log(result);
    if(result.length != 0){
      const { isOpen } = this.state;
      this.setState({
        isOpen: !isOpen
      });
    }
    else{
      alert("환자 정보가 존재하지 않습니다.")
    }
  };


  render() {
    const { isOpen } = this.state;
    return (
      <main>
        <h1>환자 검색</h1>
        <hr/>
        <Link />
        <hr/>
        <section>
          <form onSubmit={this.handleSubmit}>
            환자 검색 : <input placeholder="환자이름을 입력하세요" value={this.state.name}
            onChange={this.handleChange}
            name="name"
            />
            <button onClick={this.search}>조회</button>
          </form>
        </section>
        {isOpen && (
          <section>
            <div>
              <span>name : {this.state.information.name}</span><br/>
            </div>
          </section>
        )}
      </main>
    );
  };
}

export default DoctorSearch;