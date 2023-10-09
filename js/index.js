const body = document.querySelector('body');
const scrollBar = document.querySelector('.scroll');

const accueil = document.querySelector('.accueil');
const profil = document.querySelector('.profil');
const competences = document.querySelector('.competences');
const portfolio = document.querySelector('.portfolio');
const parcours = document.querySelector('.parcours');

const sections = document.querySelector('.sections');

const grde_acc = document.querySelector('#grd-acc');
const grde_prof = document.querySelector('#grd-prof');
const grde_comp = document.querySelector('#grd-comp');
const grde_portf = document.querySelector('#grd-portf');
const grde_parc = document.querySelector('#grd-parc');

const acc = document.querySelector('#acc');
const prof = document.querySelector('#prof');
const comp = document.querySelector('#comp');
const portf = document.querySelector('#portf');
const parc = document.querySelector('#parc');

acc.addEventListener("click", ()=>{
    accueil.scrollIntoView({ behavior: "smooth"})
})

prof.addEventListener("click", ()=>{
    profil.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
})
comp.addEventListener("click", ()=>{
    competences.scrollIntoView({ behavior: "smooth"})
})
portf.addEventListener("click", ()=>{
    portfolio.scrollIntoView({ behavior: "smooth"})
})
parc.addEventListener("click", ()=>{
    parcours.scrollIntoView({ behavior: "smooth"})
})

document.querySelector(".section2").style.background="#F5EAFF";
grde_acc.style.transition="2s"
grde_acc.style.width="100%";

grde_prof.style.transition="0s"
grde_comp.style.transition="0s"
grde_portf.style.transition="0s"
grde_parc.style.transition="0s"

grde_prof.style.width="0";
grde_comp.style.width="0";
grde_portf.style.width="0";
grde_parc.style.width="0";

window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY / (body.clientHeight - window.innerHeight);
    let scrollPercent = Math.round(scroll * 100);
    scrollBar.style.width = scrollPercent + '%';


    const {scrollTop, clientHeight} = document.documentElement;

    const topAccueil = accueil.getBoundingClientRect().top;
    const topProfil = profil.getBoundingClientRect().top;
    const topCompetences = competences.getBoundingClientRect().top;
    const topPortfolio = portfolio.getBoundingClientRect().top;
    const topParcours = parcours.getBoundingClientRect().top;

    // Accueil
    if (scrollTop > (scrollTop + topAccueil).toFixed() -150){
        document.querySelector(".section2").style.background="#F5EAFF";
        grde_acc.style.transition="2s"
        grde_acc.style.width="100%";

        grde_prof.style.transition="0s"
        grde_comp.style.transition="0s"
        grde_portf.style.transition="0s"
        grde_parc.style.transition="0s"

        grde_prof.style.width="0";
        grde_comp.style.width="0";
        grde_portf.style.width="0";
        grde_parc.style.width="0";
        // section = 0;
        // scrollsec();
    }
    // Profil
    if (scrollTop > (scrollTop + topProfil).toFixed() -150){
        document.querySelector(".section2").style.background="#FFEAEE";
        grde_prof.style.transition="2s"
        grde_prof.style.width="100%";

        grde_acc.style.transition="0s"
        grde_comp.style.transition="0s"
        grde_portf.style.transition="0s"
        grde_parc.style.transition="0s"

        grde_acc.style.width="0";
        grde_comp.style.width="0";
        grde_portf.style.width="0";
        grde_parc.style.width="0";
        // section = 1;
        // scrollsec();
    }

    // Competences
    if (scrollTop > (scrollTop + topCompetences).toFixed() -150){
        document.querySelector(".section2").style.background="#FFF7E7";
        grde_comp.style.transition="2s"
        grde_comp.style.width="100%";

        grde_acc.style.transition="0s"
        grde_prof.style.transition="0s"
        grde_portf.style.transition="0s"
        grde_parc.style.transition="0s"

        grde_acc.style.width="0";
        grde_prof.style.width="0";
        grde_portf.style.width="0";
        grde_parc.style.width="0";
        // section = 2;
        // scrollsec();
        
    }

    // portfolio
    if (scrollTop > (scrollTop + topPortfolio).toFixed() -150){
        document.querySelector(".section2").style.background="#EAFFE9";
        grde_portf.style.transition="2s"
        grde_portf.style.width="100%";

        grde_acc.style.transition="0s"
        grde_prof.style.transition="0s"
        grde_comp.style.transition="0s"
        grde_parc.style.transition="0s"

        grde_acc.style.width="0";
        grde_prof.style.width="0";
        grde_comp.style.width="0";
        grde_parc.style.width="0";
        // section = 3;
        // scrollsec();
        
    }

    // parcours
    if (scrollTop > (scrollTop + topParcours).toFixed() -150){
        document.querySelector(".section2").style.background="#E4F6FF";
        grde_parc.style.transition="2s"
        grde_parc.style.width="100%";

        grde_acc.style.transition="0s"
        grde_prof.style.transition="0s"
        grde_comp.style.transition="0s"
        grde_portf.style.transition="0s"

        grde_acc.style.width="0";
        grde_prof.style.width="0";
        grde_comp.style.width="0";
        grde_portf.style.width="0";
        // section = 4;
        // scrollsec();
        
    }
})


