import styled, { css } from 'styled-components';
import theme from '../theme/theme';
import NavBox from './NavBox';


const NavBoxSub = styled.div`
   background: ${theme.colors.sidebar};
   width: 83%;   
   padding: 1em;
   border: none;
   margin-top: 0.7em;
   cursor: pointer;
   border-top-left-radius: 1.5em;
   border-bottom-left-radius: 1.5em;
   z-index: 1000;
   box-shadow: ${theme.size.sideBarBoxShadow1};
   transform: translateZ(50px);
   

   &:hover {
    position: static;
    transform: translateZ(150px);
    z-index: 800px;
   /* transition: 0.3s linear; */
   background: ${theme.colors.white};

    ${NavBox} {
        background: ${theme.colors.sidebar};
      
    }
   }


 
`
export default NavBoxSub;