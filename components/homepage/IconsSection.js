import Image from "next/image";

export default function IconsSection() {
  return (
    <article className="icons-section">
      <h2 className="title-display">You pay monthly for: </h2>
      <div className="flex wrap icons-group">
        <div className="flex-columns icon-container">
          <Image src={"/media/svg/conversation.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
          <p className="caption-text">Google Optimized</p>
        </div>
        <div className="flex-columns icon-container">
          <Image src={"/media/svg/coding.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
          <p className="caption-text">Hosting</p>
        </div>
        <div className="flex-columns icon-container">
          <Image src={"/media/svg/call_center.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
          <p className="caption-text">Sales Focused</p>
        </div>
        <div className="flex-columns icon-container">
          <Image src={"/media/svg/hand.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
          <p className="caption-text">Hassle Free</p>
        </div>
        <div className="flex-columns icon-container">
          <Image src={"/media/svg/idea.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
          <p className="caption-text">Well Designed</p>
        </div>
      </div>
    </article>
  );
}
