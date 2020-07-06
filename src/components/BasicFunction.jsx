import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

// interface ItemType {
//     id: number;
//     name: string;
// }

const BasicFunction = props => {
    const [state, setState] = useState([
        { id: 1, name: "企業01" },
        { id: 2, name: "企業02" },
        { id: 3, name: "企業03" },
        { id: 4, name: "企業04" },
        { id: 5, name: "企業05" },
        { id: 6, name: "企業06" },
        { id: 7, name: "企業07" },
        { id: 8, name: "企業08" },
        { id: 9, name: "企業09" },
        { id: 10, name: "企業10" },
    ]);

    return (
        <ul>
            <ReactSortable list={state} setList={setState}>
                {state.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ReactSortable>
        </ul>
    );
};
export default BasicFunction;
