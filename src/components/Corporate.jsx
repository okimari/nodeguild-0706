import React from 'react';

const Corporate = ({ index, data, getCorporateListFirestore }) => {
    // timeStamp形式のデータをいい感じに変更する関数
    const convertFromTimestampToDatetime = timestamp => {
        const _d = timestamp ? new Date(timestamp * 1000) : new Date();
        const Y = _d.getFullYear();
        const m = (_d.getMonth() + 1).toString().padStart(2, '0');
        const d = _d.getDate().toString().padStart(2, '0');
        const H = _d.getHours().toString().padStart(2, '0');
        const i = _d.getMinutes().toString().padStart(2, '0');
        const s = _d.getSeconds().toString().padStart(2, '0');
        return `${Y}/${m}/${d} ${H}:${i}:${s}`;
    }
    return (
        <li key={index}>
            {/* <p>{data.id}</p> */}
            <p>企業名:{data.Company}</p>
            <p>日付:{convertFromTimestampToDatetime(data.date.seconds)}</p>
            <p>担当者:{data.Person}</p>
            <p>内容:{data.TextArea}</p>
        </li>
    )
}

export default Corporate;