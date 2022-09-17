
       import React from "react"; 
       import { NavLink } from 'react-router-dom';
       import styled from "styled-components";
       import Sidebar from "components/Sidebar";
    
      import "../components/br.css"

   

       

export default function Dashboard() {  
       
   

    return (   
        <>
        <Sidebar />  

        <div className="bg-white py-5">  

        <div class="max-w-7xl ml-7 heropattern py-11 px-3 mr-7  grid grid-cols-12 ">
              <div class="col-span-12 mt-0.4   md:col-span-12 object-fill lg:col-span-6">

              {/* <img width={700} src={welcomeone} alt="welcome" /> */}
                
              <FlexColumn>
                <FlexRow>
                  <Text10>Welcome Back</Text10>
                  <Text20>🚀</Text20>
                </FlexRow>
                <Text30>Dr.Ayomide <br className="responsivemodal"></br> Akinyemi</Text30>
              </FlexColumn>  


              </div>

              <div class="col-span-12 pb-0.5   md:col-span-12 object-fill lg:col-span-6 "> 
       

              <Paragraph>
            Develop a passion for learning. If you do, you will never cease to grow.
            – <Text40>Anthony J. D’Angelo</Text40>  
          </Paragraph>

              </div>
              </div>

              <div className="mx-7 my-4 ">
                   
                   <div className="container mx-auto mb-4 "> 
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <div className="flex justify-center text-6xl  -300  p-6 ">
                            
                           <RectangleRootim>
                            <FlexColumnim>
                              <TotalCourseTakenim>Assigned Course </TotalCourseTakenim>
                              <Element1im>3</Element1im>
                            </FlexColumnim>
                            <Image1im src={`https://file.rendit.io/n/slHqAXssFmwVU3qEzoOK.svg`} />
                          </RectangleRootim>  
                           
                           </div>
                            
                                 
                                
                           <div className="flex justify-center text-6xl   p-6 ">
                           
                            
                       

                           <NewRootRootiz>
                            <WhiteFlexRowiz>
                              <FlexColumniz>
                                <TotalCourseTakeniz>Total Course Unit</TotalCourseTakeniz>
                                <Element1iz>9</Element1iz>
                              </FlexColumniz>
                              <FlexColumn1iz>
                              <Image1iz src={`https://file.rendit.io/n/76gtESgvWCkG9UBEmpGh.svg`}  />
                              </FlexColumn1iz>
                            </WhiteFlexRowiz>
                          </NewRootRootiz> 

                         

                           </div>
                         



                           <div className="flex flex-row justify-center text-6xl    p-6 ">

                           <NewRootRootis>
                    <PurpleHeartFlexRowis>
                      <FlexColumnis>
                        <TotalCourseTakenis>Registered Student</TotalCourseTakenis>
                        <Element1is>180</Element1is>
                      </FlexColumnis>
                      <FlexRowis>
                        <Image1is src={`https://file.rendit.io/n/kpr3LEhWuQWoQhV3C6UA.svg`} />
                      </FlexRowis>
                    </PurpleHeartFlexRowis>
                  </NewRootRootis>


                          


                               </div>
       
       
                           <div className="flex justify-center text-6xl   p-6 "> 

                  

                           </div>
                            
                       </div>
                         </div>
                         </div> 
          

           
           <h1 className="text-left mx-7 text-indigo-900 font-black text-lg">Quick Access</h1>     

           <div className="mx-7 my-4 ">
            <div className="container  mx-auto mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex justify-center text-6xl border-2   p-6 bg-gray-100   ">  
                    <NavLink to="/upload-doc"> 
                      <WhiteFlexColumnRoot>
                         <Image1 src={`https://file.rendit.io/n/7LcoLm9jwX8GAOCFlkFP.svg`} />
                      <Text1>Upload Result</Text1>
                      </WhiteFlexColumnRoot>
                      </NavLink> 
                  
                    </div> 



                    <div className="flex justify-center text-6xl border-2 bg-gray-100  p-6 ">
                    <NavLink to="/upload-doc"> 
                    <WhiteFlexColumnRoot1>
                      <Image2 src={`https://file.rendit.io/n/YfN7yTALT0Y3ULi0OeyJ.svg`} />
                      <Text2>Download/Upload document</Text2>  
                    </WhiteFlexColumnRoot1>
                    </NavLink>   
                      
                    </div> 

                    <div className="flex  justify-center text-6xl border-2 bg-gray-100 p-6 ">
                        
                    <NavLink to="/register-student"> 
                        <WhiteFlexColumnRoot1> 
                       <Image2 src={`https://file.rendit.io/n/2F4LtkvL3aDxluRmUwZB.svg`}  />
                        <Text2>Registered Student</Text2>
                        </WhiteFlexColumnRoot1> 
                        </NavLink>     
                        
       
                        </div>
                            

                    <div className="flex justify-center text-6xl border-2 bg-gray-100   p-6 ">

                    <NavLink to="/result"> 
                    <WhiteFlexColumnRoot1>
                        <Image2 src={`https://file.rendit.io/n/1bOwYaCUHcWUurwvD0VB.svg`} />
                        <Text2>Result Upload</Text2>
                        </WhiteFlexColumnRoot1>   
                        </NavLink> 

                    </div> 

                </div>
                  </div> 
                   
                   <div className="container mx-auto mb-4"> 
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <div className="flex justify-center text-6xl border-2 -300 bg-gray-100  p-6 ">
                           <NavLink to="/result-amendment"> 
                           <WhiteFlexColumnRoot1>
                      <Image2 src={`https://file.rendit.io/n/pPbPTsC4LBfZo0joWSv6.svg`} />
                      <Text2>Result Amendment</Text2> 
                        </WhiteFlexColumnRoot1> 
                        </NavLink> 
                           
                           </div>
                            
                                 
                                
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                           <NavLink to="/result-history">  
                           <WhiteFlexColumnRoot1>
                            <Image2 src={`https://file.rendit.io/n/PGiPvIiwY8Ei7VChorZd.svg`} />
                            <Text2>Student Result History</Text2>
                            </WhiteFlexColumnRoot1>   
                            </NavLink>
                           </div>
                         



                           <div className="flex flex-row justify-center text-6xl    p-6 ">
                          

                         
                               </div>
       
       
                           <div className="flex justify-center text-6xl   p-6 "> 
                           
                           </div>
                            
                       </div>
                         </div>
                         </div>  

                         <div>

                         </div>
                         </div> 
                  
        </>
    );
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

const WhiteFlexColumnRoot = styled.div`
  
  border-style: solid;
  height: 170px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 26.78px;
  align-items: center;
  border-radius: 6px;
  padding: 34px 96.78px 34px 97px;
  border-width: 1px; 
`;
const Image1 = styled.img`
 
  width: 55.22px;
  height: 55.22px;
`;
const Text1 = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  color: #df8909;
`;

const WhiteFlexColumnRoot1 = styled.div`

  border-style: solid;
  height: 170px;
  color: #fafafa; 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 26.78px;
  align-items: center;
  border-radius: 6px;
  padding: 34px 96.78px 34px 97px;

  margin-left: 10px;  
  margin-right: 10px;  
`;
const Image2 = styled.img`

width: 55.22px;
height: 55.22px;
`;
const Text2 = styled.div`
white-space: nowrap;
display: inline-block;
text-align: left;
font-size: 18px;
font-family: Roboto;
line-height: 27.09px;
color: #2d0353; 
`;




const FlexColumn = styled.div`
  align-self: stretch;
  width: 318px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6px;
  min-width: 318px;
  align-items: center;
`;
const Text10 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
`;
const Text20 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
`;
const Text30 = styled.div`
  mix-blend-mode: normal;
  font-size: 32px;
  font-family: Product Sans Black;
  line-height: 34.92px;
  color: #ffffff;

  @media ${devices.mobileL} { 
    margin-right: 100px; 
  } 
`;
const Paragraph = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  margin: 3px 0px 0px 0px;
  white-space: pre-wrap;
  
`;
const Text40 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #f2994a;
  display: contents;
`;

















const RectangleRootim = styled.div`
  width: 239px;
  gap: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 18px 15px 17px 15px;
  border-radius: 10px;
  background-color: rgba(242, 153, 74, 0.1);
`;
const FlexColumnim = styled.div`
  height: 101px;
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  align-items: center;
`;
const TotalCourseTakenim = styled.div`
  color: #505050;
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  white-space: pre-wrap;
`;
const Element1im = styled.div`
  align-self: flex-start;
  color: #505050;
  font-size: 36px;
  font-family: Roboto;
  line-height: 54.18px;
  white-space: nowrap;
`;
const Image1im = styled.img`
  width: 50px;
  height: 50px;
`;










const NewRootRootiz = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
`;
const WhiteFlexRowiz = styled.div`
  width: 239px;
  gap: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 18px 15px 17px 15px;
  border-radius: 10px;
  background-color: #e9f4ee;
`;
const FlexColumniz = styled.div`
  height: 101px;
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  align-items: center;
`;
const TotalCourseTakeniz = styled.div`
  color: #505050;
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  white-space: nowrap;
`;
const Element1iz = styled.div`
  align-self: flex-start;
  color: #505050;
  font-size: 36px;
  font-family: Roboto;
  line-height: 54.18px;
  white-space: nowrap;
`;
const FlexColumn1iz = styled.div`
  
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 3px;
  padding-right: 3px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/ObzPdKXyy9it7Fe89x9J.svg");
`;
const Image1iz = styled.img`
  width: 90px;
  height: 90px;
 
`;








const NewRootRootis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
`;
const PurpleHeartFlexRowis = styled.div`
  width: 239px;
  gap: 28px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 18px 15px 17px 15px;
  border-radius: 10px;
  background-color: rgba(108, 99, 255, 0.2);
`;
const FlexColumnis = styled.div`
  height: 101px;
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  align-items: center;
`;
const TotalCourseTakenis = styled.div`
  color: #505050;
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  white-space: nowrap;
`;
const Element1is = styled.div`
  align-self: flex-start;
  color: #505050;
  font-size: 36px;
  font-family: Roboto;
  line-height: 54.18px;
  white-space: nowrap;
`;
const FlexRowis = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/dGODOZhJQugEVTCX83n5.svg");
`;
const Image1is = styled.img`
  width: 19px;
  height: 24px;
`;


