import { useEffect, useState } from "react";
import "./App.css";

/* ---------- Ícones (SVG inline, com tamanho fixo) ---------- */
function Icone({ children }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const IconeMais = () => (
  <Icone>
    <path d="M12 5v14M5 12h14" />
  </Icone>
);

const IconeMenos = () => (
  <Icone>
    <path d="M5 12h14" />
  </Icone>
);

const IconeSino = () => (
  <Icone>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </Icone>
);

const IconeUsuario = () => (
  <Icone>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Icone>
);

const IconeOlho = () => (
  <Icone>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </Icone>
);

const IconeOlhoRiscado = () => (
  <Icone>
    <path d="M17.94 17.94A10.4 10.4 0 0 1 12 19c-6.5 0-10-7-10-7a17.7 17.7 0 0 1 4.06-4.94M9.9 5.24A9.8 9.8 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-2.16 3.19" />
    <path d="m2 2 20 20" />
  </Icone>
);

const IconeReiniciar = () => (
  <Icone>
    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
    <path d="M3 3v5h5" />
  </Icone>
);

const IconeAlvo = () => (
  <Icone>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </Icone>
);

const IconeCheck = () => (
  <Icone>
    <path d="M20 6 9 17l-5-5" />
  </Icone>
);

/* ---------- Cabeçalho padrão dos cards ---------- */
function TopoCartao({ missao, titulo, icone }) {
  return (
    <div className="cartao-topo">
      <div className="cartao-icone">{icone}</div>
      <div>
        <span className="missao">{missao}</span>
        <h2>{titulo}</h2>
      </div>
    </div>
  );
}

function inicial(nome) {
  const letra = nome.trim().charAt(0).toUpperCase();
  return letra || "?";
}

/* ---------- Missão 1 — Contador ---------- */
function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAnterior) => valorAnterior + 1);
  }

  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }

  return (
    <article className="cartao">
      <TopoCartao missao="Missão 1" titulo="Contador" icone={<IconeMais />} />
      <p className="valor">
        <span className="valor-num" key={contador}>
          {contador}
        </span>
      </p>
      <div className="acoes">
        <button className="botao" onClick={aumentar}>
          <IconeMais /> Aumentar
        </button>
        <button className="botao secundario" onClick={diminuir}>
          <IconeMenos /> Voltar um
        </button>
      </div>
    </article>
  );
}

/* ---------- Missão 2 — Mostrar e esconder aviso ---------- */
function Aviso() {
  const [visivel, setVisivel] = useState(false);

  return (
    <article className="cartao">
      <TopoCartao
        missao="Missão 2"
        titulo="Mostrar e esconder aviso"
        icone={<IconeSino />}
      />
      <p className="descricao">
        Um estado booleano controla se a mensagem aparece na tela.
      </p>
      {visivel && (
        <div className="aviso" role="status">
          <IconeSino />
          <span>O aviso está visível.</span>
        </div>
      )}
      <div className="acoes">
        <button className="botao" onClick={() => setVisivel(!visivel)}>
          {visivel ? <IconeOlhoRiscado /> : <IconeOlho />}
          Alternar aviso
        </button>
      </div>
    </article>
  );
}

/* ---------- Missão 3 — Saudação com campo de texto ---------- */
function Saudacao() {
  const [nome, setNome] = useState("");

  return (
    <article className="cartao">
      <TopoCartao
        missao="Missão 3"
        titulo="Saudação"
        icone={<IconeUsuario />}
      />
      <div className="campo-grupo">
        <IconeUsuario />
        <input
          className="campo"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Digite seu nome"
          aria-label="Seu nome"
        />
      </div>
      <div className="saudacao">
        <div className="avatar">{inicial(nome)}</div>
        <p className="saudacao-texto">
          <small>Mensagem</small>
          Olá, {nome || "visitante"}!
        </p>
      </div>
    </article>
  );
}

