import React,{useState,useEffect} from 'react'
import './Home2.css'
import AboutPecfest from '../../Components/AboutPecfest/AboutPecfest';
import { doc } from 'firebase/firestore';

function Home2() {

    const [explore,setexplore] = useState(false);

    function handleClick(){
        setexplore(!explore);
    }

    useEffect(()=>{
        window.addEventListener('mousemove',handleMouse);
        window.addEventListener('scroll',handleScroll);
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

        function handleScroll(e){
            var header = document.querySelector(".header");
            var scrollY = window.scrollY;
            if(scrollY*0.05 > 10){
                header.style.top = scrollY * 0.05 + '%';
            }
            else{
                header.style.top = 10 + '%';
            }
            
        }

        return ()=>{
            window.removeEventListener('mousemove',handleMouse);
            window.removeEventListener('scroll',handleScroll);
            }
    },[])

    useEffect(()=>{
            var planet1 = document.querySelector(".img1");
            var planet2 = document.querySelector(".img2");
            var planet3 = document.querySelector(".img3");
            var planet4 = document.querySelector(".img4");
            var planet5 = document.querySelector(".img5");
            var header = document.querySelector(".header");
        if(explore){
            header.classList.add("headerRemove");
            planet1.classList.add("alignCenter");
            planet2.classList.add("alignCenter");
            planet3.classList.add("alignCenter");
            planet4.classList.add("alignCenter");
            planet5.classList.add("alignCenter");
        }
        else{
            header.classList.remove("headerRemove");
            planet1.classList.remove("alignCenter");
            planet2.classList.remove("alignCenter");
            planet3.classList.remove("alignCenter");
            planet4.classList.remove("alignCenter");
            planet5.classList.remove("alignCenter");
        }
    },[explore])


  return (
    <div>
        <section className='landing'>
                <video autoPlay muted loop>
                    <source src="../../Images/spacebgvid1.mp4" type="video/mp4"/>
                </video>
                <div className='header'>PECFEST'21</div>
                {explore && <div className='exploreBack' onClick={()=>setexplore(false)}><i class="fa-solid fa-2x fa-angle-left"></i></div>}
                <img data-speed="2" className='img1' src='../../Images/Untitled.png'/>
                <img data-speed="-2" className='img2' src='../../Images/Untitled2.png'/>
                <img data-speed="1" className='img3' src='../../Images/Untitled3.png'/>
                <img data-speed="-1" className='img4' src='../../Images/Untitled4.png'/>
                <img data-speed="3" className='img5' src='../../Images/Untitled5.png'/>
                <div className='cursor'><img className='rocket' src='../../Images/rocket.png' alt='cant be disp'/></div>
                {!explore && <div className='explore' onClick={handleClick}>Explore</div>}
        </section>
        <section>
            <AboutPecfest/>
        </section>
    </div>
  )
}

export default Home2