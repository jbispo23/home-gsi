import React from "react";
import "./App.css";

function App() {
  const cards = [
    {
      title: "Wiki",
      desc: "Documentação viva do GSI. Padrões, tutoriais e funções.",
      href: "https://jbispo23.github.io/wiki-egas/",
    },
    {
      title: "Ativar Aluno",
      desc: "Ativar aluno para acesso a plataforma myagir",
      href: "https://egasmoniz.myagir.pt/flex/RegistoAluno",
    },
    {
      title: "Comquest",
      desc: "Extrair os relatórios de monitorização pedagógica",
      href: "https://seconline.egasmoniz.edu.pt/comquest/page?stage=difhomestage",
    },
    {
      title: "SmartEM",
      desc: "ERP Interno",
      href: "https://smartem.azurewebsites.net/",
    },
    {
      title: "Ticket myagir",
      desc: "EGAS MONIZ",
      href: "https://agirsupport.freshdesk.com/support/login",
    },
    {
      title: "Ticket Digitalis",
      desc: "abertura de tickets SIGES",
      href: "https://www.digitalis.pt/team/page?stage=difhomestage&login_button=Login",
    },
    {
      title: "Consultar aluno - Base Externa",
      desc: "Verificar se o aluno esta na base externa do myagir",
      href: "https://egasmoniz.myagir.pt/external_table.aspx?id=4",
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
      title: "OneDrive IUEM",
      desc: "Gestão de dados dos serviços do IUEM",
      href: "https://egasmonizpt-my.sharepoint.com/personal/iuem_egasmoniz_edu_pt/_layouts/15/onedrive.aspx?FolderCTID=0x0120000ABDDEDA2D783C46A542587AF1798312&id=%2Fpersonal%2Fiuem%5Fegasmoniz%5Fedu%5Fpt%2FDocuments%2FOneDrive%20IUEM%2FV%20%2D%20Monitoriza%C3%A7%C3%A3o%20do%20ensino%20IUEM&view=0",
    },
        {
      title: "OneDrive ESSEM",
      desc: "Gestão de dados dos serviços do IUEM",
      href: "https://egasmonizpt-my.sharepoint.com/personal/evalerio_egasmoniz_edu_pt/_layouts/15/onedrive.aspx?FolderCTID=0x012000D6C1DE8CDD2A7B419BC6C83BC873D1FA&id=%2Fpersonal%2Fevalerio%5Fegasmoniz%5Fedu%5Fpt%2FDocuments%2FSGQ%5FESSEM%5FGeral%2FIndicadores%20de%20Ensino&view=0&startedResponseCatch=true",
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
