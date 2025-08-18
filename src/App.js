import React from "react";
import "./App.css";

function App() {
  const cards = [
    {
      title: "Wiki",
      desc: "Documentação viva do GSI. Padrões, tutoriais e funções.",
      href: "https://jbispo23.github.io/wiki-egas/", // link do cadastro
    },
    {
      title: "Calendário",
      desc: "Planeamento de férias, teletrabalhos e eventos.",
      href: "https://mairacambule.github.io/Gestao_Calendario/",
    },
    {
      title: "Controlo de Auditórios",
      desc: "Reservas, equipamentos e suporte às salas especiais.",
      href: "https://github.com/SEU-USUARIO/seu-repo-auditorios",
    },
      {
      title: "Gestão de Tickets",
      desc: "Pedidos realizados por email, telefone e presencialmente.",
      href: "https://gsi-tickets.web.app/",
    },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Centro de Atalhos • GSI</h1>
      <p className="home-subtitle">Menu de Navegação</p>

      <div className="card-grid">
        {cards.map((card, i) => (
          <a
            key={i}
            href={card.href}
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
