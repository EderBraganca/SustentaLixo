import { useState } from 'react'
import './index.css'

function App() {
  const [balance, setBalance] = useState(93)

  return (
    <>
      <section className="colorSection">
        <nav className='menu'>
          <a href='#'>Sobre o projeto</a>
          <a href='#'>Beneficios</a>
          <a href='#'>Seu perfil</a>
        </nav>
        <p className='balanceP'>Saldo: {balance} pontos</p>
        <header className='header'>
          <div className='saldoTitleSection'>
            <img src="https://miro.medium.com/v2/resize:fit:1000/1*rVmlceCo_m95zlBg1b6osA.jpeg"/>
            <section className='titleSection'>
              <p className='titleP'>SustentaLixo</p>
              <p className='subtitleP'>Seu material reciclavel da forma certa</p>
            </section>
          </div>
        </header>
      </section>

      <section className='aboutSection'>
        <section className='aboutSubSection'>
          <section className='aboutTitle'>
            <p className='aboutTitleP'>Sobre o projeto</p>
          </section>
          <div className='aboutContent'>
            <p className='aboutContent'>
              O projeto SustentaLixo é um projeto que tem como objetivo
              incentivar a reciclagem de materiais, proporcionando beneficios
              para quem recicla e para o meio ambiente.
            </p>
          </div>
        </section>
      </section>

      <section className='benefitsSection'>
        <section className='cidadeSelect'>
          <p className='cidadeSelectP'>Selecione sua cidade:</p>
          <select className='cidadeSelectSelect'>
            <option value=''>Ouro Preto</option>
            <option value=''>Mariana</option>
            <option value=''>Itabirato</option>
          </select>
        </section>
        <div className='beneficiosContent'>
          <p className='titlePDV'>Beneficios perto de você:</p>
          <p className='subtitlePDV'>Mercearias</p>
          <div className='beneficioDiv'>
            <img src='https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <section className='beneficioText'>
              <p className='beneficioP'>Mercearia 1</p>
              <p className='enderecoBene'> Rua 1, 123, bairro centro</p>
            </section>
          </div>
          <div className='beneficioDiv'>
            <img src='https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <section className='beneficioText'>
              <p className='beneficioP'>Mercearia 2</p>
              <p className='enderecoBene'> Rua 1, 123, bairro centro</p>
            </section>
          </div>
          <div className='beneficioDiv'>
            <img src='https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <section className='beneficioText'>
              <p className='beneficioP'>Mercearia 3</p>
              <p className='enderecoBene'> Rua 1, 123, bairro centro</p>
            </section>
          </div>
          <p className='subtitlePDV'>Lazer</p>
          <div className='beneficioDiv'>
            <img src='https://images.pexels.com/photos/415919/pexels-photo-415919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <section className='beneficioText'>
              <p className='beneficioP'>Festival de jazz</p>
              <p className='enderecoBene'> Rua 1, 123, bairro centro</p>
            </section>
          </div>
          <div className='beneficioDiv'>
            <img src='https://images.pexels.com/photos/415919/pexels-photo-415919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <section className='beneficioText'>
              <p className='beneficioP'>Teatro UFOP</p>
              <p className='enderecoBene'> Rua 1, 123, bairro centro</p>
            </section>
          </div>
          <div className='beneficioDiv'>
            <img src='https://images.pexels.com/photos/415919/pexels-photo-415919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <section className='beneficioText'>
              <p className='beneficioP'>Entrada museu</p>
              <p className='enderecoBene'> Rua 1, 123, bairro centro</p>
            </section>
          </div>
        </div>
      </section >
      <footer />
    </>
  )
}

export default App
