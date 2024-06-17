import React, { useState } from 'react';
import './Carrinho.css';
import { calcularTotal } from './utils'; // Supondo que a função calcularTotal está implementada em ./utils
import ItemCarrinho from './ItemCarrinho'; // Componente para renderizar cada item do carrinho
import TelaConfirmar from '../../produtos/TelaConfirmar';
import adornoSabor from "../../produtos/imgs/adornoSabor.png";


const Carrinho = ({ produtos }) => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [observations, setObservations] = useState('');

  const adicionarAoCarrinho = (produto, tamanho, preco, observacoes) => {
    const newItem = {
      product: produto,
      size: tamanho,
      price: preco,
      observations: observacoes,
    };
    setItensCarrinho([...itensCarrinho, newItem]);
    setObservations(''); // Limpa as observações após adicionar ao carrinho
  };

  // Verifica se produtos não é undefined e se possui pelo menos um elemento
  const produtoSelecionado = produtos && produtos.length > 0 ? produtos[0] : null;

  return (
    <div className="carrinho">
      <header className="carrinho-header">
        <h2 className="carrinho-title" style={{ color: '#F0B872' }}>Carrinho</h2>
        <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
        <div className="total-container">
          <span style={{ color: 'white' }}>Total:</span>
          <span className="total-price">R$ {calcularTotal(itensCarrinho).toFixed(2)}</span>
        </div>
        <button className="finalizar-button">Finalizar</button>
      </header>
      <div className="carrinho-items">
        {itensCarrinho.map((item, index) => (
          <ItemCarrinho key={index} item={item} />
        ))}
      </div>
      <div className="adicionar-observacoes">
        <input
          type="text"
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
          placeholder="Adicionar observações"
        />
        {/* Passa a função adicionarAoCarrinho para TelaConfirmar */}
      </div>
    </div>
  );
};

export default Carrinho;