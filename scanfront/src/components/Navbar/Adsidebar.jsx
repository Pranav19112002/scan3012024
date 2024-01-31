import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import PreviewTwoToneIcon from '@mui/icons-material/PreviewTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import PageviewTwoToneIcon from '@mui/icons-material/PageviewTwoTone';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../appStore';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: 'green', // Set the background color to green
    color: 'white', // Set text color to white
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        backgroundColor: 'green', // Set the background color to green
        color: 'white', // Set text color to white
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        backgroundColor: 'green', // Set the background color to green
        color: 'white', // Set text color to white
      },
    }),
  }),
);

export default function Adsidebar() {
  const theme = useTheme();
  const open = useAppStore((state) => state.dopen);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={20}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/panel')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   < CottageTwoToneIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/booking')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <PageviewTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bookings" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }}  onClick={()=>{navigate('/viewbooking')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <ImportContactsTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="ViewBookings" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>


              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/addscan')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <AddCircleTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Addscanning" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/editscan')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <EditTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Editscanning" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>


              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/viewscan')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <PreviewTwoToneIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Viewscanning" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/set')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <SettingsSuggestTwoToneIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

          </List>
          <Divider />
        </Drawer>
      </Box>
    </Box>
  );
}
