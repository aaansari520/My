import React, { useState } from "react";

const About = () => {
  const data =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem faceresed quia cum id nostrum esse pariatur excepturi nemo, voluptates porroaut, perferendis nesciunt consectetur, aperiam voluptatum necessitatibus? Illum doloribus, facilis nemo nisi quos iusto necessitatibus laborum harum a accusamus fugiat inventore dolorum ab repellendus, maxime fuga reprehenderit odio, quae blanditiis quaerat optio vitae. Autem praesentium quod iste consequuntur commodi temporibus nam porro doloribus repellendus dolores hic voluptatum sint at eveniet,est vero neque non labore delectus id consectetur! Perspiciatis libero rerum distinctio suscipit eum velit amet, fugiat quos molestias, minimarecusandae corporis inventore voluptatem reprehenderit nemo, dolorem hic laborum?";
  const [lorem] = useState(data);
  const [show, setShow] = useState(false);

  // console.log("lorem", lorem);
  return (
    <section className="section about-section">
      <h1 className="section-title">About Us</h1>
      <p>
        {show ? lorem : `${lorem.substring(0, 300)}...`}
        <button className="" onClick={() => setShow(!show)}>
          {show ? "Show_Less" : "Read_More"}
        </button>
      </p>
    </section>
  );
};

export default About;
