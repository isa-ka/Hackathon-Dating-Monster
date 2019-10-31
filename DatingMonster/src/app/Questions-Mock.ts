import { Question } from './question';

export let QUESTIONS: Question[] = 
[
    {
        name: "Bonjour, désolé je ne ressemble pas vraiment à ma photo de profil.",
        responses: 
        [
            {
                text: "Tu es bien plus effrayant en vrai",
                seduction: 10
            },
            {
                text: "Tu es bien plus beau en vrai",
                seduction: -5
            },
            {
                text: "Non ça va",
                seduction: 0   
            }
        ]
    },
    {
        name: "Tu veux boire quelque chose ?",
        responses: 
        [
            {
                text: "Bloody Mary",
                seduction: 10
            },
            {
                text: "Monster",
                seduction: 0
            },
            {
                text: "Une Belzebuth",
                seduction: -5   
            }
        ]
    },
    {
        name: "Pour moi ce sera un wisky pur feu, j'ai écorché des gens toutes la journée.",
        responses: 
        [
            {
                text: "C'est marrant t'as plus une tête à faire peur aux mémés",
                seduction: 0
            },
            {
                text: "C'est marrant t'as plus une tête à posseder des gens",
                seduction: 10
            },
            {
                text: "C'est marrant t'as plus une tête à chasser les monstres",
                seduction: -5   
            }
        ]
    },
    {
        name: "Et pourtant ça fait deux siècles que je fais ça et je compte bien continuer les deux prochains siècles.",
        responses: 
        [
            {
                text: "Moi dans deux siècles je me vois chez Paul Emploi",
                seduction: 0
            },
            {
                text: "Moi dans deux siècles je me vois six pieds sous terre",
                seduction: -5
            },
            {
                text: "Moi dans deux siècles je me vois Maitre des enfers",
                seduction: 10   
            }
        ]
    },
    {
        name: "C'est ambitieux dis donc! Je me sens bien malheureux avec toi, on va trainer ailleurs ?",
        responses: 
        [
            {
                text: "Il y a ce nouveau club Lucifer, ça te dit d'y faire un tour ?",
                seduction: +30
            },
            {
                text: "On va au cimetière",
                seduction: -50
            },

        ]
    },
    {
        name: "Votre monstrueux partenaire se met à danser...",
        responses: 
        [
            {
                text: "Je danse un tango enflammé",
                seduction: 10
            },
            {
                text: "Je fais la danse des canards",
                seduction: -5
            },
            {
                text: "Je danse une valse endiablée",
                seduction: 0  
            }
        ]
    },
    {
        name: "Vous faites une pause, votre dating s'éloigne pour passer un appel. Un autre monstre vous abborde...",
        responses: 
        [
            {
                text: "Je lui parle de techniques de monstres",
                seduction: 10
            },
            {
                text: "Je lui parle du beau temps",
                seduction: 0
            },
            {
                text: "Je le drague en retour",
                seduction: -5  
            }
        ]
    },
    {
        name: "Votre partenaire reviens, très en colère de vous voir discuter avec un autre monstre, il entame une bagarre...",
        responses: 
        [
            {
                text: "Je plante un pieu dans le coeur de l’autre",
                seduction: 10
            },
            {
                text: "Je jette mon verre à l’autre",
                seduction: 0
            },
            {
                text: "Je les sépare",
                seduction: -5  
            }
        ]
    },
    {
        name: "Après cette altércation vous décidez de partir, où allez vous ?",
        responses: 
        [
            {
                text: "Lov’Hotel",
                seduction: -50
            },
            {
                text: "Cimetière",
                seduction: 10
            }
        ]
    },
    {
        name: "J'ai passé une horrible soirée",
        responses: 
        [
            {
                text: "C'était une soirée parfaite",
                seduction: -5
            },
            {
                text: "Moi aussi",
                seduction: 0
            },
            {
                text: "C'était désastreux",
                seduction: 10
            }
        ]
    },
    {
        name: "On va boire un dernier verre ?",
        responses: 
        [
            {
                text: "Je peux pas je suis en collocation en fausse commune",
                seduction: -5
            },
            {
                text: "J’ai un caveau 4 places viens donc chez moi",
                seduction: 10
            }
        ]
    },
    {
        name: "Voulez-vous hanter ces jours et ces nuits jusqu'à ce que l'appocalypse vous sépare ?",
        responses: 
        [
            {
                text: "Oui !",
                seduction: 500
            },
            {
                text: "Non !",
                seduction: -500
            }
        ]
    },
    
];