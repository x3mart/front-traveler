import MainLayout from '../layouts/MainLayout'

const RegisterGuide = () => {
  return (
    <MainLayout>
      <>


            <section>
                <div className='wrapper'>
                    <div className="breadcrumbs breadcrumbs_margin"><span>Главная</span> - <span>Типы туров</span></div>                    
                </div>
            </section>
                
            <section>
                <div className="wrapper wrapper_center">
                    <div className="login_page_block">
                        <div className="login_block_left">                            
                            <div className="info_block_text_login">
                                <div className="info_block_text_left">Регистрация</div>
                                <div className="info_block_text_right">Войти на сайт</div>
                            </div>  
                            
                            <div className="auth_form">
                                <div className="change_type_block">
                                    <div className="change_type_block_left" id="guide">Я путешественник</div>
                                    <div className="change_type_block_right" id="traveler">Я тревел-эксперт</div>
                                </div>
                                <input type="text" className="auth_name" placeholder="Имя и фамилия"/>
                                <input type="text" className="auth_mail" placeholder="Адрес эл. почты"/>
                                <input type="text" className="auth_tel" placeholder="+7"/>
                                <input type="text" className="auth_password" placeholder="Пароль"/>
                                <input type="text" className="auth_password" placeholder="Подтверждение пароля"/>
                                <div className="social_links_block_info social_links_block_info_registration">
                                    Отправляя форму вы соглашаетесь с <span>условиями публичной оферты</span> и выражаете свое согласие на обработку <span>персональных данных.</span>  
                                </div>
                                
                                <button className="enter_site enter_site_registration">Согласиться и продолжить</button>
                            </div>

                            <div className="title_social">или зарегистрируйтесь через соц. сети</div> 
                            <div className="social_links_block">
                                <div className="social_links_block_item apple"></div>
                                <div className="social_links_block_item vk"></div>
                                <div className="social_links_block_item fb"></div>
                                <div className="social_links_block_item google"></div>
                            </div>
                            

                        </div>
                        <div className="login_block_right login_block_right_registration_guide">
                            Вы в хорошей компании
                            <p>Более 2 500 тревел-экспертов в 90 странах мира доверяют traveler.market построение маркетинга и продаж.</p>
                        </div>
                    </div>
                </div>
            </section>
      </>
    </MainLayout>
  )
}

export default RegisterGuide
