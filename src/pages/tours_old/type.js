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

            <section>
                <div className="wrapper">
                    <div className="info_block">
                        <div className="info_block_text">
                            <div className="info_block_main_text">Туры по типам отдыха</div>
                            <div className="info_block_second_text">Найдено 35 туров</div>
                        </div>
                        <div className="info_block_filter">
                                Сначала популярные
                        </div> 
                    </div>
                    <div className="type_block_cards">
                        <div className="type_block_cards_item one">
                            <div className="type_tour_name">Экскурсионный тур</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item two">
                            <div className="type_tour_name">Мальчишники</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item three">
                            <div className="type_tour_name">Джип туры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item four">
                            <div className="type_tour_name">Экспидиции</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item five">
                            <div className="type_tour_name">Фототуры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item six">
                            <div className="type_tour_name">Гастрономические туры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item seven">
                            <div className="type_tour_name">Трекинг туры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item eight">
                            <div className="type_tour_name">Автотуры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item nine">
                            <div className="type_tour_name">Шоппинг туры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item ten">
                            <div className="type_tour_name">Образовательные туры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item eleven">
                            <div className="type_tour_name">Йога туры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item twelve">
                            <div className="type_tour_name">Обучающие туры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item thirteen">
                            <div className="type_tour_name">Квест туры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item fourteen">
                            <div className="type_tour_name">Семейные туры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
                        </div>
                        <div className="type_block_cards_item fifthteen">
                            <div className="type_tour_name">Рыболовные туры</div>
                            <div className="type_tour_quantity"><span>132</span> тура</div>
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
