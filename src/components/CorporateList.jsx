import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const CorporateList = props => {
    const [CorporateData, SetCorporateData] = useState(null);

    // firebaseから全データ取得する関数
    const getCorporateListFirestore = async () => {
        const itemisArray = await firebase.firestore().collection('informationList')
            .get()
        const CorporateDataArray = itemisArray.docs.map(x => {
            return {
                id: x.id,
                data: x.data(),
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
                        <li key={index} id={x.id}>
                            <p>会社名：{x.data.name}</p>
                            <p>やること：{x.data.content}</p>
                        </li>
                    )
                }
            </ul>
        </div >
    )

}
export default CorporateList;