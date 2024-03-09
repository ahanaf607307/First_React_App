import React, { useState } from "react";

export default function About() {
  let button = {
    margin: "0 -10px 0 0"
  }
  let aboutUs = {
    display: "flex",
    justifyContent: "center",
  };

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [myText, setMyText] = useState(" Dark");

  const toggleBtn = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setMyText(" Light ");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setMyText(" Dark ");
    }
  };

  return (
    <div className="a pb-5 position-relative" style={myStyle}>
      <h1 className="fs-1 mb-5 pt-5" style={aboutUs}>
        About Us
      </h1>
      <div className="container text-uppercase">
        expedita commodi tempora, exercitationem minus doloremque natus. Quaerat
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione commodi quidem nisi, fugiat corrupti harum earum facilis, placeat mollitia labore perspiciatis culpa veniam? Ipsa maiores architecto cumque dolorum vero nisi quia saepe voluptatem us minus laboriosam placeat error porro odio perferendis, dolorem cupiditate fuga natus culpa sunt similique adipisci a nulla, sequi iure, explicabo tenetur incidunt iusto optio hic? Cupiditate alias ab repellendus ea earum doloribus quod, dignissimos fuga nam soluta, at quia consectetur laudantium veniam ducimus. Animi hic praesentium mollitia aliquam esse vel modi dolorum optio reprehenderit neque tenetur veritatis omnis amet nemo, similique quaerat deleniti vitae sequi nostrum rem ratione? Vitae, sapiente, explicabo adipisci impedit mollitia quod suscipit aperiam assumenda soluta autem sint harum aut aliquid quia, atque et aliquam quidem ab. Inventore, sint! Repellat, laudantium deserunt! Recusandae molestias repellat omnis! Enim eos animi totam dolorem qui quis autem quae perspiciatis, facilis id nostrum! Molestias, dolore excepturi delectus odio assumenda architecto alias nulla sunt! Obcaecati excepturi autem officia aperiam at neque deleniti architecto debitis magni perspiciatis accusamus quod quas, molestiae porro exercitationem fuga nisi praesentium? Quia nisi asperiores impedit veniam vel molestias cum culpa quam adipisci expedita, error deleniti non quos aspernatur similique. Maiores incidunt doloribus quod saepe modi eius voluptatibus, quas ipsam nobis perspiciatis quasi sequi qui doloremque, ratione dolorem. Sequi neque magni maxime reprehenderit pariatur harum eos quisquam. Doloribus repellendus praesentium unde animi aspernatur ad quasi? Officia ipsa fugiat reiciendis! Cum maxime impedit nemo facere ipsum. Dolorem nisi maxime quo tenetur iusto possimus earum recusandae perferendis expedita. Veritatis architecto fuga illum nostrum qui, animi vitae in hic iusto magnam facere error omnis dolore quam minus eius corporis quas porro! Ea dicta cum aut porro, unde, pariatur aliquid veritatis cumque, commodi repellat molestiae eligendi recusandae quibusdam reprehenderit assumenda possimus quos molestias minus voluptas temporibus voluptate optio. Nihil id veritatis fugit consequatur molestiae vero aut quo similique asperiores, dolorem quos provident voluptatem nostrum eos dolores assumenda ipsum esse modi quibusdam exercitationem praesentium architecto adipisci doloribus? Praesentium explicabo autem perferendis fuga ratione dolore quaerat officiis itaque laborum accusamus! Expedita nemo neque explicabo delectus officia ut ducimus debitis possimus nam! Fuga commodi incidunt optio eos ut alias tenetur, tempora dignissimos minima nisi. Quasi, molestiae magnam? Dignissimos impedit voluptas dolorum officiis, quo molestiae neque iusto? Possimus ipsa eum officia nam pariatur nisi unde, et, quia magni nobis voluptatibus vero harum itaque est. Dolorem, accusantium similique? Beatae laudantium quibusdam esse quis accusamus cupiditate quod nobis iure. Culpa veniam a mollitia assumenda corrupti maxime, est quam reprehenderit tempora? Animi, tempore! Debitis, eos doloremque sequi magnam eaque optio neque odio temporibus exercitationem, inventore, accusamus unde non! Voluptatibus in perferendis fuga vitae tempore, tenetur fugit velit earum. Quaerat soluta distinctio eligendi at error delectus magni earum fugiat iure architecto corrupti qui ut atque illum consectetur quas consequuntur quasi, maiores, natus, tenetur obcaecati. Mollitia qui, blanditiis officia dolorum unde eius reiciendis expedita delectus porro veniam alias! Tenetur delectus sint eligendi. At atque ipsa repudiandae officiis iusto debitis nulla alias dicta corporis nam vel quo distinctio laboriosam voluptate in, nihil nobis sed earum, tempore esse facere error eveniet sequi! Reiciendis, vitae nihil in doloremque eum, soluta natus magni tenetur accusamus explicabo nisi suscipit architecto fugiat pariatur sed ullam rerum sequi blanditiis odio cum dolores quas! Fugiat aliquam culpa, ratione iste quia odit, excepturi rem est ab dicta qui! Veniam, facilis nesciunt a perferendis voluptas, quasi, error cupiditate molestiae consequuntur fugiat enim adipisci. Fugiat accusantium molestiae possimus soluta quibusdam quasi placeat quaerat sit pariatur, libero odio facilis cum vel, autem quo eveniet quisquam itaque atque, minima blanditiis nulla cupiditate sapiente ducimus vitae! Harum voluptate quasi doloremque, excepturi cum fuga reprehenderit ex esse unde iure dignissimos architecto ducimus repudiandae ullam distinctio laudantium, rerum nesciunt dolore praesentium consequuntur! Quo blanditiis neque id obcaecati excepturi voluptatem culpa, impedit in soluta, sunt sapiente voluptate ab perspiciatis atque consequuntur eius dignissimos odio fugit sit officiis eum unde at! Magnam, aut neque consectetur sint dolor ullam, molestias, voluptatibus quasi mollitia minus placeat. Tempore doloribus maxime, excepturi, sapiente dolorem non minima de nisi quas? Voluptatibus, fugiat! Tempore saepe explicabo, quidem eaque, rerum praesentium accusamus quisquam fugit velit temporibus, ipsam labore eius delectus sint libero aliquid nesciunt laudantium quasi. Eligendi excepturi a veniam laboriosam. Porro pe laborum laboriosam voluptates impedit aspernatur voluptatum in illum quae commodi, repellendus earum hic, omnis doloribus totam natus 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil iste, quo quam quos pariatur cum nemo aliquam rem. Autem, beatae ex. Porro, asperiores ab delectus consequatur nihil voluptatem esse placeat. Vitae fugiat sint quod ut odio numquam tempore quia corporis temporibus vero accusantium, reprehenderit nobis sunt harum, unde commodi.
        am alias fugiat minus facere fugit, rquod dolores, incidunt beatae.
      </div>
      <div className="container">
        <button
          type="button"
          onClick={toggleBtn}
          className="btn btn-primary my-3 me-3 position-absolute top-0 end-0"
          style={button}
        >
          {myText}
        </button>
      </div>
    </div>
  );
}
