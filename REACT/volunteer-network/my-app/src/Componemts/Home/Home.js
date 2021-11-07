import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css'
import photo from '../volunteer-network-main/images/animalShelter.png'
import Container from 'react-bootstrap/Container';
import photo1 from '../images/animalShelter.png'
import photo2 from '../images/babySit.png'
import photo3 from '../images/birdHouse.png'
import photo4 from '../images/childSupport.png'
import photo5 from '../images/cleanWater.png'
import photo6 from '../images/clearnPark.png'
import photo7 from '../images/clothSwap.png'
import photo8 from '../images/driveSafety.png'
import photo9 from '../images/voteRegister.png'
import photo10 from '../images/foodCharity.png'
import photo11 from '../images/goodEducation.png'
import photo12 from '../images/ITHelp.png'
import photo13 from '../images/libraryBooks.png'
import photo14 from '../images/musicLessons.png'
import photo15 from '../images/newBooks.png'
import photo16 from '../images/refuseShelter.png'
import photo17 from '../images/riverClean.png'
import photo18 from '../images/schoolSuffiles.png'
import photo19 from '../images/studyGroup.png'
import photo20 from '../images/stuffedAnimals.png'
import {Link} from "react-router-dom";
const Home = () => {
 
    const xxx={
        name:'I GROW BY HELPING PEOPLE IN NEED'
        
    }
    return (
        <div>
            <Header></Header>

            <Container>
          <div className='margin1'>

              <div className='headerLine'>
                <h2><strong className='xxxx'>I GROW BY HELPING PEOPLE IN NEED</strong></h2>
                <div className='margin2'>
                    <form action="">
                    <input type="text" placeholder='Search...'/>
                    <button className='Search'>Search</button>
                    </form>
                </div>
              </div>

              <div>
        
                  <div className="row boxContainer">
                      <div className="col-md-3 col-sm-3 col-xs-3 box box1">
                      
                      <Link to={'/user'+'/Foster a shelter animal'}>
                           <img className='borderRadusimg'   src={photo1} alt="" />
                       </Link>
                        <Link to={'/user' + '/Foster a shelter animal'}>
                              <p className='borderRadus d-flex align-items-center justify-content-center'>Foster a shelter animal</p>
                        </Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Babysit during PTA meetings'}> <img className='borderRadusimg' src={photo2} alt="" /> </Link>
                          <Link to={'/user' +'/Babysit during PTA meetings'}><p className='borderRadus d-flex align-items-center justify-content-center'>Babysit during PTA meetings</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Build birdhousos for your neighbors'}> <img className='borderRadusimg' src={photo3} alt="" /> </Link>
                          <Link to={'/user' +'/Build birdhousos for your neighbors'}><p className='borderRadus d-flex align-items-center justify-content-center'>Build birdhousos for your neighbors</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box">
                          <Link to={'/user' +'/Child Suppost'}> <img className='borderRadusimg' src={photo4} alt="" /> </Link>
                          <Link to={'/user' +'/Child Suppost'}><p className='borderRadus d-flex align-items-center justify-content-center'>Child Suppost</p></Link>
                      </div>
                  </div>

                  <div className="row boxContainer">
                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/clean water for children'}> <img className='borderRadusimg' src={photo5} alt="" /> </Link>
                          <Link to={'/user' +'/clean water for children'}><p className='borderRadus d-flex align-items-center justify-content-center'>clean water for children</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Clean up your local park'}> <img className='borderRadusimg' src={photo6} alt="" /> </Link>
                          <Link to={'/user' +'/Clean up your local park'}><p className='borderRadus d-flex align-items-center justify-content-center'>Clean up your local park</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Host a river clean-up'}> <img className='borderRadusimg' src={photo17} alt="" /> </Link>
                          <Link to={'/user' +'/Host a river clean-up'}><p className='borderRadus d-flex align-items-center justify-content-center'>Host a river clean-up</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box">
                          <Link to={'/user' +'/Collect school supplies'}> <img className='borderRadusimg' src={photo18} alt="" /> </Link>
                          <Link to={'/user' +'/Collect school supplies'}><p className='borderRadus d-flex align-items-center justify-content-center'>Collect school supplies</p></Link>
                      </div>
                  </div>

                  <div className="row boxContainer">
                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Host a study group'}> <img className='borderRadusimg' src={photo19} alt="" /> </Link>
                          <Link to={'/user' +'/Host a study group'}><p className='borderRadus d-flex align-items-center justify-content-center'>Host a study group</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Collect stuffed animals'}> <img className='borderRadusimg' src={photo20} alt="" /> </Link>
                          <Link to={'/user' +'/Collect stuffed animals'}><p className='borderRadus d-flex align-items-center justify-content-center'>Collect stuffed animals</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/host a clothing swap'}> <img className='borderRadusimg' src={photo7} alt="" /> </Link>
                          <Link to={'/user' +'/host a clothing swap'}><p className='borderRadus d-flex align-items-center justify-content-center'>host a clothing swap</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box">
                          <Link to={'/user' +'/Give a seminer on driving safety'}> <img className='borderRadusimg' src={photo8} alt="" /> </Link>
                          <Link to={'/user' +'/Give a seminer on driving safety'}><p className='borderRadus d-flex align-items-center justify-content-center'>Give a seminer on driving safety</p></Link>
                      </div>
                  </div>

                  <div className="row boxContainer">
                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Teach prople how to register to vote'}> <img className='borderRadusimg' src={photo9} alt="" /> </Link>
                          <Link to={'/user' +'/Teach prople how to register to vote'}><p className='borderRadus d-flex align-items-center justify-content-center'>Teach prople how to register to vote</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Food charity'}> <img className='borderRadusimg' src={photo10} alt="" /> </Link>
                          <Link to={'/user' +'/Food charity'}><p className='borderRadus d-flex align-items-center justify-content-center'>Food charity</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Good education'}> <img className='borderRadusimg' src={photo11} alt="" /> </Link>
                          <Link to={'/user' +'/Good education'}><p className='borderRadus d-flex align-items-center justify-content-center'>Good education</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box">
                          <Link to={'/user' +'/Give IT help to local adults'}> <img className='borderRadusimg' src={photo12} alt="" /> </Link>
                          <Link to={'/user' +'/Give IT help to local adults'}><p className='borderRadus d-flex align-items-center justify-content-center'>Give IT help to local adults</p></Link>
                      </div>
                  </div>

                  <div className="row boxContainer">
                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Organize book at the library'}> <img className='borderRadusimg' src={photo13} alt="" /> </Link>
                          <Link to={'/user' +'/Organize book at the library'}><p className='borderRadus d-flex align-items-center justify-content-center'>Organize book at the library.</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/Give free music lessons'}> <img className='borderRadusimg' src={photo14} alt="" /> </Link>
                          <Link to={'/user' +'/Give free music lessons'}><p className='borderRadus d-flex align-items-center justify-content-center'>Give free music lessons</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box1 box">
                          <Link to={'/user' +'/New Book for child'}> <img className='borderRadusimg' src={photo15} alt="" /> </Link>
                          <Link to={'/user' +'/New Book for child'}><p className='borderRadus d-flex align-items-center justify-content-center'>New Book for child</p></Link>
                      </div>

                      <div className="col-md-3 col-sm-3 col-xs-3 box">
                          <Link to={'/user' +'/Refuge shelter'}> <img className='borderRadusimg' src={photo16} alt="" /> </Link>
                          <Link to={'/user' +'/Refuge shelter'}><p className='borderRadus d-flex align-items-center justify-content-center'>Refuge shelter</p></Link>
                      </div>
                  </div>
              </div>
          </div>
          </Container>
        </div>
    );
};

export default Home;