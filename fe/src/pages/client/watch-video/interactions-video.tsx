import Button_dislike from "../../../components/button_dislike";
import Button_like from "../../../components/button_like";
import Button_report from "../../../components/button_report";
import Button_save from "../../../components/button_save";
import Button_subscribe from "../../../components/button_subscribe";
import Button_EllipsisVertical from "../../../components/button_ellipsisVetical";

export default function Interactions_video() {
  return (
    <div className="flex items-center justify-between">
      {/* infor account and subscribe*/}
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded-full"
          src="https://picsum.photos/320/180"
          alt=""
        />
        {/* total subscribe */}
        <div className="flex flex-col opacity-95 mr-2">
          <span className="font-medium">POST Kids</span>
          <span className="text-xs opacity-65">18.7M subscribers</span>
        </div>
        {/* subcribe */}
        <Button_subscribe />
      </div>

      {/* action user (like, dislike, ...) */}
      <div
        className="flex items-center rounded-full gap-3 *:px-3 *:py-2 *:rounded-full *:cursor-pointer 
      *:hover:opacity-70 *:duration-150"
      >
        <Button_like />
        <Button_dislike />
        <div className="hidden lg:flex items-center rounded-full gap-3 *:px-3 *:py-2 *:rounded-full *:cursor-pointer 
      *:hover:opacity-70 *:duration-150">
          <Button_save />
          <Button_report />
        </div>
       <div className="flex lg:hidden items-center rounded-full gap-3 *:p-2 *:rounded-full *:cursor-pointer 
      *:hover:opacity-70 *:duration-150">
        <Button_EllipsisVertical/>
       </div>
      </div>
    </div>
  );
}
