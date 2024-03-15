document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario')
    const notasDiv = document.getElementById('notas')
    const notas = JSON.parse(localStorage.getItem('notas')) || [];

    function renderizarNotas(){
    notasDiv.innerHTML = ''
    notas.forEach((nota, index) => {
        const notaDiv = document.createElement('div');
        notaDiv.innerHTML = `<fieldset>
        <p>${nota}</p>
        <button onclick="excluirNota(${index})">Excluir</button>
        </fieldset>
        `;
        notasDiv.appendChild(notaDiv);
    });
}

window.excluirNota = function(index){
    notas.splice(index, 1)
    localStorage.setItem('notas', JSON.stringify(notas))
    renderizarNotas()

};

 function salvarNota(novaNota){
    notas.push(novaNota)
    localStorage.setItem('notas', JSON.stringify(notas))
    renderizarNotas()


 }
 
 formulario.addEventListener('submit', function(event){
    event.preventDefault()
    const novaNota = document.getElementById('textonota').value.trim()
    if(novaNota !== ''){
        salvarNota(novaNota)
        formulario.reset()

    }
 });

 renderizarNotas()

});