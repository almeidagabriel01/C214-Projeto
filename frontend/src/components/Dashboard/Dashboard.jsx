import React from "react";
import DashboardCard from "./DashboardCard";
import AdicionarReceita from "../../assets/images/AdicionarReceita.png";
import MinhasReceitas from "../../assets/images/MinhasReceitas.png";

const cards = [
  {
    title: "Minhas receitas",
    subtitle: "Acesse aqui suas receitas salvas e postadas",
    image: MinhasReceitas,
    link: "/minhas-receitas",
  },
  {
    title: "Adicionar uma nova receita",
    subtitle: "Crie novas receitas para compartilhar com outras pessoas",
    image: AdicionarReceita,
    link: "/adicionar-receita",
  },
];

const Dashboard = () => {
  return (
    <div className="px-8 py-10 bg-[#f5f0e8] min-h-screen flex flex-col items-center">
      <div className="flex flex-row justify-center gap-10 w-full max-w-6xl">
        {cards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;