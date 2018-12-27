import React, { useEffect } from "react";

interface ILoreum {
  classes?: any;
}

const Loreum: React.SFC<ILoreum> = props => {
  useEffect(() => {
    console.log("render Loreum");
    return () => console.log("unmounting Loreum...");
  });

  return (
    <>
      <h2>Loreum component that has a useEffect hook</h2>
      <p>
        Elit quo asperiores quod maxime quis quia. Nulla eveniet nihil animi
        laborum dolorem. Iure impedit magnam nulla vel minus officiis Doloremque
        soluta laboriosam delectus sunt nihil, earum Repudiandae eaque minima
        illum dolore deserunt eligendi Sint exercitationem debitis voluptatem ex
        atque, ipsa molestiae temporibus Mollitia adipisci quibusdam quisquam ut
        voluptate eligendi similique! Deleniti quaerat perspiciatis neque
        praesentium provident modi! Dolores error perferendis maiores ipsa
        repellat Aliquam tempore harum ullam consequatur accusantium. Quia
        reprehenderit expedita nam id voluptate aspernatur soluta nam optio
        laborum Vel explicabo autem fuga delectus asperiores nemo numquam. Ipsum
        consectetur asperiores magni doloribus voluptatem cum ipsum veritatis.
        Ab excepturi fugiat ut quibusdam quae ducimus placeat id Alias quibusdam
        laudantium consequuntur sapiente voluptate Minima nemo veniam nam quae
        quisquam tempora nisi? Esse eligendi blanditiis ut rem alias Obcaecati
        dignissimos voluptatum laudantium aspernatur totam Facilis voluptatem
        voluptatibus saepe itaque ex Sunt alias qui optio dolores voluptas Ipsum
        quam deserunt nemo ipsam harum Sit iure minima sapiente quam nemo
        voluptas consectetur! Fugit nesciunt eius velit odio consequatur. Nulla
        excepturi voluptas facere tempora in, dignissimos! Maiores tempore
        aliquam unde accusantium exercitationem aut tempore Veniam impedit
        pariatur ut error aut soluta! Laborum praesentium molestias atque
        eligendi voluptas. Ex earum quasi quisquam laudantium dolore Sint
        suscipit impedit suscipit libero alias quasi. Sed exercitationem dolor
        nihil amet excepturi earum. Saepe eum officiis nihil veniam libero.
        Placeat aliquam consequuntur itaque laudantium accusantium iure eveniet
        Obcaecati saepe ex sapiente quae eaque quaerat Unde ipsam ducimus harum
        quae assumenda quia qui totam Rem consectetur eligendi facilis qui
        eveniet. Consectetur ipsum laudantium ipsa reiciendis modi recusandae?
        Sequi dolore libero perferendis molestias fuga. Omnis facilis totam ab
        ratione repellendus. Enim laudantium unde numquam quae quae? Soluta esse
        commodi voluptate magni reiciendis possimus optio. Esse vel dolorem
        iusto ipsam modi! Rem voluptatem dicta neque aspernatur quasi? Quibusdam
        amet eum minima eligendi tempora Quisquam labore saepe enim architecto
        id Error fuga totam ad sed laudantium rem? Praesentium soluta laudantium
        officiis modi iusto Illo beatae impedit molestiae molestias culpa Maxime
        ad quaerat nulla fugiat amet? Nostrum esse quidem porro atque eius.
        Doloribus quaerat amet recusandae numquam ea laborum Error minima
        dolorum a consectetur error tempora! Necessitatibus nostrum consectetur
        laborum libero reprehenderit Consequuntur sequi illo maiores ipsam
        sapiente, natus maiores Ex est fuga veniam magnam asperiores assumenda.
        Labore autem distinctio harum quos id Dignissimos porro soluta aut quis
        sequi veritatis. Rerum dignissimos eum omnis doloremque ducimus? Magni
        cum similique voluptatem dignissimos aliquid Quaerat culpa praesentium
        nihil sed nam Autem quas dolores magni magni amet. Esse culpa expedita
        minus exercitationem exercitationem Facilis voluptatem saepe cumque
        tenetur suscipit, necessitatibus. Molestiae facilis ipsam tempore fugit
        ipsum similique hic dolorum. Earum numquam sequi molestias tenetur quos
        itaque vero Natus possimus eius quaerat enim dolore Architecto adipisci
        consectetur deleniti ipsum delectus molestiae? Nisi officia adipisci
        impedit veritatis corrupti. Expedita beatae aliquid rem iure cum Iure
        provident laboriosam voluptatibus eaque impedit voluptate perspiciatis
        exercitationem. Optio iure et consequuntur exercitationem dolores.
        Quidem ab eligendi laborum aut labore. Fugiat dolorem esse iure
        excepturi fugit Fugiat architecto similique quod veniam totam tenetur at
        sequi
      </p>
    </>
  );
};

export default Loreum;