// Gros slider du portfolio

document.querySelectorAll(".slider-container").forEach(element => {
    //slide suivante
    element.querySelector(".slider").style.transition = "transform 1s";

    element.querySelector(".slider").style.transform = "translateX(-0px)";

    const onClickD = () => {
        if (element.querySelector(".slider").style.transform.slice(11,element.querySelector(".slider").style.transform.indexOf("p")) > -1 * element.querySelector(".slider").getBoundingClientRect().width + element.querySelector(".slider > div").getBoundingClientRect().width)  {
    
                
            element.querySelector(".slider").style.transform = "translateX(" + (parseFloat(element.querySelector(".slider").style.transform.slice(11,element.querySelector(".slider").style.transform.indexOf("p"))) - parseFloat(element.querySelector(".slider > div").getBoundingClientRect().width)) + "px)"



        }

        const fleche = event.target;

        if (fleche.id=="prog"){
            document.querySelector(".contenu-prog").classList.remove("none");
            document.querySelector(".desc-prog").classList.remove("none");
        }
        if (fleche.id=="anim"){
            document.querySelector(".contenu-anim").classList.remove("none");
            document.querySelector(".desc-anim").classList.remove("none");
        }
        if (fleche.id=="mod"){
            document.querySelector(".contenu-mod").classList.remove("none");
            document.querySelector(".desc-mod").classList.remove("none");
        }
    };

    const onMouseOverD = () => {
        const fleche = event.target;

        if (fleche.id=="prog"){
            document.querySelectorAll(".portf-desc").forEach(PortfDesc=>{
                PortfDesc.classList.remove("visible");
            })
            document.querySelector("#programmation").classList.add("visible");

            document.querySelector(".portf-barre-progress-prog-1").style.transition=".4s";
            document.querySelector(".portf-barre-progress-prog-2").style.transition=".4s";
            document.querySelector(".portf-barre-progress-prog-3").style.transition=".4s";

            document.querySelector(".portf-barre-progress-prog-1").style.transitionDelay=".3s";
            document.querySelector(".portf-barre-progress-prog-2").style.transitionDelay=".6s";
            document.querySelector(".portf-barre-progress-prog-3").style.transitionDelay=".9s";
            

            for (let i = 0; i<=70; i++){
                document.querySelector(".portf-barre-progress-prog-1").style.width=i + 'px';
            }
            for (let i = 0; i<=60;i++){
                document.querySelector(".portf-barre-progress-prog-2").style.height=i + 'px';
            }
            for (let i = 0; i<=100;i++){
                document.querySelector(".portf-barre-progress-prog-3").style.width=i + 'px';
            }

            document.querySelector("#titre-prog").style.transition="1s";
            document.querySelector("#titre-prog").style.transitionDelay="1.3s";
            document.querySelector("#titre-prog").style.opacity='1';


            const ulprog = document.querySelector("#ul-prog");
            
            let delayanim = 1.5;
            for (let i = 1; i<=4;i++){
                const liprog = ulprog.querySelector(`#li-prog:nth-child(${i})`);
                liprog.style.transition=".5s";
                liprog.style.transitionDelay=delayanim + "s";
                liprog.style.opacity="1";
                delayanim = delayanim + .2;
            }


         

        }
        if (fleche.id=="anim"){
            document.querySelectorAll(".portf-desc").forEach(PortfDesc=>{
            PortfDesc.classList.remove("visible");
            })
            document.querySelector("#animations").classList.add("visible");

            document.querySelector(".portf-barre-progress-anim-1").style.transition=".4s";
            document.querySelector(".portf-barre-progress-anim-2").style.transition=".4s";
            document.querySelector(".portf-barre-progress-anim-3").style.transition=".4s";

            document.querySelector(".portf-barre-progress-anim-1").style.transitionDelay=".3s";
            document.querySelector(".portf-barre-progress-anim-2").style.transitionDelay=".6s";
            document.querySelector(".portf-barre-progress-anim-3").style.transitionDelay=".9s";

            for (let i = 0; i<=70; i++){
                document.querySelector(".portf-barre-progress-anim-1").style.width=i + 'px';
            }
            for (let i = 0; i<=20;i++){
                document.querySelector(".portf-barre-progress-anim-2").style.height=i + 'px';
            }
            for (let i = 105; i>=85;i--){
                document.querySelector(".portf-barre-progress-anim-2").style.top=i + 'px';
            }
            for (let i = 0; i<=100;i++){
                document.querySelector(".portf-barre-progress-anim-3").style.width=i + 'px';
            }


            document.querySelector("#titre-anim").style.transition="1s";
            document.querySelector("#titre-anim").style.transitionDelay="1.3s";
            document.querySelector("#titre-anim").style.opacity='1';


            const ulanim = document.querySelector("#ul-anim");
            
            let delayanim = 1.5;
            for (let i = 1; i<=4;i++){
                const lianim = ulanim.querySelector(`#li-anim:nth-child(${i})`);
                lianim.style.transition=".5s";
                lianim.style.transitionDelay=delayanim + "s";
                lianim.style.opacity="1";
                delayanim = delayanim + .2;
            }

        }
        if (fleche.id=="mod"){
            document.querySelectorAll(".portf-desc").forEach(PortfDesc=>{
                PortfDesc.classList.remove("visible");
            })
            document.querySelector("#modelisation").classList.add("visible");
        }
    };

    const onMouseOutD = () => {
        const fleche = event.target;
        document.querySelectorAll(".portf-desc").forEach(PortfDesc=>{
            PortfDesc.classList.remove("visible");
        })


        const ulprog = document.querySelector("#ul-prog");
        for (let i = 1; i<=4;i++){
            const liprog = ulprog.querySelector(`#li-prog:nth-child(${i})`);
            liprog.style.transition="0s";
            liprog.style.opacity="0";
        }

        const ulanim = document.querySelector("#ul-anim");
        for (let i = 1; i<=4;i++){
            const lianim = ulanim.querySelector(`#li-anim:nth-child(${i})`);
            lianim.style.transition="0s";
            lianim.style.opacity="0";
        }


        document.querySelectorAll(".slide1-desc-titre").forEach(element=>{
            element.style.transition="0s";
            element.style.opacity='0';
        })


        document.querySelector(".portf-barre-progress-prog-1").style.transition="0s";
        document.querySelector(".portf-barre-progress-prog-2").style.transition="0s";
        document.querySelector(".portf-barre-progress-prog-3").style.transition="0s";

        document.querySelector(".portf-barre-progress-anim-1").style.transition="0s";
        document.querySelector(".portf-barre-progress-anim-2").style.transition="0s";
        document.querySelector(".portf-barre-progress-anim-3").style.transition="0s";

        

        document.querySelector(".portf-barre-progress-prog-1").style.width='0px';
        document.querySelector(".portf-barre-progress-prog-2").style.height='0px';
        document.querySelector(".portf-barre-progress-prog-3").style.width='0px';

        document.querySelector(".portf-barre-progress-anim-1").style.width='0px';
        document.querySelector(".portf-barre-progress-anim-2").style.height='0px';
        document.querySelector(".portf-barre-progress-anim-2").style.top='105px';
        document.querySelector(".portf-barre-progress-anim-3").style.width='0px';


        
    };



    element.querySelectorAll(".fleche-droite").forEach(fleche=>{
        fleche.addEventListener("click", onClickD);
        fleche.addEventListener("mouseover", onMouseOverD);
        fleche.addEventListener("mouseout", onMouseOutD);
    });


    const onClickG = () => {
        if (element.querySelector(".slider").style.transform.slice(11,element.querySelector(".slider").style.transform.indexOf("p")) < 0) {

            

            element.querySelector(".slider").style.transform = "translateX(" + (parseFloat(element.querySelector(".slider").style.transform.slice(11,element.querySelector(".slider").style.transform.indexOf("p"))) + parseFloat(element.querySelector(".slider > div").getBoundingClientRect().width)) + "px)";


        }

        document.querySelectorAll("#sous-slide").forEach(section=>{
            setTimeout(() => {
                section.classList.add("none");
            }, 1000);
        })
        document.querySelectorAll("#portf-texte").forEach(texte=>{
            texte.classList.remove("visible");
            texte.scrollTop = 0;
        });
    };
    
    

element.querySelector(".fleche-gauche").addEventListener("click", onClickG);

})


