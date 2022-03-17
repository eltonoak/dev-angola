const unive = document.querySelector(".universidades");
const modelo = document.querySelector(".cartao-modelo");
let contador = 0, provincias = 0;
// const filtroCurso = document.querySelector('.cursoFiltro'); TODO mais tarde

renderizarUniversidades(todas);

// filtrarCurso.addEventListener('change', () => { FIXME mais tarde
//   renderizar(universidade.filter(uni => uni.cursos.includes(cursoF.value)));
// });

function renderizarUniversidades(lista) {
  for (universidades of lista) {
    // console.log(universid)
    if (universidades.length != 0) {
      document.querySelector("select").innerHTML += `<option value="${universidades[0].provincia}">${universidades[0].provincia}</option>`
      unive.append(document.createElement("h2").innerText = "Provincia: " + universidades[0].provincia);
      universidades
        .map(universidade => {
          const clone = modelo.cloneNode(true);
          clone.querySelector(".titulo-cartao").innerText = `${++contador}. ${universidade.identificacao} - ${universidade.nome}`;
          for (curso of universidade.cursos) {
            clone.querySelector(".cursos").innerHTML += curso + "  ";
          }
          clone.querySelector(".provincia").innerHTML += " " + universidade.provincia;
          clone.querySelector(".website").href = universidade.website;
          clone.querySelector(".website").innerHTML += universidade.website;
          unive.append(clone);
        });
    }
    ++provincias;
  }
  document.querySelector(".total").innerText += " " + contador;
  document.querySelector(".provincias").innerText += " " + provincias;
  modelo.classList.add("ocultar");
}