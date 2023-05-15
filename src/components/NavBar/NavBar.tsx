import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Link from "../Common/Link/Link";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

type PropsType = {
    variant?: 'default' | 'small';
}

const NavBar: React.FC<PropsType> = () => {
    const linkItem = [
        {
            title: 'todolist',
            icon: FormatListBulletedIcon,
            path: `/todoList`,
        },
    ]

    return (
        <div>
            <List sx={{p: 0}}>
                {linkItem.map((link) => (
                    <ListItem key={link.title} disablePadding sx={{display: 'block'}}>
                        <Link sx={{textDecoration: 'none'}} key={link.title} to={link.path}>
                            {({isActive}) => (
                                <ListItemButton>
                                    <ListItemIcon sx={{minWidth: '18px', mr: 3, ml: 0.5,}}>
                                        <link.icon fontSize="medium" color={isActive ? 'primary' : undefined}/>
                                    </ListItemIcon>
                                    <Typography color={isActive ? '' : 'textSecondary'}
                                                variant="body2">
                                        {link.title}
                                    </Typography>
                                </ListItemButton>
                            )}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default React.memo(NavBar)