const TexteSitesJeux = [

    // Motus
    `<span style='font-weight: bold; text-align: center; position: relative; display: block; width: 100%; text-align: center; font-size: 120%; top: 2%'>
    Le jeu Motus
    </span>
    <br><br>
    <a class='voir-contenu' href='https://galima10.github.io/motus/' target="blank">Aller voir</a><br><br>
    <span style='margin-left: 5%; font-weight: bold;'>Règles du jeu :</span><br><br>
    <ul>
        <li style='font-size:80%;'>Entrez un mot à faire deviner</li>
        <li style='font-size:80%;'>Ensuite, une grille apparaîtra avec 6 lignes qui correspondent 6 essais</li>
        <li style='font-size:80%;'>Le nombre de colonnes correspond au nombre de lettres dans le mot à deviner</li>
        <li style='font-size:80%;'>La première lettre est déjà entrée dans la grille</li>
        <li style='font-size:80%;'>Entrez plusieurs mots commençant par cette lettre et avec le nombre de lettres nécessaires</li>
        <li style='font-size:80%;'>À chaque essai (sauf si le mot est trouvé du premier coup), les lettres en rouge sont les lettres bien placées et présentes dans le mot à deviner</li>
        <li style='font-size:80%;'>Les lettres en jaunes sont les lettres qui sont présentes dans le mot à deviner mais mal placées</li>
        <li style='font-size:80%;'>Les lettres sans changement de couleur signifie qu'elles ne sont pas présentes dans le mot à deviner</li>
        <li style='font-size:80%;'>Remarque : le nombre de lettres en jaunes correspond au nombre de fois qu'elles sont présentes dans le mot à deviner</li>
        <li style='font-size:80%;'>Chaque lettres en rouge sont présentes à leur bonne position aux essais suivants</li>
    </ul><br><br><span style='margin-left: 5%; font-weight: bold;'>Compétences utilisés :</span><br><br>
    <ul>
        <li style='font-size:80%;'>Utilisation de JS pour détecter la présence et les positions des lettres dans le mot à deviner et le mot entré par l'utilisateur</li>
        <li style='font-size:80%;'>Utilisation de JS pour détecter la touche "Entrée" et "Retour en arrière" dans un champ de saisie</li>
        <li style='font-size:80%;'>Utilisation de JS pour créer des balises &lt;div&gt; pour chaque lettres du champ de saisie pour le mot entré par l'utilisateur</li>
        <li style='font-size: 80%;'>Utilisation de JS pour actualiser la grille en temps réel à chaque nouvelle lettre entrée ou retirée du champ de saisie</li>
        <li style='font-size: 80%;'>Utilisation de JS pour activer des audios</li>
    </ul>`, 
    

    // Pendu
    `<span style='font-weight: bold; text-align: center; position: relative; display: block; width: 100%; text-align: center; font-size: 120%; top: 2%'>
    Le jeu Pendu
    </span>
    <br><br>
    <a class='voir-contenu' href='https://galima10.github.io/pendu/' target="blank">Aller voir</a><br><br>
    <span style='margin-left: 5%; font-weight: bold;'>Règles du jeu :</span><br><br>
    <ul>
        <li style='font-size:80%;'>Entrez un mot à faire deviner</li>
        <li style='font-size:80%;'>Ensuite, ce mot est remplacer par des traits</li>
        <li style='font-size:80%;'>En 7 essais, vous devez avoir deviner le mot au risque de predre</li>
        <li style='font-size:80%;'>Entrez une lettre dans le chanmp de saisie mis à disposition</li>
        <li style='font-size:80%;'>Les lettres entrées qui sont présentes dans le mot à deviner remplacent les traits à la bonne positon</li>
        <li style='font-size:80%;'>Les lettres entrées qui sont non-présentes dans le mot à deviner retire 1 essai au nombre total d'essai</li>
        <li style='font-size:80%;'>Les lettres non-présentes dans le mot sont également présentes dans une liste apparantes eu-dessus du nombre d'essais pour éviter d'entrer plusieurs fois les mêmes mauvaises lettres</li>
    </ul><br><br><span style='margin-left: 5%; font-weight: bold;'>Compétences utilisés :</span><br><br>
    <ul>
        <li style='font-size:80%;'>Utilisation de JS pour détecter la présence de la lettre entrée par l'utilisateur dans le mot à deviner</li>
        <li style='font-size:80%;'>Utilisation de JS pour détecter la touche "Entrée" dans un champ de saisie</li>
        <li style='font-size:80%;'>Utilisation de JS pour remplacer le mot à deviner par des traits</li>
        <li style='font-size: 80%;'>Utilisation de JS pour faire apparaître au fur et à mesur le pendu</li>
        <li style='font-size: 80%;'>Utilisation de JS pour détecter les lettres non-présentes dans le mot à deviner</li>
        <li style='font-size: 80%;'>Utilisation de JS pour créer le nombre d'essais restants</li>
    </ul>`, 
    

    // Morpion
    `<span style='font-weight: bold; text-align: center; position: relative; display: block; width: 100%; text-align: center; font-size: 120%; top: 2%'>
    Le jeu Morpion
    </span>
    <br><br>
    <a class='voir-contenu' href='https://galima10.github.io/morpion/' target="blank">Aller voir</a><br><br>
    <span style='margin-left: 5%; font-weight: bold;'>Règles du jeu :</span><br><br>
    <ul>
        <li style='font-size:80%;'>Ce jeu se joue à 2 joueurs sur un même navigateur</li>
        <li style='font-size:80%;'>Le joueur 1 joue les "croix" et le joueur 2 les "ronds"</li>
        <li style='font-size:80%;'>Chacun leur tour, ils vont placer dans la grille 3x3 une croix pour le joueur 1 et un rond pour le joueur 2</li>
        <li style='font-size:80%;'>Le but est d'avoir soit une ligne de 3, soit une colonne de 3, soit une diagonale de 3 du même symbole pour remporter la victoire</li>
        <li style='font-size:80%;'>Remarque : il est possible d'avoir Match nul</li>
    </ul><br><br><span style='margin-left: 5%; font-weight: bold;'>Compétences utilisés :</span><br><br>
    <ul>
        <li style='font-size:80%;'>Utilisation de JS pour créer des divs "rond" et "croix"</li>
        <li style='font-size:80%;'>Utilisation de JS pour faire changer de joueurs entre "rond" et "croix"</li>
        <li style='font-size:80%;'>Utilisation de JS pour détecter dans la grille la positon des ronds et des croix</li>
        <li style='font-size: 80%;'>Utilisation de JS pour vérifier les conditions de victoire dans la grille</li>
    </ul>`, 
    

    // Puissance 4
    `<span style='font-weight: bold; text-align: center; position: relative; display: block; width: 100%; text-align: center; font-size: 120%; top: 2%'>
    Le jeu Puissance 4
    </span>
    <br><br>
    <a class='voir-contenu' href='https://galima10.github.io/puissance4/' target="blank">Aller voir</a><br><br>
    <span style='margin-left: 5%; font-weight: bold;'>Règles du jeu :</span><br><br>
    <ul>
        <li style='font-size:80%;'>Ce jeu se joue à 2 joueurs sur un même navigateur</li>
        <li style='font-size:80%;'>Le joueur 1 joue les jetons rouges et le joueur 2 les jetons jaunes/li>
        <li style='font-size:80%;'>Chacun leur tour, ils vont placer dans la grille 7x6 un jeton rouge pour le joueur 1 et un jeton jaune pour le joueur 2</li>
        <li style='font-size:80%;'>Remarque : les jetons remplissent les colonnes de la grille de bas en haut, elles sont "soumises" à la gravité, ce n'est pas un placement libre</li>
        <li style='font-size:80%;'>Le but est d'avoir soit une ligne de 4, soit une colonne de 4, soit une diagonale de 4 de jetons de même couleur pour remporter la victoire</li>
    </ul><br><br><span style='margin-left: 5%; font-weight: bold;'>Compétences utilisés :</span><br><br>
    <ul>
        <li style='font-size:80%;'>Utilisation de JS pour créer des divs "jeton rouge" et "jeton jaune"</li>
        <li style='font-size:80%;'>Utilisation de JS pour faire changer de joueurs entre "joueur 1" et "joueur 2"</li>
        <li style='font-size:80%;'>Utilisation de JS pour détecter dans la grille la positon des jetons rouges et des jetons jaunes</li>
        <li style='font-size: 80%;'>Utilisation de JS pour vérifier les conditions de victoire dans la grille</li>
        <li style='font-size: 80%;'>Utilisation de JS pour faire placer les jetons de bas en haut pour chaque colonnes</li>
    </ul>` 
];


