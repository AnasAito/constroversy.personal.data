import React, { useState } from "react";
import Modal from "components/modal";
const textList = [
  `Le RGPD impose aux responsables du traitement ainsi qu’aux sous-traitants de maintenir un registre des activités de traitement effectuées sous leurs dispositions. Ce registre contient les réponses sur les questions suivantes :

  Qui ? (le responsable de traitement ou les sous-traitants) , 
  
  Quoi ?(les catégories de données traitées et les personnes concernées),
  
  Pourquoi ?(Les finalités du traitement),
  
  Où ? (les destinataires (organisation, pays tiers) auxquels les données sont transférées),
  
  Jusqu’à quand ? (la durée de conservation),
  
  Comment ? (les mesures de sécurité techniques et organisationnelles)`,
  `Le RGPD impose aux responsables de traitement plusieurs obligations afin de les amener à prédire en amont les éventuelles conséquences négatives de leurs traitements pour les droits et libertés des personnes concernées.`,

  `L’article 25 du RGPD s’appuie sur le fait qu’une protection des données à caractère personnel ne peut être assurée sans la mise en œuvre de mesures techniques et organisationnelles comme : adopter la pseudonymisation des données (remplacement des informations permettant d’identifier une personne par des identifiants factices) ou chiffrement (cryptage de messages afin que seules les personnes autorisées puissent les lire).`,
  `Le RGPD oblige que les données collectées soient réduites au strict nécessaire au regard de la finalité du traitement. Il exige également de prendre des mesures, afin que les données collectées ne soient pas accessibles sans l'accord de la personne physique concernée.`,
  `Les données personnelles collectées par les organisations ne peuvent pas être conservée d’une manière indéfinie. Elles doivent respecter la durée de conservation déterminée selon l’objectif de la collecte. Une fois cet objectif atteint, ces données devraient être archivées, supprimées ou anonymisées.`,
  `Le délégué à la protection des données a pour mission d’informer et de conseiller le responsable du traitement ou du sous traitement ainsi les employées pour être en conformité avec la loi et ses obligations, et veille à contrôler le respect du présent règlement en matière de protection des données à caractère personnel.`
];
const titleList = [
  "Registre des activités de traitement (article 30) ",
  "l’analyse d’impact (article 35): ",
  "Protection des données dès la conception «Privacy by design» (article 25)",
  "Protection des données par défaut «Privacy by default» (article 25)",
  "La limitation de la conservation des données : ",
  "Désignation d’un délégué à la protection des données :"
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
                  Le RGPD encourage les entreprises et organisations à adopter
                  des mesures techniques et organisationnelles dès les premières
                  étapes de la conception des opérations de traitement, afin de
                  garantir dès le départ une meilleur protection et préservation
                  de la vie privée. A titre d’exemple il y a :
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
