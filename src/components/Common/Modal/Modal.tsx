import React from 'react';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 660,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
};

type PropsType = {
    openModal: boolean;
    closeModal: () => void;
    fnToAccept?: () => void;
};

const PostModal: React.FC<PropsType> = ({
                                            openModal,
                                            closeModal,
                                            fnToAccept,
                                        }) => {
    return (
        <div>
            <MuiModal
                sx={{backgroundColor: 'rgb(228 228 228 / 67%)'}}
                keepMounted
                open={openModal}
                onClose={closeModal}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <Typography p={2} textAlign="center" fontFamily="Inter" fontWeight="600">
                            Create Post
                        </Typography>
                    </Box>
                    <Divider/>
                </Box>
            </MuiModal>
        </div>
    );
};

export default React.memo(PostModal);
