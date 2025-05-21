import ListFriends_component from "./listFriends";
import SuggestFriends_component from "./suggestFriends";

export default function Friends_page() {
  return (
    <div
      className="w-full h-full rounded grid lg:grid-cols-[calc(100%-320px)_300px] justify-between *:p-4 
    *:rounded"
    >
      <ListFriends_component />
      <SuggestFriends_component />
    </div>
  );
}
