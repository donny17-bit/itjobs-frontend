import Image from "./imageDropbox";

const ShowImageDropbox = ({ images }) => {
  const show = (image) => {
    return <Image image={image} />;
  };
  return <div className="container">{images.map(show)}</div>;
};

export default ShowImageDropbox;
