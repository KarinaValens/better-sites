import Image from "next/image";

export default function IconsSection() {
  return (
    <article>
      <h2 className="display-text">You pay monthly for: </h2>
      <div className="flex icons-group">
        <div className="flex-columns icon-container">
          <Image src={"/media/svgs/conversation.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
          <p className="caption-text">Google Optimized</p>
        </div>
        <div className="flex-columns icon-container">
          <Image src={"/media/svgs/conversation.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
          <p className="caption-text">Google Optimized</p>
        </div>
        <div className="flex-columns icon-container">
          <Image src={"/media/svgs/conversation.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
          <p className="caption-text">Google Optimized</p>
        </div>
        <div className="flex-columns icon-container">
          <Image src={"/media/svgs/conversation.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
          <p className="caption-text">Google Optimized</p>
        </div>
        <div className="flex-columns icon-container">
          <Image src={"/media/svgs/conversation.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
          <p className="caption-text">Google Optimized</p>
        </div>
      </div>
    </article>
  );
}