const TexteAnim = [
    `<span style='font-weight: bold; text-align: center; position: relative; display: block; width: 100%; text-align: center; font-size: 120%; top: 2%'>
    Bibliothèque
    </span>
    <br><br>
    <span class="voir-contenu voir-diffuseur" id="voir-bibliotheque">Aller voir</span><br><br>
    <span style='margin-left: 5%; font-weight: bold;'>Présentation :</span><br><br>
    <span style='font-size: 80%;'>La Bibliothèque !
    Ici, des ouvrages vous sont proposés avec chacun, des univers uniques.
    Partez à la découverte de leurs univers.</span><br><br><br>
    <span style='margin-left: 5%; font-weight: bold;'>Compétences utilisés :</span><br><br>
    <ul>
        <li style='font-size:80%;'>Utilisation du logiciel Inkscape pour dessiner les éléments graphiques vectoriels</li>
        <li style='font-size:80%;'>Utilisation du logiciel Synfig Studio pour animer les éléments graphiques vectoriels</li>
        <li style='font-size:80%;'>Gestion des os des éléments graphiques avec le logiciel Synfig Studio</li>
        <li style='font-size: 80%;'>Utilisation du logiciel de montage vidéo VSDC Free Video Editor pour monter les animations 2D :</li>
            <ul>
                <li style='font-size: 80%;'>Chroma Key</li>
                <li style='font-size: 80%;'>Mouvements</li>
                <li style='font-size: 80%;'>Effets vidéo</li>
                <li style='font-size: 80%;'>Sous-titrage</li>
            </ul>
        <li style='font-size: 80%;'>Utilisation du logiciel Blender pour modéliser et animer des éléments 3D notamment pour les génériques</li>
        <li style='font-size: 80%;'>Utilisation de l'IA convertisseur de teste en discours naturel Google IA Texte-to-Speech</li>
        <li style='font-size: 80%;'>Utilisation du logiciel de montage vidéo Cyberlink PowerDirector 365 (version gratuite) pour régler le volume de la vidéo animée (voix, musiques)</li>
    </ul>`, // Bibliothèque


    `<span style='font-weight: bold; text-align: center; position: relative; display: block; width: 100%; text-align: center; font-size: 120%; top: 2%'>
    Mini-séries
    </span>
    <br><br>
    <span class="voir-contenu voir-diffuseur" id="voir-mini-series">Aller voir</span><br><br>
    <span style='margin-left: 5%; font-weight: bold;'>Présentation :</span><br><br>
    <span style='font-size: 80%;'>Les Mini-séries ! Ici, découvrez toutes les Mini-séries généralement issues de "pop culture" et qui vous feront passez un petit moment amusant.</span><br><br><br>
    <span style='margin-left: 5%; font-weight: bold;'>Compétences utilisés :</span><br><br>
    <ul>
        <li style='font-size:80%;'>Utilisation du logiciel Inkscape pour dessiner les éléments graphiques vectoriels</li>
        <li style='font-size:80%;'>Utilisation du logiciel Synfig Studio pour animer les éléments graphiques vectoriels</li>
        <li style='font-size:80%;'>Gestion des os des éléments graphiques avec le logiciel Synfig Studio</li>
        <li style='font-size: 80%;'>Utilisation du logiciel de montage vidéo Cyberlink PowerDirector 365 pour monter les animations 2D :</li>
            <ul>
                <li style='font-size: 80%;'>Effets vidéo</li>
                <li style='font-size: 80%;'>Réglage du volume de la vidéo animée (voix, musiques)</li>
                <li style='font-size: 80%;'>Gestion de transitions</li>
            </ul>
    </ul>` // Mini-séries
];


