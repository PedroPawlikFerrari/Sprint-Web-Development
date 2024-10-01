import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
    <header>
        <nav>
            <div class="container">
                <div>
                    <a class="logo" href="#">Vehicle issues Today</a>
                </div>
                <div class="top-menu">
                    <div class="toggle-btn">
                        <i class="fa fa-bars" id="menu-btn-toggle"></i>
                    </div>
                    <ul>
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="#problemas comuns">Problemas Comuns</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                        <li>
                            <a href="#" id="login-btn">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="hero-section">
            <div class="form" id="login-form">
                <div class="exit-btn">
                    <button id="login-exit">
                        <i class="fa fa-close"></i>
                    </button>
                </div>
                <h2>Login</h2>
                <form>
                    <div>
                        <label for="emial">Email</label>
                        <input type="email" name="email"></input>
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password"></input>
                    </div>
                    <div class="remember-section">
                        <div>
                            <input type="checkbox" name="remember">
                            <label for="remember">Remember me</label></input>
                        </div>
                        <a href="#">Forgot password?</a>
                    </div>
                    <div class="submit-btn">
                        <button type="submit">Login</button>
                    </div>
                    <div class="account-section">
                        <p>Don't have an account?</p>
                        <button id="register-btn">Register</button>
                    </div>
                </form>
            </div>
            <div class="form" id="register-form">
                <div class="exit-btn">
                    <button id="register-exit">
                        <i class="fa fa-close"></i>
                    </button>
                </div>
                <h2>Register</h2>
                <form>
                    <div>
                        <label for="username">Username</label>
                        <input type="text" name="username"></input>
                    </div>
                    <div>
                        <label for="register-email">Email</label>
                        <input type="email" name="register-email"></input>
                    </div>
                    <div>
                        <label for="register-password">Password</label>
                        <input type="password" name="register-password"></input>
                    </div>
                    <div class="agree-section">
                        <input type="checkbox" name="agree"></input>
                        <label for="agree">I agree with the terms & conditions</label>
                    </div>
                    <div class="submit-btn">
                        <button type="submit">Register</button>
                    </div>
                    <div class="account-section">
                        <p>Already have an account?</p>
                        <button id="register-login-btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </header>
    
    <script src="./script.js" async defer></script>


    <div id="sobre" class="content">
        <div class="container">
            <h2>Sobre o Site</h2>
            <p>Bem-vindo ao nosso site dedicado a destacar os problemas comuns enfrentados pelos proprietários de automóveis hoje em dia. Aqui você encontrará informações úteis sobre como lidar com esses problemas e dicas para manter seu veículo em bom estado.</p>
            <p>As fórmulas elétricas são mais eficientes que as movidas a combustão devido à sua maior conversão de energia em movimento, zero emissões diretas de gases poluentes, manutenção mais simples, torque instantâneo para uma aceleração rápida e baterias em constante evolução para maior autonomia. Essa tecnologia promove uma mobilidade mais limpa e sustentável, diminuindo a dependência de combustíveis fósseis e oferecendo uma resposta ágil ao pedal do acelerador.</p>
        </div>
    </div>

    <section class="container">
        <div class="slider-wrapper">
            <div class="slider">
                <img id="slide-1" src="slide1.png" alt=""/>
                <img id="slide-2" src="slide2.png" alt=""/>
                <img id="slide-3" src="slide3.png" alt=""/>
            </div>
            <div class="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
            </div>
        </div>
    </section>

        <div class="sepracao1">
            <div class="jumpimg">

            <div class="carda">
                <div class="img-box">
                    <img src="austria.png"></img>
                </div>
                <div class="content">
                    <h2>Zeltweg Airfield</h2>
                    <p>
                        3,186 km GP da Áustria	1964
                    </p>
                </div>
            </div>

             <div class="cardm">
                <div class="img-box">
                    <img src="monaco.png"></img>
                </div>
                <div class="content">
                    <h2>Circuito de Mônaco</h2>
                    <p>
                        3,337 km GP de Mônaco
                    </p>
                </div>
            </div>
        </div>

        <div class="separacao2">    
             <div class="cardlv">
                <div class="img-box">
                    <img src="lasvegas.png"></img>
                </div>
                <div class="content">
                    <h2>Circuito Caesars Palace</h2>
                    <p>
                        3,650 km GP de Las Vegas
                    </p>
                </div>
            </div>

            <div class="cardsak">
                <div class="img-box">
                    <img src="sakhir.png"></img>
                </div>
                <div class="content">
                    <h2>Circuito Bahreindagger</h2>
                    <p>
                        3,664 km GP de Sakhir
                    </p>
                </div>     
            </div>
            </div>
        </div>   
        <div class="problem">
           <p> Um problema muito comum são o quanto os carros de Formula's podem produzir uma certa capacidade de poluição,
            então selecionamos algumas das menores pistas caso seja necessário utilizar carros movidos a combustão.
            conforme isso Um carro de Fórmula 1 emite aproximadamente 322 kg de CO2 por corrida, somando cerca de 7.084 kg
            de CO2 por ano, considerando 22 corridas. Além disso, treinos, qualificações e logística global aumentam 
            significativamente a pegada de carbono total da Fórmula 1. Para mitigar esse impacto, a Fórmula 1 adotou 
            motores híbridos e está desenvolvendo combustíveis sustentáveis, com o objetivo de se tornar neutra em 
            carbono até 2030.
           </p>
        </div>
        
    

    <div id="contato" class="content">
      <div class="container">
            <h2>Entre em Contato</h2>
            <p>Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para nos contatar.</p>
            <form action="#" method="post">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required></input>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
                <label for="message">Mensagem:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Enviar</button>
            </form>
      </div>
    </div>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Problemas de Automóveis</p>
        </div>
    </footer>
</body>
    </>
  )
}

export default App
