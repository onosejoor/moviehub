import Img from "./Img";

export default function NoData({className}) {
  return (
    <>
      <Img
        alt={"no data here"}
        src={"/svg/no_data.svg"}
        placeholder={true}
        className={`${className} w-fit mx-auto`}
      />
    </>
  );
}