function voir_anim(){
    document.querySelectorAll(".voir-diffuseur").forEach(element=>{
        if (element.id=="voir-bibliotheque"){
            element.addEventListener("click", ()=>{
                document.querySelector(".portf-diffuseur").classList.add("visible");
                    document.querySelector(".bibliotheque").classList.remove("none");
                    document.body.style.overflowY = "hidden";
            })
        }
        if (element.id=="voir-mini-series"){
            element.addEventListener("click", ()=>{
                document.querySelector(".portf-diffuseur").classList.add("visible");
                    document.querySelector(".mini-series").classList.remove("none");
                    document.body.style.overflowY = "hidden";
            })
        }
    })
    
}

document.querySelectorAll(".portf-case").forEach(PortfCase=>{


    const onClick = ()=>{
        document.querySelectorAll("#portf-texte").forEach(texte=>{
            texte.classList.add("visible");
            texte.scrollTop = 0;
        });
        if (PortfCase.id=="portf-motus"){
            
            document.querySelector(".portf-prog-contenu").innerHTML = TexteSitesJeux[0];
            
        } 


        if (PortfCase.id=="portf-pendu"){

            document.querySelector(".portf-prog-contenu").innerHTML=TexteSitesJeux[1];
        } 



        if (PortfCase.id=="portf-morpion"){
            
            document.querySelector(".portf-prog-contenu").innerHTML=TexteSitesJeux[2];
        }


        if (PortfCase.id=="portf-puiss4"){
            document.querySelector(".portf-prog-contenu").innerHTML=TexteSitesJeux[3];
        }


        if (PortfCase.id=="portf-bibliotheque"){
            document.querySelector(".portf-anim-contenu").innerHTML=TexteAnim[0];
            voir_anim();
        }
        if (PortfCase.id=="portf-mini-series"){
            document.querySelector(".portf-anim-contenu").innerHTML=TexteAnim[1];
            voir_anim();
        }


        
    }
    

    PortfCase.addEventListener("click", onClick);
});

