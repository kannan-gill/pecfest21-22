import React,{useRef, useEffect, useState} from 'react';
import './LandingPage.css';

function LandingPage() {
    const vidRef = useRef(null);
    var myInterval;
    const videoOptions = {'video1.mp4':[{'source':'.\\Images\\video2.mp4','data':['Pec Ground','Admin Stairs','Hostels']},{'source':'.\\Images\\video3.mp4','data':['NAB', 'Library', 'Market']},{'source':'.\\Images\\video4.mp4','data':['Auditorium','OAT','Parking']}]};

    const [videosrc, setvideosrc] = useState('.\\Images\\video1.mp4')
    const [videoend, setvideoend] = useState(false);


    useEffect(()=>{
        vidRef.current.load();
    },[videosrc])

    function handlevideoend(){
        setvideoend(true);
    }

    function handleClick1(){
        var currentVideo = videosrc;
        currentVideo = currentVideo.substring(9);
        console.log(currentVideo);
        var optionsList = videoOptions[currentVideo];
        console.log(optionsList);
        setvideosrc(optionsList[0]['source']);
        setvideoend(false);
    }

    function handleClick2(){
        var currentVideo = videosrc;
        currentVideo = currentVideo.substring(9);
        console.log(currentVideo);
        var optionsList = videoOptions[currentVideo];
        console.log(optionsList);
        setvideosrc(optionsList[1]['source']);
        setvideoend(false);
    }

    function handleClick3(){
        var currentVideo = videosrc;
        currentVideo = currentVideo.substring(9);
        console.log(currentVideo);
        var optionsList = videoOptions[currentVideo];
        console.log(optionsList);
        setvideosrc(optionsList[2]['source']);
        setvideoend(false);
    }

    document.addEventListener('keydown',function(event){
        var keynum = event.key;
        if(vidRef.current && keynum === 'ArrowUp'){
            if(vidRef.current.currentTime === vidRef.current.duration){
                handlevideoend();
                vidRef.current.pause();
            }
            else{
                vidRef.current.play();
            }
        }
        else if (vidRef.current && keynum === 'ArrowRight'){
           vidRef.current.scrollRight+=100; 
        }
        else if (vidRef.current && keynum === 'ArrowDown'){
            myInterval= setInterval(()=>{
                if(vidRef.current.currentTime>0){
                    vidRef.current.currentTime += -0.1;
                }
                else{
                    vidRef.current.currentTime=0;
                }
                // vidRef.current.play();
            },30)
            
        }

    })

    document.addEventListener('keyup',function(){
        if(myInterval){
            clearInterval(myInterval);
        }
        if(vidRef.current){
            vidRef.current.pause();
        }
        
    })

    if(videoend){
        console.log('video has ended');
    }

    


  return <div>
      <div className='videoCont'>
      <video className='vrVideo' ref={vidRef} controls>
          <source src={videosrc} type="video/mp4"/>
      </video>
      </div>

        {videoend && <button onClick={handleClick1} className='button-left'>
            Go left
            <div>{videoOptions[videosrc.substring(9)][0]['data'].map(element => {
                return <div>{element}</div>
                })
            }
            </div></button>}

            {videoend && <button onClick={handleClick2} className='button-center'>
            Go Straight
            <div>{videoOptions[videosrc.substring(9)][1]['data'].map(element => {
                return <div>{element}</div>
                })
            }
            </div></button>}

            {videoend && <button onClick={handleClick3} className='button-right'>
            Go right
            <div>{videoOptions[videosrc.substring(9)][2]['data'].map(element => {
                return <div>{element}</div>
                })
            }
            </div></button>}

      </div>
}

export default LandingPage;
