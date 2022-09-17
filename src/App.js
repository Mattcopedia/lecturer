import { Switch, Route, } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Document from 'pages/Document';
import PrintOut from 'pages/PrintOut';
import Profile from 'pages/Profile';
import Result from 'pages/Result';  
import Login from 'components/Login'; 
import PrintOutForm from 'components/PrintOutComponent/PrintOutForm';
import 'assets/styles/tailwind.css';     
import WebFont from "webfontloader";  
import SignupNow from 'components/SignupNow';
import CreateLoginPassword from 'components/CreateLoginPassword'; 
import ProfileEdit from 'components/ProfileComponents/ProfileEdit';
import EditPassword from 'components/ProfileComponents/EditPassword';
import EditMedia from 'components/ProfileComponents/EditMedia';
import SearchYear from "components/ResultsComponents/SearchYear"
import YourResult from 'components/ResultsComponents/YourResult';
import PrintOutSelectForm from 'components/PrintOutComponent/PrintOutSelectForm';
import PrintOutFormTable from 'components/PrintOutComponent/PrintOutFormTable';
import UploadDoc from 'components/DocumentComponents/UploadDoc';
import ResetPassword from 'components/ResetPassword';
import ResultAmendment from 'components/ResultsComponents/ResultAmendment';
import ResultAmendmentSuccessful from 'components/ResultsComponents/ResultAmendmentSuccessful';
import RegisterStudent from 'components/StudentComponent/RegisterStudent';
import ResultHistory from 'components/StudentComponent/ResultHistory';
import UploadInDoc from 'components/DocumentComponents/IndividualDoc';
import BrowseUploadedDoc from 'components/DocumentComponents/UploadedDoc';
import ViewDoc from 'components/DocumentComponents/ViewDoc';
import LecturerAccount from 'pages/LecturerAccount';

WebFont.load({
    google: {
        families: ['Poppins', "Roboto:400,500,900","Product Sans Medium:400"]
    }
  }); 

function App() { 

   

    return ( 
        <>     

    
          
         <Route exact path="/login" component={Login} />  
         <Route exact path="/signup" component={SignupNow} />  
          <Route exact path="/createpassword" component={CreateLoginPassword} />  
          <Route exact path="/reset-password" component={ResetPassword} />    
         
        <div className="md:ml-64 white "> 
        
        <Switch>
         <Route exact path="/" component={Dashboard} /> 
            <Route exact path="/document" component={Document} />
            <Route exact path="/printout" component={PrintOut} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/result" component={Result} />
           
            <Route exact path="/profile-edit" component={ProfileEdit} /> 
            <Route exact path="/editpassword" component={EditPassword} /> 
            <Route exact path="/editmedia" component={EditMedia} />  
            <Route exact path="/search-year" component={SearchYear} />  
            <Route exact path="/your-result" component={YourResult} /> 
            
            <Route exact path="/printoutform" component={PrintOutForm} /> 
            <Route exact path="/printoutselectform" component={PrintOutSelectForm} /> 
            <Route exact path="/printoutformtable" component={PrintOutFormTable} /> 
            <Route exact path="/upload-doc" component={UploadDoc} />     
            <Route exact path="/upload-ind-doc" component={UploadInDoc} />  
            <Route exact path="/result-amendment" component={ResultAmendment} />
            <Route exact path="/result-amendment-sucessfully" component={ResultAmendmentSuccessful} />
            <Route exact path="/register-student" component={RegisterStudent} />
            <Route exact path="/result-history" component={ResultHistory} />
            <Route exact path="/browse-uploaded-doc" component={BrowseUploadedDoc} />
            <Route exact path="/view-doc" component={ViewDoc} /> 
            <Route exact path="/lecturer-account" component={LecturerAccount} />  

            {/* total course taken and stuff all should be capital
            rakoni logo by sidebar and replace the word rakoni with unigig vice versa
            increase the size of the logo
            leave register pending 
            login api
            use only email address and password
            in profile section we will use login details to populated the data
            later the numbers will be populated
            courses under student programme 
            courses available will be populated from database
            forget
            study courses and grades
            semester isnt there 
            show the entire result and not specific for semester. the search icon is not useful.
            course submission 
            print course form should go to print pages. we want to submit all those data to databse using the api 
            it is only the course code, userid,semester,school i am pushing.
            hold school from login api route in variable and submit to server
            the last api route is what is used to populate the print out form.  */}
        </Switch>         
        </div> 

        </>
   
    );
}

export default App; 

