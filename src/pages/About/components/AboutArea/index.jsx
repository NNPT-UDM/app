import React from "react";
import About2 from "../../../../assets/images/photos/about2.webp";
export default function AboutArea() {
  return (
    <section class="section-space pt-0 mb-n1">
      <div class="container">
        <div class="about-thumb">
          <img src={About2} alt="Image" />
        </div>
        <div class="about-content">
          <h2 class="title">Best Cosmetics Provider</h2>
          <p class="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel arcu
            aliquet sem risus nisl. Neque, scelerisque in erat lacus ridiculus
            habitant porttitor. Malesuada pulvinar sollicitudin enim, quis
            sapien tellus est. Pellentesque amet vel maecenas nisi. In elementum
            magna nulla ridiculus sapien mollis volutpat sit. Arcu egestas massa
            consectetur felis urna porttitor ac.
          </p>
        </div>
      </div>
    </section>
  );
}
