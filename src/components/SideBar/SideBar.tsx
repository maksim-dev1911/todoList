import React from 'react';
import SideBarDrawer from "./SideBarDrawer";
import SideBarExpanded from "./SideBarExpanded";
import SideBarSmall from "./SideBarSmall";

type PropsType = {
    open: boolean
    handleOpen: () => void
}

const SideBar: React.FC<PropsType> = ({open, handleOpen}) => {
    return (
        <SideBarDrawer open={open}>
            {open && (
                <SideBarExpanded handleOpen={handleOpen}/>
            )}
            {!open && <SideBarSmall handleOpen={handleOpen}/>}
        </SideBarDrawer>
    );
};

export default SideBar;