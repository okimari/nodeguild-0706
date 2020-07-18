import React, { useState } from "react";
import firebase from '../firebase/index';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const InputPage = ({ getCorporateListFirestore }) => {
    const classes = useStyles();
    const [CompanyData, setCompanyData] = useState('');
    const [date, setDate] = React.useState(new Date('2020-07-10T21:11:54'));
    const [PersonData, setPersonData] = useState('');
    const [TextAreaData, setTextAreaData] = useState('');

    // calendarの関数
    const handleDateChange = (date) => {
        setDate(date);
    };

    // firebaseにデータを送信する関数
    const postDataFirestore = async (collectionName, postData) => {
        const addedData = await firebase.firestore().collection(collectionName).add(postData);
        return addedData;
    }

    // submitbuttonの処理
    const submitData = async () => {
        const postData = {
            Company: CompanyData,
            date: new Date(date),
            Person: PersonData,
            TextArea: TextAreaData,
            today: new Date()
        }
        // firebaseにデータを送信する関数のところにfirebaseで作っているドキュメントの名前を入れる
        const addedData = await postDataFirestore('informationList', postData);
        setCompanyData('');
        setDate('');
        setPersonData('');
        setTextAreaData('');
        // getCorporateListFirestore();
    }

    return (
        <div>
            {/* データの確認 */}
            {/* <p>{JSON.stringify(CompanyData)}</p>
            <p>{JSON.stringify(date)}</p>
            <p>{JSON.stringify(PersonData)}</p>
            <p>{JSON.stringify(TextAreaData)}</p> */}
            <form action="">
                <table>
                    <tr>
                        <th>
                            会社名
                    </th>
                        <td>
                            <TextField
                                id="standard-basic"
                                label="企業名"
                                value={CompanyData}
                                onChange={e => setCompanyData(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            日付
                    </th>
                        <td>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={date}
                                    onChange={setDate}
                                />
                            </MuiPickersUtilsProvider>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            担当者
                    </th>
                        <td>
                            <TextField
                                id="standard-basic"
                                label="担当者名"
                                value={PersonData}
                                onChange={e => setPersonData(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            内容
                    </th>
                        <td>
                            <TextareaAutosize
                                aria-label="minimum height"
                                rowsMin={10}
                                placeholder="ここに修正内容が入る"
                                value={TextAreaData}
                                onChange={e => setTextAreaData(e.target.value)}
                            />
                        </td>
                    </tr>
                </table>
                <button
                    type="button"
                    onClick={submitData}
                >データを登録する
                </button>
            </form>
        </div>
    )
}
export default InputPage;