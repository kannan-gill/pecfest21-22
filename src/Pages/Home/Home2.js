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
        window.addEventListener('scroll',handleScroll);

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
            window.removeEventListener('scroll',handleScroll);
        }
    },[])

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

  return (
    <div>
        <section className='landing' onMouseMove={handleMouse}>
                <video autoPlay muted loop>
                    <source src="../../Images/spacebgvid1.mp4" type="video/mp4"/>
                </video>
                <div className={`header ${explore ? "headerRemove":""}`}>PECFEST'21</div>
                {explore && <div className='exploreBack' onClick={()=>setexplore(false)}><i class="fa-solid fa-2x fa-angle-left"></i></div>}
                <img data-speed="2" className={`img1 ${explore ? "alignCenter":""}`} src='../../Images/Untitled.png'/>
                <img data-speed="-2" className={`img2 ${explore ? "alignCenter":""}`} src='../../Images/Untitled2.png'/>
                <img data-speed="1" className={`img3 ${explore ? "alignCenter":""}`} src='../../Images/Untitled3.png'/>
                <img data-speed="-1" className={`img4 ${explore ? "alignCenter":""}`} src='../../Images/Untitled4.png'/>
                <img data-speed="3" className={`img5 ${explore ? "alignCenter":""}`} src='../../Images/Untitled5.png'/>
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