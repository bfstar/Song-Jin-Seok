import React, { Component } from 'react';
import * as queryParser from 'query-string';

class Link extends Component {
    render(){
        const query = queryParser.parse(window.location.search);
        console.log(query);
        return (
            <main>
                <section>
                    <article>                    
                        <h1> 의사 관련 Page</h1>
                        <nav>
                            <li><a href="/doctorview/login"> 로그인 [ ! 재완 ! ] </a></li>

                            <li><a href="/doctorview/addpatientview"> 환자등록 [ ! 진석 ! ] </a></li>

                            <li><a href="/doctorview/signup"> 회원가입 [ ! 동영 ! ] </a></li>

                            <li><a href="/doctorview/search"> 환자검색 [ ! 유빈 ! ] </a></li>

                            <li><a href="/doctorview/prescription"> 처방전 [ ! 재완 ! ] </a></li>

                        </nav>
                        
                        <hr />

                        <h1> 약사 관련 Page </h1>
                            <nav>

                                <li><a href="/pharmacist/qrscan"> [!] QR스캔 Page [!] * 흑염룡 * </a></li>
                                <li><a href="/pharmacist/medicinecompare"> [!] 약 성분 비교 Page [!] * 재완 준휘 * </a></li>
                                <li><a href="/pharmacist/medicineguide">[!] 복약지도 Page [!] *진석 동영 준휘*</a></li>
                                <li><a href="/pharmacist/information"> [!] 환자정보 Page [!] * 재완 유빈 *</a></li>

                            </nav>
                        
                        <hr/>

                        <h1> 환자 관련 Page </h1>
                            <nav>
                            <li><a href="/patientview/prescriptiondescription"> [!] 조제복약상세 [!] * 재완 *</a></li>
                            </nav>

                        <hr />

                        <h1> Test Pages </h1>
                            <nav>
                                <li><a href="/test/qrreader"> [!] QR Reader Test Page [!] </a></li>
                                <li><a href="/test/comparetest"> [!] Compare Test Page [!] </a></li>
                                <li><a href="/test/Local"> [!] LocalTest [!] </a></li>
                            </nav>
                        
                    </article>
                </section>
            </main>
        )
    }
}

export default Link;