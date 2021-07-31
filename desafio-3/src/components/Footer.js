import React from "react";
import "../Style.css";

function Footer () {
    return (
        <footer>
          <div className='footer'>
            <div >
              <img className='img-footer' alt='seed a bit tecnologia' src='https://seedabit.org.br/assets/img/seed_footer.png' href='' />
            </div>
            <div>
              <p className='text-contatos'>
                Contatos:
                </p>
              <ul className='lista-contato'>
                  <li>
                      <p className='text-contatos'>
                        Telefone: (99)9999-9999
                      </p>
                    </li>
                  <li>
                      <p className='text-contatos'>
                        Email: email@email.com
                      </p>
                  </li>
                  <li>
                    <p className='text-contatos'>
                      Endereço: Rua, Numero, Bairro, Cidade
                    </p>
                  </li>
                  
              </ul>
            </div>
                
              <div className='redes'>
                <a href='https://www.instagram.com/seedabittecnologia/' target="_blank" rel="noreferrer">
                  <img alt='instagram' src="https://img.icons8.com/ultraviolet/40/000000/instagram-new.png"/>
                  
                  
                </a>
                <a href='https://www.linkedin.com/company/seedabittecnologia/mycompany/' target="_blank" rel="noreferrer">
                  <img alt='linkedin' src="https://img.icons8.com/office/40/000000/linkedin.png"/>
                  
                </a>
              </div>
            </div>

        </footer>
    )
}

export default Footer;