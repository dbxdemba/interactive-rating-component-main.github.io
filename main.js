const btnitems = document.querySelectorAll('.btn-items-all');
const submitbtn = document.querySelector('.submit-button');
const container1 = document.querySelector('.container-item-1');
const container2 = document.querySelector('.container-item-2');
const spanactive = document.querySelector('.btn-selected-text');
const maincont = document.querySelector('.container')
const newcont2 = container2.parentNode.removeChild(container2);
submitbtn.addEventListener('click', function(){
    /*condition servant a verifier l'existence d'une classe. si elle existe alors ca ne se declenche pas
    sinon elle se declenche d'ou la presence de '!' pour dire difference*/
    if(!btnitems[0].classList.contains('btn-active') && !btnitems[1].classList.contains('btn-active') && !btnitems[2].classList.contains('btn-active') && !btnitems[3].classList.contains('btn-active') &&!btnitems[4].classList.contains('btn-active')){
        alert('veuillez selectionnner un chiffre')
    }
    })
    //slide entre les bouttons
btnitems.forEach(element => {
    element.addEventListener('click', function(){
        btnitems.forEach(btn => {
            btn.classList.remove('btn-active');
            btn.classList.remove('btn-items-all')
            this.classList.add('btn-active')
            spanactive.textContent = `${this.textContent} `;
            });
            container1.firstElementChild.classList.add('img-container-active');
            //declenchement de la fonction dbx
            this.addEventListener('mouseout',dbx)
            //qui sert lorsque je me deplace du containner de l'etoitle
            function dbx(){
                container1.firstElementChild.classList.remove('img-container-active');
            }
            //permet de declencher le boutton submit
            submitbtn.addEventListener('click', sub);
        });
    }
);
//fonction sub qui vq servir dans submitbtn
function sub(){
    container2.classList.add('container-item-2-active');
    container1.classList.add('container-item-1-active');
    const newcont3 = container1.parentNode.removeChild(container1);
    maincont.appendChild(newcont2);
    spanactive.style.color = 'hsl(25, 97%, 53%)';
    spanactive.style.fontSize = '15px'

    let reseto = document.querySelector('.reset-button');
    function resetf(){
        newcont2.remove()
        maincont.appendChild(newcont3);
        console.log(newcont3)
        container1.classList.remove('container-item-1-active');
        btnitems.forEach(element => {
            element.classList.remove('btn-active');
        });
    }
    reseto.addEventListener('click', resetf)
};


// container1.firstElementChild.classList.toggle('img-container-active');
