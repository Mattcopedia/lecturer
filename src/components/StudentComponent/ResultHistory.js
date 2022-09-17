import Sidebar from 'components/Sidebar'
import React, {useRef} from 'react'
import styled from "styled-components";  
import "../br.css"

const ResultHistory = () => {
    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }

  return (
    <div>
        <Sidebar />
        <div className="grid grid-cols-5 py-4 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Result <br className="responsivemodal"></br> History</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/H5cBdyWtycaRxkh4P5g9.png`}  /> 
       </div>  
     
    </div> 
    <Text4 htmlFor="StudentId"> Enter student ID</Text4> 

    <div className=' ml-7 flex flex-row mb-3 pt-3 '> 
        <div className="box bg-gray-100 pl-2 py-2">
        <div className='pt-0.5'>
      <input ref={focusDiv} className='enterId' placeholder='Sta/11/2009'  type="text" id="StudentId"/>  
      </div>
 

</div>

      <div className=' pl-3  bg-gray-100 py-2 '>
      <RoyalPurpleText>Search History</RoyalPurpleText>
          
      </div>
      

    </div>

    </div>
  )
}

const sizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  };
  export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };
  
  const Text4 = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;
  padding-left: 30px;
   

  @media ${devices.mobileL} { 
  
    padding-left: 30px;
  }

`;
  
  const RoyalPurpleText = styled.div`
    mix-blend-mode: normal;
    display: flex;
    font-size: 14px;
    font-family: Roboto;
    line-height: 21px;
    color: #ffffff;
    width: 135px;
    height: 40px;
    background-color: #2d0353;
    flex-direction: row;
    justify-content: center;
    padding: 11px 0px 13px 0px;
    margin-right: 10px;
  `;
  
  

const FlexColumnRoot = styled.div`
    
flex-direction: column;
gap: 15px;

`;


const Paragraph = styled.div`
font-size: 36px;
font-family: Product Sans Medium;
line-height: 34.92px;
color: #2d0353;
text-align: left;
padding-left: 91px;
font-weight: bold;

@media ${devices.mobileL} { 
  
  padding-left: 33px;
} 
`; 

const ImageRoot = styled.img`
width: 89px;
height: 89px;
`;



export default ResultHistory