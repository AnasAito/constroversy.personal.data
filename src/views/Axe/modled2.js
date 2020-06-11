import React, { useState } from "react";
import Modal from "components/modal";
const textList = [
  "Le RGPD impose aux responsables du traitement ainsi qu’aux sous-traitants de maintenir un registre des activités de traitement effectuées sous leurs dispositions. Il contient les réponses sur les questions suivantes (Qui ? Quoi ? Pourquoi ? Ou? Jusqu’à quand ?  comment ?)",
  `Le RGPD impose aux responsables de traitement plusieurs obligations afin de les amener à prédire en amont les éventuelles conséquences négatives de leurs traitements pour les droits et libertés des personnes concernées.`,

  `Adopter la pseudonymisation (remplacement des informations permettant d’identifier une personne par des identifiants factices) ou chiffrement (cryptage de messages afin que seules les personnes autorisées puissent les lire).`,
  `Le RGPD encourage les plateformes de réseaux sociaux à modifier les paramètres du profil des utilisateurs pour le rendre le plus confidentiel, par exemple en limitant dès le départ l’accessibilité du profil des utilisateurs afin qu’il ne soit pas accessible par défaut à un nombre indéterminé de personnes.`,
  `Il a pour mission de d’informer et de conseiller le responsable du traitement ou du sous traitement ainsi les employées pour être en conformité avec la loi et ses obligations et veille à contrôler le respect du présent règlement en matière de protections des données à caractère personnel.`
];
const titleList = [
  "Registre des activités de traitement (article 30) ",
  "l’analyse d’impact (article 35): ",
  "Protection des données dès la conception «Privacy by design» (article 25)",
  "Protection des données par défaut «Privacy by default» (article 25)",
  "Désignation d’un délégué à la protection des données "
];
export default function Modled2() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="">
        {titleList.map((title, index) => {
          return (
            <>
              {index == 2 ? (
                <p>
                  Le RGPD encourage les entreprises et à adopter des mesures
                  techniques et organisationnelles dès les premières étapes de
                  la conception des opérations de traitement, afin de garantir
                  dés de le départ une meilleur protection et préservation de la
                  vie privée. A titre d’exemple il y a :
                </p>
              ) : (
                <></>
              )}
              <p
                className="px-3 font-medium text-blue-500 cursor-pointer"
                onClick={() => {
                  setText(textList[index]);
                  setTitle(title);
                  setOpen(true);
                }}
              >
                {title}
              </p>
            </>
          );
        })}
      </div>
      <Modal
        text={text}
        title={title}
        show={open}
        close={() => setOpen(false)}
      />
    </>
  );
}
