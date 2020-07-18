import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
// import Corporate from './Corporate';
import axios from 'axios';

const CorporateList = props => {
    const [CorporateData, SetCorporateData] = useState(null);

    // firebaseから全データ取得する関数
    const getCorporateListFirestore = async () => {
        const itemisArray = await firebase.firestore().collection('informationList')
            // .orderBy('date')
            .get()
        console.log(itemisArray);
        const CorporateDataArray = itemisArray.docs.map(x => {
            return {
                id: x.id,
                data: x.data(),
                // ...doc.data(),
            }
        })
        SetCorporateData(CorporateDataArray);
        return CorporateDataArray;
    }

    // useEffectを使用して一覧を全部取得する
    useEffect(() => {
        const result = getCorporateListFirestore();
    }, [props])


    return (
        <div>
            <ul>
                {
                    CorporateData?.map((x, index) =>
                        // <Corporate
                        //     key={index}
                        //     index={index}
                        //     detalist={x}
                        //     getCorporateListFirestore={getCorporateListFirestore}
                        // />
                        <li key={index} id={x.id}>
                            <p>企業名:{x.data.Company}</p>
                            <p>日付:{x.data.date.seconds}</p>
                            <p>担当者:{x.data.Person}</p>
                            <p>内容:{x.data.TextArea}</p>
                        </li>
                    )
                }
            </ul>
        </div >
    )

}
export default CorporateList;