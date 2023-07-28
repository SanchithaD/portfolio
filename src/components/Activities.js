import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { activities } from "../data";

// export default function Activities() {
//   return (
//     <section id="activities">
//       <div className="container px-5 py-10 mx-auto">
//         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//           <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//             Other Activities
//           </h1>
//           {activities.map((skill) => (
//             <div class="responsive">
//               <a target="_blank" href={skill}>
//                 <div class="gallery">

//                   <img src={skill.image} alt="Cinque Terre" />

//                   <div class="desc">{skill.title}</div>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

export default function Activities() {
  return (
    <section id="activities">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Other Activities
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {activities.map((skill) => (
            <div class="responsive">
              <a target="_blank" href={skill}>
                <div class="gallery">

                  <img src={skill.image} alt="Cinque Terre" />

                  <div class="desc">{skill.title}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}