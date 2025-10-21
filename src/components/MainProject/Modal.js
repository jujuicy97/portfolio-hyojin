import { useState } from "react";

const Modal = ({ project, onClose}) => {
    const [ index, setindex ] = useState(0);

    if (!project) return null;

    const nextImg = ()=>
        setindex((prev)=>(prev+1)% project.slide.length);
    
    const prevImg = ()=>
        setindex((prev)=>
            prev === 0 ? project.slide.length -1 : prev -1
    );

    const current = project.slide[index];
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-page" 
                onClick={(e)=>e.stopPropagation()} //클릭 방지
            >
                <button className="close-btn" onClick={onClose}>x</button>
                
                {current.type === "image" ? (
                <img 
                    src={process.env.PUBLIC_URL + current.src}
                    alt={`slide-${index}`}
                />
                ):(
                    <div className="slide">
                    <h4>{current.title}</h4>
                    {current.sections.map((s, i)=>(
                      <div key={i}>
                        <p>{s.title}</p>
                        <p>{s.content}</p>
                      </div>
                    ))}
                  </div>
                )}
            </div>
            {project.slide.length > 0 &&(
                    <div className="prev-next-btn">
                        <button onClick={(e)=>{e.stopPropagation(); prevImg();}}> ◀ </button>
                        <button onClick={(e)=>{e.stopPropagation(); nextImg();}}> ▶ </button>
                    </div>
                )}
        </div>
    );
};

export default Modal;