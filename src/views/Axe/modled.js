import React, { useState } from "react";
import Modal from "components/modal";
const textList = [
  `Le droit d’être informé ou le droit d’accès permet à la personne de demander de nouvelles informations complémentaires  sur les données personnelles qui la concernent. Elle a désormais le droit de connaître :
 	la durée de conservation des données qui la concernent,
 	la source des données quand elles n’ont pas été collectées auprès de la personne concernée,
 	L’utilisation qui sera faite de ces données
 	Les tiers qui auront accès aux données
 	les informations concernant un profilage éventuel,
 	les  garanties prises en cas de transfert des données hors périmètre de l’UE.
Ces informations doivent être communiquées d’une manière claire simple et compréhensible.
`,
  `Le droit d’accès aux données donne l’habilité à la personne concernée de soumettre une demande d’accès, obligeant les organisations à leur fournir une copie de toutes les données qu’ils détiennent à leur sujet. Les organisations ont un mois pour fournir ces informations et répondre à la demande cependant il a des exceptions au cas où la demande est dépourvue de tout fondement répétitives ou excessives. `,
  `Toute personne physique a le droit de rectifier ou corriger leurs données personnelles si elles sont inexactes ou incomplètes. La personne peut soumettre une demande pour que l’organisation concernée les mette à jour.`,
  ,
  `Le RGPD prévoit que toute personne est en droit de s’opposer au traitement des données personnelles collectées qui la concernant, sur la base de l’intérêt légitime ou de l’exécution d’une tâche d’intérêt public. Elle peut jouir de ce droit par le biais d’un dépôt d’une demande au responsable du traitement pour s'opposer à ce traitement , en mettant en avant « des raisons tenant à sa situation particulière », sauf en cas de prospection commerciale, à laquelle la personne peut s’opposer sans motif.
La Cnil (Commission nationale de l'informatique et des libertés) recommande que ce droit d'opposition soit exercé par le biais d'une case à cocher libellé de la façon suivante « si vous ne souhaitez pas recevoir de notre part des offres commerciales pour nos produits analogues à ceux que vous avez déjà achetés / pour ne plus recevoir nos courriels, merci de cocher la case ci-dessous »
`,
  `Le droit à l’effacement est également connu sous le nom de droit à l’oubli. Le RGPD donne la possibilité aux individus de demander à ce que les organisations suppriment leurs données, et cela après vérifications de ces hypothèses :
 	dès lors que les données ne sont plus nécessaires au regard des finalités pour lesquelles elles ont été collectées,
 	si la personne retire son consentement sur lequel est fondé le traitement ou si elle s’oppose au traitement,
 	si le traitement est illicite ;
`,
  `Le RGPD renforce le droit à la limitation du traitement, il permet à toute personne de demander au responsable de traitement de conserver les données qu’il détient la concernant, mais sans pouvoir les utiliser. Ce droit s’applique si :
 	l’exactitude des données à caractère personnel est contestée par la personne concernée, ce durant une durée permettant de vérifier l'exactitude des données,
 	les données font l’objet d’un traitement illicite,
 	les données personnelles ne sont plus nécessaires à la personne concernée pour la constatation, l'exercice ou la défense de droits en justice,
 	la personne concernée s'est opposée au traitement en vertu de son droit d’opposition.
`,
  `Le RGPD prévoit que toute personne a le droit à la portabilité c'est-à-dire le pouvoir d’obtenir et réutiliser leurs données personnelles à leurs propres fins et pour différents services. Ce droit ne s’applique qu’aux données personnelles qu’un individu a fourni aux responsables du traitement via un contrat ou son consentement.`,
  `Le RGPD renforce explicitement le droit au refus du profilage à des fins de prospection. Ce dernier se base sur L’utilisation d’un algorithme qui a pour but d’analyser les données d’un individu afin d’évaluer son intérêt pour certains types de produits et services, la probabilité qu’il les achète, qu’il se comporte de telle ou telle manière ou encore qu’il soit à tel ou tel endroit. 
Le droit au refus reste inapplicable dans les cas où le profilage est :
 	nécessaire dans le cadre d’un contrat entre la personne concernée et le responsable de traitement,
 	autorisé par le droit de l’Union ou d’un État membre,
 	fondé sur le consentement explicite de l’individu.
`
];
const titleList = [
  "le droit d’être informé ",
  "Le droit d'accès aux données ",
  "Le droit de rectification ",
  "Le droit d’opposition ",
  "Le droit à l'effacement ",
  "Droit à la limitation du traitement ",
  "Le droit à la portabilité des données ",
  "Le droit au refus du profilage ou de décisions automatisées "
];
export default function Modled() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="ml-3">
        {titleList.map((title, index) => (
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
        ))}
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
