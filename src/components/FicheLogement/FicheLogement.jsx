import React from "react"
import "./FicheLogement.scss"
import logements from "../../data/logements.json"
import BtnCollapse from "../BtnCollapse/BtnCollapse"
import Notation from "../Rating/Rating"

function FicheLogement({ logementId }) {
   const logement = logements.find((index) => index.id === logementId)
   const title = logement.title
   const hostname = logement.host.name
   const hostpicture = logement.host.picture
   const tags = logement.tags
   const location = logement.location
   const description = logement.description
   const equipements = logement.equipments

   return (
      <section id="fiche-section">
         <h2 className="title">{title}</h2>
         <h3 className="location">{location}</h3>
         <div className="tags">
            {tags.map((tag, index) => (
               <p key={index} className="tag">
                  {tag}
               </p>
            ))}
         </div>
         <div className="host">
            <p className="hostname">{hostname}</p>
            <img className="hostpicture" src={hostpicture} alt="" />
         </div>
         <div className="rating">
            <Notation rating={logement.rating} />
         </div>
         <BtnCollapse id="description" title="Description">
            {description}
         </BtnCollapse>
         <BtnCollapse id="equipments" title="Équipements">
            {equipements.map((equipments, index) => (
               <p key={index}>{equipments}</p>
            ))}
         </BtnCollapse>
      </section>
   )
}

export default FicheLogement
