// Objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

// Lista de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false, reserva: null },
  { id: 2, formato: "padrao", status: true, acessivel: false, reserva: null },
  { id: 3, formato: "padrao", status: true, acessivel: false, reserva: null },
  { id: 4, formato: "padrao", status: false, acessivel: true, reserva: null },
  { id: 5, formato: "padrao", status: false, acessivel: true, reserva: null },
  { id: 6, formato: "duplo", status: true, acessivel: true, reserva: null },
  { id: 7, formato: "duplo", status: false, acessivel: true, reserva: null },
  { id: 8, formato: "duplo", status: false, acessivel: true, reserva: null },
];

// Função para reservar armário
function reservarArmario() {
  // Obter tipo de armário selecionado pelo usuário no HTML
  let tipoSelecionado = document.getElementById("tipoArmario").value;

  // Filtrar apenas armários disponíveis e acessíveis ao usuário
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);

  // Se não houver armários disponíveis, exibir mensagem ao usuário
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  // Selecionar aleatoriamente um armário disponível
  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];

  // Registrar a data e hora da reserva
  let dataReserva = new Date();
  
  // Calcular a data e hora para entrega das chaves (24 horas após a reserva)
  let dataEntrega = new Date(dataReserva);
  dataEntrega.setHours(dataEntrega.getHours() + 24);

  // Atualizar o status do armário e registrar os horários
  let armarioIndex = armarios.findIndex(armario => armario.id === armarioSorteado.id);
  armarios[armarioIndex] = {
    ...armarios[armarioIndex], 
    status: false,
    reserva: {
      usuario: usuario.nome,
      dataReserva: dataReserva.toLocaleString(),
      dataEntrega: dataEntrega.toLocaleString()
    }
  };

  // Marcar pendência no usuário
  usuario.pendencia = true;

  // Exibir mensagem de sucesso
  document.getElementById("resultado").innerText = 
    `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso! 
    Data da reserva: ${dataReserva.toLocaleString()} 
    Data limite para devolução: ${dataEntrega.toLocaleString()}`;

  console.log(usuario);
  console.log(armarios);
}

// Função para alternar entre as abas
function mostrarAba(aba) {
  // Esconder todos os conteúdos
  document.querySelectorAll('.conteudo').forEach(function(conteudo) {
      conteudo.classList.remove('ativo');
  });

  // Mostrar o conteúdo da aba selecionada
  document.getElementById(aba).classList.add('ativo');
}