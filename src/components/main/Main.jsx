
import './main.css'
import aboutUsSection from "./about_us_section.json";
import React, { useState, useEffect } from "react";
export function Main() {
    // Вирішив, що статті буде зручно зберігати у JSON-файлі: назва, текст, декілька фото
    // Фото декілька, адже зробив автоматичний слайдер
    const ArticleAboutUs=({section})=>{
        const[currentImg, nextImg]=useState(0);
        const [fade, setFade] = useState(true);
        useEffect(() => {
            
            const interval = setInterval(() => {
                setFade(false);
                setTimeout(()=>{
                nextImg((prevIndex) => (prevIndex+1) % section.image.length);
                setFade(true);
                },700);
            }, 5000);
            return () => clearInterval(interval);
        }, [section.image.length]);
        return(
            <article className="about_us_article flex">
                    <div className="about_us_content flex flex_column justify_content_center">
                        <h3 className="about_us_h3">{section.title}</h3>
                        <p className="about_us_p">{section.text}</p>
                </div>
            <img className={`about_us_img ${fade ? "about_us_img_fade_true" : "about_us_img_fade_false"}`} src={section.image[currentImg]} alt={section.title} />
                </article>

        );
    };
    
    return (
        
        <main>
            <div id="main"></div>
            <section className="first_screen_section align_items_center flex">
                <article className="first_screen_container flex flex_column">
                    <h1 className="first_screen_title">Фонд підтримки постраждалих від війни</h1>
                    <h3 className="first_screen_description">
                        Ми хочемо допомогти кожному, хто постраждав під час війни
                    </h3>
                    <a className="button white_button_first_screen" href="#help_us">
                        Підтримати фонд
                    </a>
                </article>
            </section>

            <section className="flex flex_column align_items_center">
                <div id="about_us"></div>
                <article className="description_article flex flex_column">
                    <h2 className="h2">Ми – фонд підтримки постраждалих від війни</h2>
                    <h4 className="h4_description">
                        Наша мета – психологічна та гуманітарна допомога українцям
                    </h4>
                    <p className="p_description">
                        Кожен, хто звернеться, отримає допомогу, яка у наших силах
                    </p>
                </article>

                {aboutUsSection.map((section, index) => (
                <ArticleAboutUs key={index} section={section} />
            ))}

                <a className="button blue" href="#contacts">Дізнатися більше</a>

                <article className="our_mission_article flex">
                    <p className="our_mission_p">
                        Наша місія – щоб кожен українець мав можливість отримати допомогу й 
                        не залишився наодинці зі своїми проблемами.
                    </p>
                    <img className="our_mission_img" src="img/smiley_little_kids.svg" alt="Щасливі діти" />
                </article>

                <div id="help_us"></div>
                <article className="donate_article flex flex_column justify_content_center">
                    <h2 className="h2">Підтримайте нашу роботу!</h2>
                    <p className="p_description">
                        Усі ваші донати йдуть саме на роботу фонду, а заробітні плати ми виплачуємо з коштів грантодавців.
                    </p>
                    <h4 className="h4_donate">
                        Наша мета 
                        <br className="donate_goal_number_wrap" /> 
                        &nbsp;10 000 000 гривень!</h4>

                    <div className="flex justify_content_center money_donate">
                        <h2 className="h2_money">00</h2>
                        <img className="donate_vector" src="img/donate_vector.svg" alt="Донат лічильник" />
                        <h2 className="h2_money">230</h2>
                        <img className="donate_vector" src="img/donate_vector.svg" alt="Донат лічильник" />
                        <h2 className="h2_money">025</h2>
                    </div>
                </article>

                <a className="button blue" href="#contacts">
                    Дізнатися більше
                </a>
            </section>
        </main>
    );
}