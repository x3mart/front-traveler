import MainLayout from '../../layouts/MainLayout'

const NearestTour = () => {
  return (
    <MainLayout>
      <>
      <section className="background-grey">
                <div className='wrapper'>
                    <div className="find-tour-block">
                        <input className="find-tour-block-location" placeholder="Страна, регион или город"/>
                        <input className="find-tour-block-calendar" placeholder="Выберите даты"/>
                        <button className="find-tour-block-button">Подобрать тур</button>
                    </div>
                </div>
            </section>

            <section>
                <div className='wrapper'>
                    <div className="breadcrumbs"><span>Главная</span> - <span>Типы туров</span></div>                    
                </div>
            </section>
                
            <section>
                <div className="wrapper">
                    <div className="filter_block">
                        <div className="filter_item">Тип тура</div>
                        <div className="filter_item">Язык тура</div>
                        <div className="filter_item">Цена</div>
                        <div className="filter_item">Туры с кешбеком</div>
                        <div className="filter_item">Туры с кешбеком</div>
                        <div className="filter_item">Средний возраст группы</div>
                        <div className="filter_item">Длительность (дни)</div>
                        <div className="filter_item">Осталось мест</div>
                        <div className="filter_item">Проживание</div>
                        <div className="filter_item">Активность</div>
                        <div className="filter_item">Рейтинг</div>
                        <div className="filter_item">Гарантированные даты</div>
                    </div>
                </div>
            </section>

            <section className="background-grey">
                <div className="wrapper">
                    <div className="info_block">
                        <div className="info_block_text orange_border">
                            <div className="info_block_main_text">Персональные рекомендации ближайших туров</div>
                            <div className="info_block_second_text">Мы подобрали туры иименно для вас</div>
                        </div>
                        
                    </div>

                    <div className="block_cards_inline">
                        <div className="arrow-left"></div>
                        <div className="arrow-right"></div>
                        <div className="large_block_cards_item">
                            <div className="nearest_block_cards_item_img large-img near-one">
                                <div className="nearest_block_cards_item_name inblock_name mobile-hide">
                                    <div className="nearest_block_cards_item_name_country inblock_country">Вьетнам</div>
                                    <div className="nearest_block_cards_item_name_info inblock_info">Все красоты страны за неделю</div>
                                </div>
                            </div>

                            <div className="nearest_block_cards_item_name desktop-hide">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            
                            <div className="nearest_block_cards_item_guide large_block_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>
                        <div className="nearest_block_cards_item box_shadow">
                            <div className="nearest_block_cards_item_img near-one"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper">
                    <div className="info_block">
                        <div className="info_block_text">
                            <div className="info_block_main_text">Близжайшие туры</div>
                            <div className="info_block_second_text">Найдено 135 туров</div>
                        </div>
                        <div className="info_block_filter">
                                Сначала популярные
                        </div> 
                    </div>
                    <div className="block_cards">
                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-one"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-two"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-three"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-four"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-five"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-six"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-seven"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-eight"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-nine"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-ten"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-eleven"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>

                        <div className="nearest_block_cards_item">
                            <div className="nearest_block_cards_item_img near-twelve"></div>
                            <div className="nearest_block_cards_item_name">
                                <div className="nearest_block_cards_item_name_country">Вьетнам</div>
                                <div className="nearest_block_cards_item_name_info">Все красоты страны за неделю</div>
                            </div>
                            <div className="nearest_block_cards_item_guide">

                                <div className="nearest_block_cards_item_guide_left">
                                    <div className="nearest_block_cards_item_guide_name_img"></div>
                                    <div className="nearest_block_cards_item_guide_name_raiting">
                                        <div className="nearest_block_cards_item_guide_name_raiting_name">Кристина</div>
                                        <div className="nearest_block_cards_item_guide_name_raiting_stars">
                                            <span className="raiting_stars">4.9</span> <span className="quantity_feedbacks">(137)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nearest_block_cards_item_guide_right">
                                    <div className="nearest_block_cards_item_guide_period">7 дн. (21 – 28 мая)</div>
                                    <div className="nearest_block_cards_item_guide_cost">от 25.000 ₽</div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="section_find_tour">
                <div className="wrapper">
                    <div className="info_block">
                        <div className="info_block_text white_border">
                            <div className="info_block_main_text white_text">Подобрать тур</div>
                            <div className="info_block_second_text white_text">Мы подберем только лучшее</div>
                        </div>
                    </div>
                    <div className="find-tour-block">
                        <input className="find-tour-block-location" placeholder="Страна, регион или город"/>
                        <input className="find-tour-block-calendar" placeholder="Выберите даты"/>
                        <button className="find-tour-block-button">Подобрать тур</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper">
                    <div className="info_block">
                        <div className="info_block_text orange_border">
                            <div className="info_block_main_text">Traveler.market</div>
                            <div className="info_block_second_text">Немного о нас и наших услугах</div>
                        </div>
                    </div>
                    <div className="about_us_block">
                        <h2 className="h2">
                            Отдых в России — активные туры по большой стране
                        </h2>
                        <h3 className="h3">
                            Туры по России — все туристические направления страны
                        </h3>
                        <p className="p">
                            Большая Страна – самая полная база путешествий по России от прямых организаторов без комиссий и наценок для Вас.
                        </p>
                        <p className="p">
                            Мы помогаем Вам найти варианты активного отдыха согласно вашим предпочтениям. 
                            На нашем сайте размещена самая полная база туров от Крыма до Камчатки и от Кавказа до Северного полюса.
                        </p>
                        <p className="p">    
                            Куда бы Вы не собирались – Байкал, Алтай, Карелия, Якутия, Урал – с помощью Большой Страны Вы найдете подходящий вид отдыха 
                            с учетом индивидуальных пожеланий, бюджета и уровня физической подготовки. Просто настройте фильтры поиска, даты поездки, 
                            виды отдыха и подберите свой активный тур!
                            Активный отдых на любой вкус
                        </p>
                        <p className="p">   
                            Варианты туров по России многочисленны и разнообразны. Если Вас манят горы, совершите восхождение на Эльбрус или отправляйтесь 
                            в конный поход по Алтаю. Вам нравится водный туризм? Выберете сплав по Уралу, Кавказу или Карелии, или проведите отпуск 
                            на берегах Байкала. Любите движение и скорость? Отправляйтесь в велотур по Крыму летом или сафари на снегоходах зимой. 
                            Ищете спокойный отдых? Пройдите по треккинговым тропам Сибири, Адыгеи и Урала или отправьтесь в круиз по Волге. 
                            Познакомьтесь с традициями народов России в этнотурах по Бурятии, Хакасии, Алтаю и Дальнему Востоку.
                        </p>
                        <p className="p"> 
                            А для тех, кто хочет почувствовать себя первооткрывателем, Большая Страна поможет найти экспедиции в самые удаленные уголки 
                            России – Северный полюс, Курильские острова, Сахалин, Камчатку и плато Путорана.
                        </p>
                        <p className="p">  
                            Для желающих попробовать все и сразу существуют комбинированные туры, сочетающие в себе сплавы, конные походы, восхождения, 
                            велотуры и многое другое. 
                        </p>
                    </div>
                </div>
            </section>
      </>
    </MainLayout>
  )
}

export default NearestTour
