import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

class MainView extends React.Component {
  constructor(props) {
    super(props);
    localStorage.setItem('itemKey', JSON.stringify({ test: 'text' }));
  }

  render() {
    const item = JSON.parse(localStorage.getItem('itemKey'));
    return (
      <Container>
				{ item.test }
        <a href="/2"> 링크 </a>
			</Container>
    );
  }
}

export default MainView;
