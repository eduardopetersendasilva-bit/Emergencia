/* ================================
   JARDIM DA LUA - SCRIPT.JS
   ================================ */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Jardim da Lua iniciado 🌙");

    /* ================================
       MENU SUAVE
       ================================ */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (event) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {
                event.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* ================================
       FORMULÁRIO
       ================================ */

    const formulario = document.querySelector("form");
    const alerta = document.querySelector(".alert");

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            if (alerta) {
                alerta.style.display = "block";
                alerta.textContent =
                    "Mensagem enviada! Obrigado por confiar no Jardim da Lua. 💙";
            }

            formulario.reset();

            setTimeout(() => {

                if (alerta) {
                    alerta.style.display = "none";
                }

            }, 5000);
        });
    }


    /* ================================
       BOTÃO DE EMERGÊNCIA
       ================================ */

    const botoesEmergencia =
        document.querySelectorAll(".btn-danger");

    botoesEmergencia.forEach(botao => {

        botao.addEventListener("click", () => {

            const confirmar = confirm(
                "Você está em uma situação de emergência?\n\n" +
                "Se houver perigo imediato, procure um adulto de confiança " +
                "ou entre em contato com os serviços de emergência da sua região."
            );

            if (confirmar) {

                alert(
                    "Procure um local seguro e peça ajuda a uma pessoa de confiança."
                );

            }
        });
    });


    /* ================================
       ANIMAÇÃO DOS CARDS
       ================================ */

    const cards = document.querySelectorAll(".card");

    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";
                    entrada.target.style.transform =
                        "translateY(0)";
                }
            });

        },
        {
            threshold: 0.15
        }
    );

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observador.observe(card);
    });


    /* ================================
       BOTÃO VOLTAR AO TOPO
       ================================ */

    const botaoTopo = document.createElement("button");

    botaoTopo.innerHTML = "↑";

    botaoTopo.setAttribute(
        "aria-label",
        "Voltar ao topo"
    );

    botaoTopo.style.position = "fixed";
    botaoTopo.style.bottom = "20px";
    botaoTopo.style.right = "20px";
    botaoTopo.style.width = "48px";
    botaoTopo.style.height = "48px";
    botaoTopo.style.border = "none";
    botaoTopo.style.borderRadius = "50%";
    botaoTopo.style.background = "#477cff";
    botaoTopo.style.color = "#ffffff";
    botaoTopo.style.fontSize = "24px";
    botaoTopo.style.cursor = "pointer";
    botaoTopo.style.display = "none";
    botaoTopo.style.zIndex = "999";

    document.body.appendChild(botaoTopo);


    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none";
        }

    });


    botaoTopo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ================================
       DATA E ANO NO RODAPÉ
       ================================ */

    const ano = document.querySelector("#ano");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

});
