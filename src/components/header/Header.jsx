import header from "./header.json";
import './header.css'
import { useEffect } from 'react';

export function Header() {
    // Меню зберіг у JSON-файлі: лого, назва секції, відповне Id для переходу
    let logo, section_title, points;
    logo = header.logo;
    section_title = header.section_titles;
    points = header.points;
    // Для бургер-меню
    useEffect(() => {
        let menuToggle = document.getElementById('menu_toggle');
        let menuBox = document.querySelector('.menu_item_box');
        
        if (menuToggle) {
            let toggleMenu = () => {
                if (menuToggle.checked) {
                    menuBox.classList.add('active');
                } else {
                    menuBox.classList.remove('active');
                }
            };
            menuToggle.addEventListener('change', toggleMenu);
            return () => {
                menuToggle.removeEventListener('change', toggleMenu);
            };
        }
    }, []);
    return (
        
        <>
        <header className="flex flex_column">
        <div className="flex justify_content_space_between header align_items_start">
            <img className="logo" src={(`${logo}`)} alt="logo" />
            <nav className="flex align_self_center align_items_center header_nav">
                {section_title.map((text, index) => (
                    <a className={
                        index===section_title.length-1 ? "button blue" : "standart_hover"
                    } href={points[index]} key={index}>
                    {text}
                    </a>
                ))}
            </nav>
            <div className="menu_burger  align_items_end justify_content_center flex_column"> 
                <input id="menu_toggle" type="checkbox" />
                <label className="menu_btn flex align_items_start" htmlFor="menu_toggle">
                    <span></span>
                </label>
                
            </div>
        </div>
        
        <nav className="flex  justify_content_center flex_column menu_item_box">
            {section_title.map((text, index) => (
                            <a href={points[index]} key={index}>
                                {text}
                            </a>
                        ))}
        </nav>
    </header>
        
            
        </>
    );
}



































