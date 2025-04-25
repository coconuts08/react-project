import React, { useState } from "react";
import ModalSponsor from "../../partials/modals/ModalSponsor";
import { Link } from "react-router-dom";

const children = [
  { name: 'Trixie Mae N', sponsored: '37.50% ', img:'https://facethechildren.org/images/trixie.jpg', age: '12',
    birthday: 'Feb 13, 2013', story: "She came to Face the Children with her older sister, Rose Mae. She is from a poverty stricken area of Manila. Due to the many stresses of poverty, her mother left after she was born. Trixie ended up daily facing the dangers of neglect and abandonment on the streets with her sister.Through the interaction of a Frontline missionary and the Social Services, FTC was able to bring Trixie into full time care and protection. She has now received medical care, and the protective love of caring overseers. In only one year her health improvements have been incredibly encouraging!"  },

  { name: 'Danica V', sponsored: '40.00%', img:'https://facethechildren.org/images/danica.jpg',age: '20',
    birthday: 'Jan 22, 2005', story: "Danica entered into the FTC program with two sisters and cousins in 2012. They had all been roaming streets each day looking for money and food to survive on. Before I only knew how to beg on the streets and I never went to school. But thanks to the FTC workers, who care about us, I now have hope for a good future. I enjoy singing, playing with toys, and watching movies. Danica is enrolled at the Frontline Christian Academy." },

  { name: 'Rose Mae N', sponsored: '40.00%', img:'https://facethechildren.org/images/rosemae.jpg',age: '22',
    birthday: 'Oct 27, 2003', story: "My name is Rose Mae. I am here at Face the Children with my sister Trixie. My family is from a very poor area in Manila. Due to the many stresses of poverty, my mom left after my sister was born. The missionaries of Frontline found my sister and I in Manila, and they helped us come to this safe and blessed place. I am so thankful for Frontline! In the first year here I finally experienced schooling, and now I am enrolled and studying at Frontline Christian Academy!I know God rescued my sister and I for a reason and that He has big plans for our lives." },

  { name: 'Rachelle M', sponsored: '42.00%', img:'https://facethechildren.org/images/opt-rachelle.jpg',age: '19',
    birthday: 'Aug 6, 2006', story: "My name is Rachelle. Before I was even 2 years old, my brother and I were noticed on the streets with my Dad. I was very small, very sick, and needed help. The Frontline missionaries helped us. I was put in the hospital to get better, and when I was released, the government social services allowed my brother and I to go to Face the Children. I am now attending at the Frontline Christian Academy. They have taught me to be good, to behave, and to read, write and speak english. I can only see out of one eye, because of malnourishment when I was younger, but the doctors say my other eye is fine and I am thankful for God bringing me to FTC. I always enjoy when visitors come here to FTC. The thing I enjoy the most is playing games and eating!" },

  { name: 'Richard T', sponsored: '45.00%', img:'https://facethechildren.org/images/opt-don.jpg',age: '19',
    birthday: 'Oct 2, 2006', story: "Richard (aka Donny) comes from a broken home. After being neglected completely by his mother, his father was forced to leave the area, abandoning Donny in the aftermath. He was brought to us by the local Social Services. He is a great young boy full of energy, love, and kindness. He has been with us for around a year. He loves to play basketball and is working hard to catch up on his education." },

  { name: 'Mary Grace V', sponsored: '50.00%', img:'https://facethechildren.org/images/marygrace.jpg',age: '22',
    birthday: 'Apr 22, 2003', story: "I came to the FTC with my two sisters, Danica and Mary Ann. I am now attending School at the Frontline Christian Academy. Before I came to FTC I was always begging for money every night in the town. When I get some money we would buy food. One day we were noticed by some missionaries, who saw us begging, and they began to help us. Eventually, we were allowed to come to the FTC. Now I am not begging, and not saying curse words. God is working in my life, and I am learning about Him everyday. There are no bad memories or experiences here! And I am so happy now that I can eat properly and begin my education. I enjoy singing and playing with the other kids here.Sponsor Now" },

  { name: 'Eugene Lance D', sponsored: '52.50%', img:'https://facethechildren.org/images/eugene.jpg',age: '32',
    birthday: 'Oct 27, 1993', story: "*Note: this is a special sponsorship which also funds an individual cretaker for Eugene. Eugene had a Pediactric Assesment as was diagnosed that his site would not return, and that he has slight autism. Eugene was severely neglected during his primary years and, before coming to Face the Children, he was never taught to properly communicate or take care of himself Eugene \"LanLan\" Diaz was born to Leona, his mother who was a victim of abandonment. As her younger sister says, Leona never received anything from that man, no letters, nothing, nothing. After a long time Leona met another man, got married, and was blessed with a baby girl. But in 1998, a tragic incident happen when Leona was stabbed to death by a drug addicted man. After this incident Leona\'s husband left, leaving Lanlan, who was then 3 years old, in the care of a distant relative. However, due to poverty, this became a serious problem between the new guardian couple. Lanlan was an \"added burden,\" and became the subject of quarrels. Later, Lanlan was transferred to a living quarters unsuitable for humans, in the middle of a small field. He was not tended to properly, not fed well or regularly, and endured years of deprivation and aloneness. He became sickly and malnourished, and this may have been the cause of his total blindness. In 2006 Frontline staff became aware of LanLan, and in only a matter of days acquirred custody of him. Since then he has grown, developed, and undergone several surguries to repair problems in his digestive system. Though he is healthier now, and can still learn, much time was lost in formative years, and his blindness has been diagnosed as irreversible." },

  { name: 'Gladys T', sponsored: '57.50%', img:'https://facethechildren.org/images/opt-gladays.jpg' ,age: '19',
    birthday: 'Apr 21, 2006', story: "She has been in Face the Children since May of 2013. She comes from a broken family and has never known her father. Gladys is joined in FTC with her brother Christopher. They met Frontline and FTC at the regular feeding program in the town. Gladys is enrolled at the Frontline Christian Academy, and loves learning and playing with her classmates!Sponsor Now"},

  { name: 'Julie Ann T', sponsored: '60.00%', img:'https://facethechildren.org/images/julieann.jpg' ,age: '24',
    birthday: 'Oct 5, 2001', story: "My name is Julie Ann. I have been at the FTC for many years. I enjoy the swings, sliding, and trampoline, and also playing touchball and chinese garter. I am beginning to learn basic school. Before I came to FTC I would gather vegetables and fetch water. But then Kuya Jeff Rice came to where we lived, and in time he brought my sister and brother to FTC.Life here at FTC is very good and I get to know the Lord. I am learning many of the stories about the Lord. I am attending school at the Frontline Christian Academy. I am learning so many things at FTC."},

  { name: 'Mark John B', sponsored: '85.00%', img:'https://facethechildren.org/images/opt-mark.jpg' ,age: '17',
    birthday: 'Nov 16, 2008', story: "I am Mark John and have been at the Face the Children for almost my entire life. I love playing games with my friends, and sometimes listening to music.I am attending school at the Frontline Christian Academy. I am happy that FTC helped us, my mom and 3 sisters, escape from the hard street life of Ermita, Manila, where there is always fighting and danger.Thank you to everyone who is helping us!"},

  { name: 'Marian Nhicole B', sponsored: '100.00%', img:'https://facethechildren.org/images/opt-marian.jpg',age: '22',
    birthday: 'Jul 24, 2003', story: "I have been living at the FTC Boarding Home for many years. I enjoy dancing and reading, and am happy to be attending the Frontline Christian Academy, where I am in grade six. Before I was living on the streets of Manila, with my sisters and younger brother, and our mother. My mother was always sacrificing for us to get food and to let my two sisters go to school. One day we met two missionaries from Frontline who started caring about us. One evening my stepfather hot into trouble with my mom and brother, so my mom went to the police station, and our stepfather ran away. After this FTC helped us, and brought us to the boarding homes. I like it here because there is an opportunity to grow up in a safe environment, and to be educated. There are many people here that love us and help us to grow spiritually and learn about the Bible and God. I thank God for all the blessings I have received!" },

    
];

const ChildGridSecond = () => {
  const [selectedChild, setSelectedChild] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (child) => {
    setSelectedChild(child);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedChild(null);
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-6">
        {children.map((child, index) => {
          const sponsoredPercent = parseFloat(child.sponsored.replace('%', ''));

          return (
            <div
              key={index}
              className="bg-white shadow-md  overflow-hidden flex flex-col w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-w-[300px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={child.img}
                  alt={child.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold">{child.name}</h3>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                      onClick={() => openModal(child)}
                    >
                      Sponsor →
                    </button>
                  </div>
                  <Link to="/child-details" state={{ child }} className="text-orange-300 text-xs">  View info </Link>
                </div>
              </div>

              <div className="relative w-full h-7 bg-orange-300">
                <div
                  className="absolute top-0 left-0 h-full bg-orange-500"
                  style={{ width: `${sponsoredPercent}%` }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-semibold text-sm z-10">
                  {child.sponsored} - Sponsored
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <ModalSponsor child={selectedChild} onClose={closeModal} />
      )}
    </div>
  );
};

export default ChildGridSecond;
