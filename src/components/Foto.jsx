import "../stylesheets/Foto.css";
const Foto = ({img, clase}) => {
  return (
    <>
        <img className={clase} src={img} alt="" />
    </>

  )
}

export default Foto