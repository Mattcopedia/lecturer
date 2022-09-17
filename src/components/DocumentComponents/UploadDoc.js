

import React, { useRef} from 'react'
import styled from "styled-components";  
import "../br.css" 
import Sidebar from 'components/Sidebar';
import { Link } from 'react-router-dom';
 
 
const UploadDoc = () => {
 
    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }
    return  ( 
        <>



        <Sidebar />
        <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Upload <br className="responsivemodal"></br> Document</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/UGJCCWV2qwgsmPOkgoWP.png`} /> 
       </div>  
     
    </div> 


        <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div className="container ">
          <div className="flex flex-wrap ">       
              <div className="flex mx-auto items-center flex-wrap w-full ">
  
              <RootRoot>
             
            <div>
            <FlexColumn>
                  <Element1>
              <FlexColumnaw>
                <Text1>General Document</Text1>
                <RoyalPurpleRectangle />
              </FlexColumnaw>
              <Line src={`https://file.rendit.io/n/6cBDw74bzdqLtcJNebMN.svg`} />
              <Link to="upload-ind-doc">
              <FlexColumnaw>
                <Text1z>Individual Document</Text1z> 
              </FlexColumnaw>
              </Link>
            </Element1> 
                           
                <FlexColumn1>
                

                     
             
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="OldPassword"> Select Course</Text4>        
                 <div className="amendment  pr-16 md:pr-0 lg:pr-0 ">
                <select>
                    <option selected>CSC 201 </option> 
                    <option>CSC 201 </option>
                    <option>CSC 201 </option>
                    <option>CSC 201 </option>
                    <option>CSC 201 </option> 
                </select> 

                </div> 

                 </FlexColumn2>  

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 
                 <Text4 htmlFor="OldPassword"> Upload CSV File</Text4> 
                 <div className='flex pr-16 lg:pr-0 flex-row gap-0'>
                 <Filetext>CSC 201 Test Correction</Filetext>
                 <Text5 htmlFor="uploadCSV">
                   Browse 
                 <input className='file' id="uploadCSV" type="file"/>
                 </Text5> 
                 </div>       
                 

                 </FlexColumn2>  
               

                    <div className='newbtn mr-14 md:mr-0 lg:mr-0 '>
                    <button className='purplebtn' >Send</button> 
                    </div>
              
                 
               
                </FlexColumn1> 
                <div>
           
             </div>
            </FlexColumn>

            </div>  
            
           </RootRoot>  


              
              </div> 
            
            </div>
          </div>
    
      </section>

       <div> 
       
       </div>
        </> 
           
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




const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text4 = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;

  @media ${devices.mobileL} { 
  
    padding-left: 10px;
  }

`;

const Text5 = styled.label`
width: 78px;
height: 40px;

color: #ffffff;
font-size: 14px;
font-family: Roboto;
line-height: 21px;
white-space: nowrap;
border-radius: 6px;
background-color: #2d0353; 
padding-top: 10px;
text-align:center;
cursor:pointer;

`;
const Filetext = styled.div`
width:287px;
height:40px;
padding: 3.5px 2.5px;
border-width: 0.5px;
border-radius: 6px;
border-style: solid;
border-color: #787878;
background-color: #ffffff;
color: #bdbdbd;
font-size: 14px;
font-family: Roboto;
line-height: 21px;
white-space: nowrap;

@media ${devices.mobileL} { 
  width:200px;
 height:40px;
 margin-left: 10px;
 }  


`

const RootRoot = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  background-color: #FAFAFA;
  margin-bottom: 170px; 

  @media ${devices.mobileL} { 
    min-width: 100px; 
    margin: 0px;
    overflow: hidden; 
   }  

`;








const FlexColumn = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right:60px; 
  padding-left:60px; 


  @media ${devices.tablet} {
    margin-left: 90px;

    padding-left:27px;  
    padding-right:40px; 
    margin-left:10px
  }    


  @media ${devices.mobileL} { 
    
    margin-left: 20px;
    
    padding-left:0px;  
    padding-right:0px; 
   
  }  

`;
const FlexColumn1 = styled.div`
  padding-top: 10px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;

  @media ${devices.mobileL} { 
    margin: 0px 0px 0px 0px;
    margin-right: 145px; 

  } 
`; 








const Element1 = styled.div`
  width: 484px;
  height: 31px;
  display: flex;
  flex-direction: row; 
  margin-top:10px;
`;
const FlexColumnaw = styled.div`
  
  position: static;
  gap: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
 
  margin: 0px 2px 0px 0px;
  color: #2d0353;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;

const Text1z = styled.div`
  align-self: flex-start;
  margin: 0px 2px 0px 0px;
  color: #2d0353;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  padding-bottom:10px; 
`;

const RoyalPurpleRectangle = styled.div`
  width: 122px;
  height: 3px;
  border-radius: 8px 8px 0px 0px;
  background-color: #2d0353;
`;
const Line = styled.img`
  width: 30px;
  height: 0.5px;
  top: 30.5px;
  position: static;
`;











export default UploadDoc; 





















// import Sidebar from 'components/Sidebar';
// import React, {useState } from 'react'
// import styled from "styled-components"; 



// const UploadDoc = () => {
//   const [shouldshow, setShouldshow] = useState(false);
//   return (
//     <>
//     <Sidebar /> 

//     { shouldshow && (
//         <ModalBackground onClick={() => setShouldshow(false)}>
//             <ModalBody onClick={(e) => e.stopPropagation()}>
                
//             <WhiteFlexColumnRoot> 
//       <FlexColumn>
//         <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
//         <Text1>Successful</Text1>
//         <Paragraphs>
//           Your course result for 2021-2022 academic <br className="responsivemodal"></br>   session has been uploaded
//           successfully{" "}
//         </Paragraphs>
//         <RoyalPurpleText onClick={() => setShouldshow(false)}>Ok</RoyalPurpleText>
//       </FlexColumn>
//     </WhiteFlexColumnRoot>

    
//             </ModalBody>
//         </ModalBackground>
//       )}

//     <div className="grid grid-cols-5 py-4 mx-4 bg-red-50">
//        <div className="bg-red-50 col-span-4"> 
//        <FlexColumnRoot>
//       <Paragraph>Upload Student Result</Paragraph> 
//      </FlexColumnRoot>
        
//        </div>
//        <div className="bg-red-50">   
//        <ImageRoot src={`https://file.rendit.io/n/7V03HCtauJv78UABcGXu.png`} /> 
//        </div>  
     
//     </div> 


//     <div className='bg-white mx-7 md:mx-7 lg:mx-72   my-6'>
//     <UploadDocumentForAssessmentRoot>
//       Upload document for assessment
//     </UploadDocumentForAssessmentRoot>
//     <div className='bg-gray-100 px-11 pt-3 pb-5 mt-7'>
//         <div className='bg-gray-100'>
            
//         <SelectAcademicYearRoot>
//             Select semester     
//         </SelectAcademicYearRoot>
// {/* //pl-3 py-2 */}
            
//         <div className="upload bg-gray-100 pl-3 py-2 ">
//                 <select style={{width: "400px"}}>
//                     <option selected>1st Semester for 2020-2021 </option> 
//                     <option>1st Semester for 2020-2021</option>
//                     <option>1st Semester for 2020-2021</option>
//                     <option>1st Semester for 2020-2021</option>
//                     <option>1st Semester for 2020-2021</option> 
//                 </select> 

//                 </div> 
            

        

           
          
//             <SelectAcademicYearRoot2>
//                Upload CSV File    
//             </SelectAcademicYearRoot2> 

//             <div className='upload'>
//            <input type="file" id="myfile" name="myfile" />
//             </div>

//             <div className='upload'>
//             <button onClick={() => setShouldshow(true)} className='sendbtn' type='submit'>Upload result</button> 
//             </div>
//         </div>

//     </div>
//     <br />
//     <br />
//     <br />
//     </div> 
//     </>
//   )
// }

// const sizes = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   laptopL: "1440px",
//   desktop: "2560px",
// };
// export const devices = {
//   mobileS: `(min-width: ${sizes.mobileS})`,
//   mobileM: `(min-width: ${sizes.mobileM})`,
//   mobileL: `(max-width: ${sizes.mobileL})`,
//   tablet: `(max-width: ${sizes.tablet})`,
//   laptop: `(min-width: ${sizes.laptop})`,
//   laptopL: `(min-width: ${sizes.laptopL})`,
//   desktop: `(min-width: ${sizes.desktop})`,
// };

// const FlexColumnRoot = styled.div`
    
// flex-direction: column;
// gap: 15px;

// `;


// const Paragraph = styled.div`
// font-size: 36px;
// font-family: Product Sans Medium;
// line-height: 34.92px;
// color: #2d0353;
// text-align: left;
// padding-left: 91px;

// @media ${devices.mobileL} { 
  
//   padding-left: 33px;
// } 
// `; 

// const ImageRoot = styled.img`
// width: 89px;
// height: 89px;
// `;


// const UploadDocumentForAssessmentRoot = styled.div`
//   mix-blend-mode: normal;
//   font-size: 18px;
//   font-family: Product Sans Medium;
//   line-height: 17.46px;
//   color: #2d0353;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;

// `;


// const SelectAcademicYearRoot = styled.label`
// mix-blend-mode: normal;
// font-size: 16px;
// font-family: Product Sans Medium;
// line-height: 17.46px;
// color: #505050;
// display: flex;
// flex-direction: row;
// justify-content: flex-start;
// padding-left: 23px;

//   @media ${devices.mobileL} { 
//     padding-left: 23px;
//   } 
// `;

// const SelectAcademicYearRoot2 = styled.label`
// mix-blend-mode: normal;
// font-size: 16px;
// font-family: Product Sans Medium;
// line-height: 17.46px;
// color: #505050;
// display: flex;
// flex-direction: row;
// justify-content: flex-start;
// padding-left: 23px;
// padding-bottom: 10px;
// @media ${devices.mobileL} { 
//   padding-top: 23px;
// } 
// `;


// // const SelectAcademicYearRoot2 = styled.label`
// // font-size: 16px;
// // font-family: Product Sans Medium;
// // line-height: 15.52px;
// // color: #505050;
// // margin-left: 20px;
// // display: flex;
// // flex-direction: row;
// // justify-content: center;
// // padding-right: 320px;
// // padding-top: 10px;
// // padding-bottom: 10px;
// // padding-right: 333px;

// // @media ${devices.tablet} {  
 
// //   margin-left: 35px;
// // } 

// // @media ${devices.mobileL} {  
// //   margin-left: 38px;
 
// // } 

// // `;



// const ModalBackground = styled.div`
//    position:fixed;
//    z-index: 1;
//    left: 0;
//    top: 0;
//    width: 100%;
//    height: 100%;
//    overflow: auto;
//    background-color: rgba(0,0,0,0.5);
// `

// const ModalBody = styled.div`
//    background-color: white;
//    margin: 10% auto;
//    padding: 20px; 
//    width: 50%;
//    @media ${devices.tablet} {
//       width: 90%;   
//     } 

//     @media ${devices.mobileL} { 
//       width: 100%;
//     } 

// `
// const WhiteFlexColumnRoot = styled.div`
//   height: 390px;
//   background-color: #ffffff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 6px;
//   padding: 0px 40px 0px 43px;
// `;
// const FlexColumn = styled.div`
//   height: 273px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//  ]

// `;
// const Image2 = styled.img`
//   width: 112px;
//   height: 112px;
//   margin: 0px 0px 12px 0px;
// `;
// const Text1 = styled.div`
//   font-size: 18px;
//   font-family: Product Sans Medium;
//   line-height: 17.46px;
//   color: #219653;
//   margin: 0px 0px 13px 0px;
// `;
// const Paragraphs = styled.div`
//   text-align: center;
//   width: 313px;
//   font-size: 14px;
//   font-family: Roboto;
//   line-height: 21px;
//   color: #505050;
//   margin: 0px 0px 32px 0px;
//   white-space: pre-wrap;

//   @media ${devices.mobileL} { 
//     margin-left:10px; 
//     margin-right:10px;
//   } 

// `;
// const RoyalPurpleText = styled.div`
//   display: flex;
//   font-size: 14px;
//   font-family: Roboto;
//   line-height: 21px;
//   color: #ffffff;
//   width: 170px;
//   height: 45px;
//   background-color: #2d0353;
//   flex-direction: row;
//   justify-content: center;
//   border-radius: 6px;
//   padding: 13px 0px 11px 0px;
//   cursor: pointer;
// `;






// export default UploadDoc