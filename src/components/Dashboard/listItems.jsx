import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// 新しいアイコンリスト
import DomainIcon from '@material-ui/icons/Domain';
import EditIcon from '@material-ui/icons/Edit';
import MoneyIcon from '@material-ui/icons/Money';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';



const MainListItems = (props) => (
    <div>
        <BrowserRouter>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="TOP" />
            </ListItem>

            <Link to="/CorporateList">
                <ListItem button>
                    <ListItemIcon>
                        <DomainIcon />
                    </ListItemIcon>
                    <ListItemText primary="企業リスト" />
                </ListItem>
            </Link>

            <Link to="/InputPage">
                <ListItem button>
                    <ListItemIcon>
                        <EditIcon />
                    </ListItemIcon>
                    <ListItemText primary="入力ページ" />
                </ListItem>
            </Link>

            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="現在の受注率" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <MoneyIcon />
                </ListItemIcon>
                <ListItemText primary="電卓" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <HelpOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="ヘルプ" />
            </ListItem>
        </BrowserRouter>
    </div>
);

export default MainListItems;

// export const secondaryListItems = (
//     <div>
//         <ListSubheader inset>SabMenu</ListSubheader>
//         <ListItem button>
//             <ListItemIcon>
//                 <MoneyIcon />
//             </ListItemIcon>
//             <ListItemText primary="電卓" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <HelpOutlineIcon />
//             </ListItemIcon>
//             <ListItemText primary="ヘルプ" />
//         </ListItem>
//     </div>
// );