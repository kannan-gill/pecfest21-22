import React,{useState,useEffect} from 'react'
import './Home2.css'

function Home2() {

    const [explore,setexplore] = useState(false);

    function handleClick(){
        setexplore(true);
    }

    useEffect(()=>{
        window.addEventListener('mousemove',handleMouse);

        function handleMouse(e){

            var cursor = document.querySelector(".cursor");
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';

            document.querySelectorAll("img").forEach(element=>{
                const speed = element.getAttribute('data-speed');
                const x = (window.innerWidth - e.pageX*speed)/250;
                const y = (window.innerHeight - e.pageY*speed)/250;
                element.style.transform = `translate(${x}px) translateY(${y}px)`
            })
        }

        return ()=>{
            window.removeEventListener('mousemove',handleMouse);
            }
    },[])

    useEffect(()=>{
        if(explore){
            var header = document.querySelector(".header");
            header.classList.add("headerRemove");
            var planet1 = document.querySelector(".img1");
            var planet2 = document.querySelector(".img2");
            var planet3 = document.querySelector(".img3");
            var planet4 = document.querySelector(".img4");
            var planet5 = document.querySelector(".img5");
            planet1.classList.add("alignCenter");
            planet2.classList.add("alignCenter");
            planet3.classList.add("alignCenter");
            planet4.classList.add("alignCenter");
            planet5.classList.add("alignCenter");
        }
    },[explore])


  return (
    <div>
        <section className='landing'>
                <video autoPlay muted loop>
                    <source src="../../Images/spacebgvid1.mp4" type="video/mp4"/>
                </video>
                <div className='header'>PECFEST'21</div>
                <img data-speed="2" className='img1' src='../../Images/Untitled.png'/>
                <img data-speed="-2" className='img2' src='../../Images/Untitled2.png'/>
                <img data-speed="1" className='img3' src='../../Images/Untitled3.png'/>
                <img data-speed="-1" className='img4' src='../../Images/Untitled4.png'/>
                <img data-speed="3" className='img5' src='../../Images/Untitled5.png'/>
                <div className='cursor'><img className='rocket' src='../../Images/rocket.png' alt='cant be disp'/></div>
                { !explore && <div className='explore' onClick={handleClick}>Explore</div>}
        </section>
    </div>
  )
}

export default Home2