/* ---------- Desafio final — Cartão de boas-vindas ---------- */
function CartaoBoasVindas() {
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  return (
    <article className="cartao">
      <TopoCartao
        missao="Desafio final"
        titulo="Cartão de boas-vindas"
        icone={<IconeCheck />}
      />
      <div className="campo-grupo">
        <IconeUsuario />
        <input
          className="campo"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Digite seu nome"
          aria-label="Seu nome"
        />
      </div>
      {mostrarSaudacao && (
        <div className="saudacao">
          <div className="avatar">{inicial(nome)}</div>
          <p className="saudacao-texto">
            <small>Bem-vindo(a)</small>
            Olá, {nome || "visitante"}!
          </p>
        </div>
      )}
      <div className="acoes">
        <button
          className="botao"
          onClick={() => setMostrarSaudacao(!mostrarSaudacao)}
        >
          {mostrarSaudacao ? <IconeOlhoRiscado /> : <IconeOlho />}
          {mostrarSaudacao ? "Esconder saudação" : "Mostrar saudação"}
        </button>
      </div>
    </article>
  );
}

/* ---------- Confete (aparece ao atingir a meta) ---------- */
const CORES = ["#a78bfa", "#8b5cf6", "#c4b5fd", "#34d399", "#f0abfc", "#ffffff"];

function Confete() {
  return (
    <div className="confete" aria-hidden="true">
      {Array.from({ length: 28 }, (_, i) => (
        <span
          key={i}
          style={{
            "--x": `${(i * 37) % 100}%`,
            "--d": `${(i % 7) * 0.07}s`,
            "--cor": CORES[i % CORES.length],
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Desafio extra — Contador com meta ---------- */
const META = 10;

function ContadorComMeta() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAnterior) =>
      valorAnterior >= META ? valorAnterior : valorAnterior + 1
    );
  }

  return (
    <article className="cartao cartao-largo">
      <TopoCartao
        missao="Desafio extra"
        titulo="Contador com meta"
        icone={<IconeAlvo />}
      />
      {contador === META && <Confete />}
      <p className="valor">
        <span className="valor-num" key={contador}>
          {contador}
        </span>
      </p>
      <div
        className="progresso"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={META}
        aria-valuenow={contador}
      >
        <div style={{ width: `${(contador / META) * 100}%` }} />
      </div>
      <div className="progresso-legenda">
        <span>0</span>
        <span>Meta: {META}</span>
      </div>
      {contador === META && (
        <div className="meta-atingida" role="status">
          <IconeCheck />
          Meta atingida
        </div>
      )}
      <div className="acoes">
        <button className="botao" onClick={aumentar}>
          <IconeMais /> Aumentar
        </button>
        <button className="botao secundario" onClick={() => setContador(0)}>
          <IconeReiniciar /> Voltar a zero
        </button>
      </div>
    </article>
  );
}

/* ---------- Aplicação ---------- */
function App() {
  // Luz que acompanha o mouse dentro dos cards
  useEffect(() => {
    function acompanharMouse(evento) {
      const cartao = evento.target.closest?.(".cartao");
      if (!cartao) return;
      const area = cartao.getBoundingClientRect();
      cartao.style.setProperty("--mx", `${evento.clientX - area.left}px`);
      cartao.style.setProperty("--my", `${evento.clientY - area.top}px`);
    }

    document.addEventListener("mousemove", acompanharMouse);
    return () => document.removeEventListener("mousemove", acompanharMouse);
  }, []);

  return (
    <div className="pagina">
      <div className="orbs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className="hero">
        <span className="etiqueta">
          <span className="ponto" />
          React • Estado • Atividade guiada
        </span>
        <h1>Primeiros passos com useState</h1>
        <p>
          Guardando informações no componente e atualizando a interface em
          resposta às ações do usuário.
        </p>
      </header>

      <main className="grade">
        <Contador />
        <Aviso />
        <Saudacao />
        <CartaoBoasVindas />
        <ContadorComMeta />
      </main>

      <footer className="rodape">
        Programação de Aplicativos • Técnico em Desenvolvimento de Sistemas
      </footer>
    </div>
  );
}

export default App;