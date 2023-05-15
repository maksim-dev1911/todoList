import {CSSObject, styled, Theme} from '@mui/material';
import {StylesRecord} from '../../interfaces/Styles';
import {SIDE_BAR_WIDTH, SIDE_BAR_WIDTH_CLOSED} from '../../mui/constants';

const openedMixin = (theme: Theme): CSSObject => ({
    width: SIDE_BAR_WIDTH,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
        width: `calc(${SIDE_BAR_WIDTH_CLOSED} + 1px)`,
    },
});

const sx: StylesRecord = {
    drawerDesktop: {
        '& .MuiDrawer-paper': {
            borderRight: '1px dashed rgba(145, 158, 171, 0.24)',
            boxSizing: 'border-box',
            width: SIDE_BAR_WIDTH,
        },
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        width: SIDE_BAR_WIDTH,
        flexShrink: 0,
    },
    drawerOpened: (theme) => ({
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    drawerClosed: (theme) => ({
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
};

export const LogoImg = styled('div')(
    () => `
    display: flex;
    alignItems: center;
  img {
    width: 50px;
    height: 50px;
  }
`
);

export default sx;
