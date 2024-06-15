import pizzaPeperoni from './imgProdutos/PizzaPeperoni.png';
import pizzaPortuguesa from './imgProdutos/PizzaPortuguesa.png';
import PizzaMargherita from './imgProdutos/PizzaMargherita.png';
import PizzaFrangoCatupiry from './imgProdutos/PizzaFrangoCatupiry.png';
import PizzaRuculaTomateSeco from './imgProdutos/PizzaRuculaTomateSeco.png';
import PizzaVegetariana from './imgProdutos/PizzaVegetariana.png';
import PizzaBaconCheddar from './imgProdutos/PizzaBaconCheddar.png';
import PizzaQuatroQueijos from './imgProdutos/PizzaQuatroQueijos.png';
import PizzaChocolateMorango from './imgProdutos/PizzaChocolateMorango.png';
import PizzaBananaCanela from './imgProdutos/PizzaBananaCanela.png';
import PizzaChocolatePreto from './imgProdutos/PizzaChocolatePreto.png';
import PizzaChocolateBranco from './imgProdutos/PizzaChocolateBranco.png';

const products = [
  {
    product: "Pizza Peperoni",
    description: "Fatias generosas de pepperoni picante sobre uma camada de queijo mussarela derretido e molho de tomate.",
    image: pizzaPeperoni,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Salgada"
  },
  {
    product: "Pizza Portuguesa",
    description: "Uma combinação saborosa de presunto, ovos cozidos, cebola, pimentão, azeitonas e queijo mussarela.",
    image: pizzaPortuguesa,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Salgada"
  },
  {
    product: "Pizza Margherita",
    description: "Uma combinação clássica de molho de tomate fresco, mussarela de búfala e folhas de manjericão, finalizada com um fio de azeite de oliva extra virgem.",
    image: PizzaMargherita,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Salgada"
  },
  {
    product: "Pizza Frango c/ Catupiry",
    description: "Pedaços suculentos de frango desfiado, cobertos com catupiry cremoso e finalizados com orégano.",
    image: PizzaFrangoCatupiry,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Salgada"
  },
  {
    product: "Pizza de Rúcula com Tomate Seco",
    description: "Uma pizza de queijo mussarela com rúcula, tomates secos e parmesão.",
    image: PizzaRuculaTomateSeco,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Salgada"
  },
  {
    product: "Pizza Vegetariana",
    description: "Uma explosão de cores e sabores com legumes e queijo.",
    image: PizzaVegetariana,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Salgada"
  },
  {
    product: "Pizza de Bacon com Cheddar",
    description: "Pedaços crocantes de bacon, cobertos com uma generosa porção de queijo cheddar derretido e finalizados com cebola caramelizada.",
    image: PizzaBaconCheddar,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Salgada"
  },
  {
    product: "Pizza Quatro Queijos",
    description: "Uma mistura de queijos (mussarela, gorgonzola, provolone e parmesão) em molho branco cremoso.",
    image: PizzaQuatroQueijos,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Salgada"
  },
  {
    product: "Pizza de Chocolate c/ Morango",
    description: "Uma deliciosa combinação de chocolate ao leite derretido, coberto com fatias frescas de morango e finalizado com açúcar de confeiteiro.",
    image: PizzaChocolateMorango,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Doce"
  },
  {
    product: "Pizza de Banana c/ Canela",
    description: "Fatias finas de banana caramelizadas com açúcar mascavo, polvilhadas com canela e finalizadas com um toque de leite condensado.",
    image: PizzaBananaCanela,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Doce"
  },
  {
    product: "Pizza Chocolate Preto",
    description: "Massa de pizza crocante e macia, chocolate preto premium derretido, creme de leite, uma pitada de açúcar.",
    image: PizzaChocolatePreto,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Doce"
  },
  {
    product: "Pizza Chocolate Branco",
    description: "Massa de pizza crocante e macia, chocolate branco premium derretido, creme de leite, uma pitada de açúcar.",
    image: PizzaChocolateBranco,
    prices: {
      Grande: 49.90,
      Médio: 39.90,
      Pequeno: 29.90,
    },
    category: "Pizza Doce"
  }
];

export default products;
