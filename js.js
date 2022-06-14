function criaCalculadora () {
    return {
        display: document.querySelector('.display'),

        iniciar() {
            this.eventosBtn();
            this.EventoEnter();
        },

        EventoEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.conta();
                };
            })
        },
        eventosBtn() {
            document.addEventListener('click', e => {
                const ev = e.target
                if (ev.classList.contains('btn-num')) {
                    this.mostraDisplay(ev.innerText);
                }
                if (ev.classList.contains('btn-AC')) {
                    this.display.value = "";
                }
                if (ev.classList.contains('btn-C')) {
                    this.display.value = this.display.value.slice(0, -1);
                }
                if (ev.classList.contains('btn-igual')) {
                    this.conta();
                }
            });
        },

        mostraDisplay(valor) {
            this.display.value += valor;
        },

        conta() {
            let conta = this.display.value;
            try {
                conta = eval(conta)
                if (conta == Infinity) {
                    conta = '0';
                }
                if(!conta) return;
                this.display.value = String(conta);
            } catch (ev){
                this.display.value = "";
                window.alert('Conta Inválida');
            }
        },
    };
};

const calculadora = criaCalculadora();
calculadora.iniciar();