import React from "react";

import TeacherCard from "./TeacherCard";

export default function SponsorSection() {
  return (
    <section className=" flex flex-col min-h-screen">
      <h2 className="text-center pb-20 text-2xl text-green-700">Meet the Team</h2>

      <div className="xl:max-w-7xl mx-20 px-4 flex flex-col items-center gap-12 justify-center flex-grow">
        {/* Cards Grid */}
        <div className="w-70 md:w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2024/08/Maam-Doodz-1.png"
            name="Rhoda Lynn P. Dayo, MBA"
            position="School Director"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/JUMAWAN-NELISSA.png"
            name="Nelisa G. Jumawan, LPT"
            position="Academic Department Head"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/CALLEJO-MARIDEL.png"
            name="Maridel M. Callejo"
            position="Finance Department Head"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/CARINGAL-MARK-GABRIEL.png"
            name="Mark Gabriel L. Caringal"
            position="HRAD Department Head"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/UBEDA-II-ALEXANDER.png"
            name="Alexander P. Ubeda II"
            position="IT Department Head"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2024/08/Ms.-Beth.png"
            name="Bethany Joy P. Acoba"
            position="Marketing OIC"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2024/08/Pessina-Rowena-Del-Monte-Disciplinary-Officer.png"
            name="Rowena D. Pessina"
            position="Disciplinary Officer"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/JARON-NIEL-PATRICK.png"
            name="Niel Patrick P. Jaron"
            position="Registrar / Cashier"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/BERNARDINO-MARJORIE.png"
            name="Marjorie C. Bernardino"
            position="Communications Staff"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/PESSINA-MARIA-RIVA.png"
            name="Maria Riva Rose T. Pessina"
            position="School Nurse"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/COVIC-MA.png"
            name="Ma. Aiza B. Covic"
            position="Extra-Curricular Activities Coordinator"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/CRISOLO-MARY-JANE.png"
            name="Mary Jane U. Crisolo"
            position="Stuco Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2024/08/Ilao-Marwin-Razon-Arts-Teacher.png"
            name="Marwin R. Ilao, LPT"
            position="Arts Teacher"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/ARADA-CARLITO-ATIENZA.png"
            name="Carlito B. Arada"
            position="Music Teacher"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/KATIGBAK-JANINE-GOMEZ.png"
            name="Janine G. Katigbak, LPT"
            position="Librarian"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/ILAO-SHARON-ROSE.png"
            name="Sharon Rose B. Ilao"
            position="Pre-Elementary Department Head Kindergarten Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/DELATORRE-JOYCE-AZEL.png"
            name="Joyce Azel A. Dela Torre"
            position="Pre-Elementary Teacher"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/DE-JESUS-MARIA-BALIDOY.png"
            name="Maria B. De Jesus, LPT"
            position="Pre-Elementary Teacher"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/ANGELES-ANGELICA-ROSE-MANILA.png"
            name="Angelica Rose M. Angeles, LPT"
            position="Pre-Elementary Teacher"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/ALCANTARA-LEAREE-CAMARA.png"
            name="Learee C. Alcantara, LPT"
            position="Pre-Elementary Teacher"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/LACERNA-ELISHA-DENIELLE.png"
            name="Elisha Denielle A. Lacerna, LPT"
            position="Pre-Elementary Teacher"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/ABION-LEILA-MAE-DIOMAMPO.png"
            name="Leila Mae D. Abion"
            position="Pre-Elementary Teacher"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/PALOMERA-DONNA-MAY.png"
            name="Donna May C. Palomera, LPT"
            position="Elementary Department Head Grade 1 Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/GALICIA-KAREN-JOY.png"
            name="Karen M. Galicia, LPT"
            position="Grade 2 Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/DIOLE-PAULINE.png"
            name="Pauline M. Diole"
            position="Grade 3 Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/LOZADA-CHRISTINE-JOY.png"
            name="Cristine Joy B. Lozada, LPT"
            position="Grade 4 Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/ARRIOLA-JOHN-MARK.png"
            name="John Mark M. Arriola"
            position="Grade 5 Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/VIARO-CHRISTIAN.png"
            name="Christian S. Viaro"
            position="Grade 6 Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/TORNEO-JEAN.png"
            name="Jean A. Torneo, LPT"
            position="JHS Department Head Grade 8 Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/TOLENTINO-MARY-ROSE.png"
            name="Mary Rose B. Tolentino, LPT"
            position="Grade 7 Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/KATIGBAK-JANINE-GOMEZ-1.png"
            name="Janine G. Katigbak, LPT"
            position="Grade 9 Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/RODRIGUEZ-SARAH-MAY.png"
            name="Sarah May P. Rodriguez, LPT"
            position="Grade 10 Adviser"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/BAGSIC-DENNIS.png"
            name="Dennis F. Bagsic"
            position="Maintenance Staff"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/ANENIAS-ANGELICA-LAGRASON.png"
            name="Angelica L. Anenias"
            position="Maintenance Staff"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/GABULE-ZYREL.png"
            name="Zyrel P. Gabule"
            position="Maintenance Staff"
          />
          <TeacherCard
            img="https://fca.edu.ph/wp-content/uploads/2023/12/VILLAMIN-ROBERTO.png"
            name="Roberto P. Villamin"
            position="Maintenance Staff"
          />
         
        </div>
      </div>
    </section>
  );
}

