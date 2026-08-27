import React from "react";
import Logo from "@/assets/BlackLogo.png";

export default function SystemLayout({ children }) {
  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <a href="#" className="active">
            Inicio
          </a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <a href="#">Triagem Online</a>
        </nav>
        <div className="actions">
          <a className="secondary login" href="./src/pages/login.html">
            Entrar
          </a>
          <a className="primary register" href="#">
            Cadastrar
          </a>
        </div>
      </header>
      <main>
      {children}
      </main>
      <footer>
    <div className="containerFooter">
      <div className="pulsar">
        <img src="./src/assets/images/WhiteLogo.png" alt="Logo Pulsar" />
        <p>
          Comprometidos com a excelência clínica e a preservação da vida
          através da tecnologia e do humanismo.
        </p>
      </div>
      <div className="links">
        <div className="institutional">
          <h3>Institucional</h3>
          <a href="#">Sobre nós</a>
          <a href="#">Unidades</a>
          <a href="#">Transparência</a>
        </div>
        <div className="contact">
          <h3>Contato</h3>
          <a href="#">Central: 0800 700 400</a>
          <a href="#">Email: suporte@pulsar.com.br</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
    <div className="footerBottom">
      <div className="divisor"></div>
      <div className="finalTexts">
        <span>&copy; 2026 Pulsar - Banco de Sangue. Todos os direitos reservados</span>
        <div className="finalList">
          <a href="">Termos de Uso</a>
          <a href="">Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
}
