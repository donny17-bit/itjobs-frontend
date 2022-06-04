import React from "react";
import Image from "next/image";

export default function TestiCard(props) {
  const { image, name, job, testimonial } = props.data;

  return (
    <div className="card p-4 border-0 shadow text-center">
      <div className="mb-3">
        <Image
          src={image}
          alt="testimonial user image"
          width={80}
          height={80}
          objectFit="contain"
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
      <div>
        <h5 className="fw-semibold">{name}</h5>
        <p className="opacity-75">{job}</p>
        <p className="mb-0">{testimonial}</p>
      </div>
    </div>
  );
}