document.querySelector(".btn-retour-diffuseur").addEventListener("click", ()=>{

    document.querySelectorAll(".portf-slider-container").forEach(element=>{
        element.querySelector(".portf-slider").style.transform = "translateX(-0px)";
    })
    
    setTimeout(() => {
        document.querySelectorAll("#elem-diff").forEach(element=>{
            element.classList.add("none")
        })
    }, 1000);
    document.querySelector(".portf-diffuseur").classList.remove("visible");
    document.body.style.overflowY = "visible"; 
})







document.querySelectorAll(".portf-slider-container").forEach(element => {
    //slide suivante
    element.querySelector(".portf-slider").style.transition = "transform 1s";
    element.querySelector(".portf-slider").style.transform = "translateX(-0px)";
    element.querySelector(".portf-fleche-droite").addEventListener("click", () => {
        if (element.querySelector(".portf-slider").style.transform.slice(11,element.querySelector(".portf-slider").style.transform.indexOf("p")) > -1 * element.querySelector(".portf-slider").getBoundingClientRect().width + element.querySelector(".portf-slider > div").getBoundingClientRect().width)  {

            
            element.querySelector(".portf-slider").style.transform = "translateX(" + (parseFloat(element.querySelector(".portf-slider").style.transform.slice(11,element.querySelector(".portf-slider").style.transform.indexOf("p"))) - parseFloat(element.querySelector(".portf-slider > div").getBoundingClientRect().width)) + "px)"

}
});

element.querySelector(".portf-fleche-gauche").addEventListener("click", () => {
        if (element.querySelector(".portf-slider").style.transform.slice(11,element.querySelector(".portf-slider").style.transform.indexOf("p")) < 0) {

            

            element.querySelector(".portf-slider").style.transform = "translateX(" + (parseFloat(element.querySelector(".portf-slider").style.transform.slice(11,element.querySelector(".portf-slider").style.transform.indexOf("p"))) + parseFloat(element.querySelector(".portf-slider > div").getBoundingClientRect().width)) + "px)";

            

}

})

})

document.querySelectorAll(".info").forEach(info=>{
    const onMouseOver = ()=>{
        if (info.id=="inf-ouvr1"){
            document.querySelector("#syn-ouvr-1").classList.add("visible")
        }
        if (info.id=="inf-min1"){
            document.querySelector("#syn-min-1").classList.add("visible")
        }
    }
    const onMouseOut = ()=>{
        document.querySelectorAll(".synopsis").forEach(synopsis=>{
            synopsis.classList.remove("visible")
        })
    }

    info.addEventListener("mouseover", onMouseOver);
    info.addEventListener("mouseout", onMouseOut);
    
})

document.querySelectorAll(".aller-voir").forEach(element=>{
    element.addEventListener("click", ()=>{
        if (element.id=="ep-ouvr1-n1"){
            var newTab = window.open("https://youtu.be/093jYN87-YU", '_blank');
            newTab.focus();
        }
        if (element.id=="ep-min1-n1"){
            var newTab = window.open("https://www.youtube.com/watch?v=VtEI_QsWz0A", '_blank');
            newTab.focus();
        }
    })
})