import React from 'react';
import styled from 'styled-components';
import Link from './common/Link';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const MedicalState = () => (
  <Container>
    <h1>그냥 심심한 페이지</h1>
    <Link />
  </Container>
);

export default MedicalState;
